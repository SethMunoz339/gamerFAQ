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
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <QuestionForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <QuestionList
              questions={questions}
              title="Some Feed for Question(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
