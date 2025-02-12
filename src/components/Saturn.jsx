import { Link } from "react-router-dom";

function Saturn() {
    return (
        <div className="saturn-orbit">
            <Link className="saturn" to={`/saturn`}>
                <div className="saturn-face front" />
                <div className="saturn-face back" />
                <div className="saturn-face left" />
                <div className="saturn-face right" />
                <div className="saturn-face top" />
                <div className="saturn-face bottom" />
                <div className="saturn-rings" />
            </Link>
        </div>
    );
}

export default Saturn;