import { Link } from "react-router-dom";
import CommentForm from "./CommentForm" ;
const QuestionList = ({
  questions,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!questions.length) {
    return <h3>No Questions Yet</h3>;
  }

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
                    had this question on {question.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>
                    You had this question on {question.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{question.questionText}</p>
            </div>
            <CommentForm questionId={question._id}/>
          </div>
        ))}
    </div>
  );
};

export default QuestionList;
