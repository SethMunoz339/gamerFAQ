import { useQuery } from "@apollo/client";

import QuestionList from "../components/QuestionList";
import QuestionForm from "../components/QuestionForm";
import Games from "../components/Games";
import { QUERY_QUESTIONS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_QUESTIONS);
  const questions = data?.questions || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div>
          <h2>Welcome to Gaming Questions!</h2>
          <p>
            This is a place where you can ask questions about any game you want!
          </p>
          <Games />
        </div>
      </div>
    </main>
  );
};

export default Home;
