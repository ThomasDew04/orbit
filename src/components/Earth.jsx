
function Earth() {
    return (
        <div className="earth-orbit">
            <div className="earth">
                <div className="earth-face front"></div>
                <div className="earth-face back"></div>
                <div className="earth-face left"></div>
                <div className="earth-face right"></div>
                <div className="earth-face top"></div>
                <div className="earth-face bottom"></div>
                {/* Moon */}
                <div className="moon-orbit">
                    <div className="moon">
                        <div className="moon-face front"></div>
                        <div className="moon-face back"></div>
                        <div className="moon-face left"></div>
                        <div className="moon-face right"></div>
                        <div className="moon-face top"></div>
                        <div className="moon-face bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Earth;