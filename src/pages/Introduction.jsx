import React from "react";
import PradipImage from "../assets/Pradip-ANANDA.jpg";

function Introduction(){

    return(
        <section className="Introduction">
            <img src={PradipImage} alt="autoPortrait" />
            <div className="Introduction-Description">
            Développeur passionné dans le domaine du web depuis plus de 6 ans, actuellement développeur Web.
            Je conçois et réalise des sites web du cahier des charges à la mise en ligne.
            Je developpe aussi en JAVA, ce qui me permet de développer des applications mobiles android
            </div>
        </section>
    )
}

export default Introduction;