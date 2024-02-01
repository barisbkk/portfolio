import { useNavigate } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <div className="notFound">
        <h2>Looking like you're lost!</h2>
        <p>The page you are looking for not available!</p>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    </div>
  );
};

export default NotFound;
