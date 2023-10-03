import { Link } from "react-router-dom";
import { QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Me = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const me = data?.me || {};
    console.log(me);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Welcome: {me.name}</h1>
            <h2>Your Questions:</h2>
            <ul>
                {me.questions?.map((question) => (
                    <li key={question._id}>
                        <Link to={`/single-game/${question.gameId}`}> View Gamepage</Link> 
                        <p>{question.questionText}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Me;