import { Link } from "react-router-dom";

function Mercury() {
    return (
        <div className="mercury-orbit">
            <Link className="mercury" to={`/mercury`}>
                <div className="mercury-face front" />
                <div className="mercury-face back" />
                <div className="mercury-face left" />
                <div className="mercury-face right" />
                <div className="mercury-face top" />
                <div className="mercury-face bottom" />
            </Link>
        </div>
    );
}

export default Mercury;