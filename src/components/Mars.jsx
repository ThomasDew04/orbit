import { Link } from "react-router-dom";

function Mars() {
    return (
        <div className="mars-orbit">
            <Link className="mars" to={`/mars`}>
                <div className="mars-face front" />
                <div className="mars-face back" />
                <div className="mars-face left" />
                <div className="mars-face right" />
                <div className="mars-face top" />
                <div className="mars-face bottom" />
            </Link>
        </div>
    );
}

export default Mars;