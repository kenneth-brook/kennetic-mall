import React from "react";

import mallHeadBackground from "../img/homeHead.jpg";
import shopBackground from "../img/pcc.jpg";

function Mall() {
    return (
        <div className="mallWrap">
            <div className="mallHead" style={{ backgroundImage: `url(${mallHeadBackground})` }}>
                <div className="mallHeadText">
                    <h1>Kennetic Cloud Mall</h1>
                    <p>Original art from a variety of artists, in a wide array of styles and genres. Printed on vast catalog of products ready to deliver to your home.</p>
                </div>
            </div>
            <div className="mallBodyWrap">
                <div class="hex">
                    <div class="hex-background">
                        <img src={shopBackground} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mall;