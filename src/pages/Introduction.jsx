import React from "react";
import PradipImage from "../assets/Pradip-ANANDA.jpg";

function Introduction(){

    return(
        <section className="Introduction">
            <img src={PradipImage} alt="autoPortrait" />
            <div className="Introduction-Description">
            Développeur passionné dans le domaine du web !
            Je conçois et réalise des sites web du cahier des charges à la mise en ligne.
            </div>
        </section>
    )
}

export default Introduction;