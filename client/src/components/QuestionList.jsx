import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import CommmentList from "./CommentList";
import CommentList from "./CommentList";
import { useMutation } from "@apollo/client";
import { DELETE_QUESTION } from "../utils/mutations";
import Auth from "../utils/auth";
const QuestionList = ({
  questions,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!questions.length) {
    return <h3>No Questions Yet</h3>;
  }
  const [deleteQuestion] = useMutation(DELETE_QUESTION);
  const handleDeleteQuestion = async (questionId) => {
    try {
      await deleteQuestion({
        variables: { questionId },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {questions &&
        questions.map((question) => (
          <div key={question._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${question.questionAuthor}`}
                >
                  {question.questionAuthor} <br />
                  <span style={{ fontSize: "1rem" }}>
                    had this question on{" "}
                    {new Date(question.questionCreatedAt).toLocaleDateString()}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>
                    You had this question on{" "}
                    {question.questionCreatedAt.toLocaleDateString()}
                  </span>
                </>
              )}
            </h4>
            {Auth.loggedIn() &&
              Auth.getProfile().data.name === question.questionAuthor && (
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeleteQuestion(question._id)}
                >
                  X
                </button>
              )}
            <div className="card-body bg-light p-2">
              <p>{question.questionText}</p>
            </div>
            <CommentList comments={question.comments} />
            <CommentForm questionId={question._id} />
          </div>
        ))}
    </div>
  );
};

export default QuestionList;
