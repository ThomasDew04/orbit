import { Link } from "react-router-dom";

function Neptune() {
    return (
        <div className="neptune-orbit">
            <Link className="neptune" to={`/neptune`}>
                <div className="neptune-face front" />
                <div className="neptune-face back" />
                <div className="neptune-face left" />
                <div className="neptune-face right" />
                <div className="neptune-face top" />
                <div className="neptune-face bottom" />
            </Link>
        </div>
    );
}

export default Neptune;