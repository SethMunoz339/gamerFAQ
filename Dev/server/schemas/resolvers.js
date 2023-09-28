const { Profile, Game, Question } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate('questions');
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id }).populate('questions');
      }
      throw AuthenticationError;
    },
    games: async (parent, args) => {
      return Game.find();
    },
    game: async (parent, { gameId }) => {
      const singleGame = Question.find({ gameId: gameId }).populate('gameId');
      return singleGame
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw AuthenticationError;
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw AuthenticationError;
    },

    addGame: async (parent, { name, developer, releaseDate, genres }) => {
      const newGame = await Game.create({ name, developer, releaseDate, genres });
      return newGame;
    },

    deleteGame: async (parent, { gameId }) => {
      return Game.findOneAndDelete({ _id: gameId });
    },

    addQuestion: async (parent, { gameId, questionText }, context) => {
      if (context.user) {
        const newQuestion = await Question.create({ questionText, questionAuthor: context.user.name, gameId });
        context.user.questions.push(newQuestion._id);
        await context.user.save();

        return { newQuestion };
      }
      throw AuthenticationError;
    },

    deleteQuestion: async (parent, { questionId }, context) => {
      if (context.user) {
        context.user.questions.pull({ _id: questionId });
        await context.user.save();

        return Question.findByIdAndDelete({ _id: questionId });
      }
      throw AuthenticationError;
    },

    addComment: async (parent, { questionId, commentText }, context) => {
      if (context.user) {
        return Question.findOneAndUpdate(
          { _id: questionId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.name },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },

    removeComment: async (parent, { questionId, commentId }, context) => {
      if (context.user) {
        return Question.findOneAndUpdate(
          { _id: questionId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;