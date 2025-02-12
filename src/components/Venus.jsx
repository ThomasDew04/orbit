import { Link } from "react-router-dom";

function Venus() {
    return (
        <div className="venus-orbit">
            <Link className="venus" to={`/venus`}>
                <div className="venus-face front" />
                <div className="venus-face back" />
                <div className="venus-face left" />
                <div className="venus-face right" />
                <div className="venus-face top" />
                <div className="venus-face bottom" />
            </Link>
        </div>
    );
}

export default Venus;