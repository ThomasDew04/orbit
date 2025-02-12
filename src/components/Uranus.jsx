import { Link } from "react-router-dom";

function Uranus() {
    return (
        <div className="uranus-orbit">
            <Link className="uranus" to={`/uranus`}>
                <div className="uranus-face front" />
                <div className="uranus-face back" />
                <div className="uranus-face left" />
                <div className="uranus-face right" />
                <div className="uranus-face top" />
                <div className="uranus-face bottom" />
            </Link>
        </div>
    );
}

export default Uranus;