import { Link } from "react-router-dom";

function Jupiter() {
    return (
        <div className="jupiter-orbit">
            <Link className="jupiter" to={"/jupiter"}>
                <div className="jupiter-face front" />
                <div className="jupiter-face back" />
                <div className="jupiter-face left" />
                <div className="jupiter-face right" />
                <div className="jupiter-face top" />
                <div className="jupiter-face bottom" />
            </Link>
        </div>
    );
}

export default Jupiter;