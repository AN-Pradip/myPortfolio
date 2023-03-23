import React from "react";
import Competency from "../components/Competency"

import gitHubImage from "../assets/gitHub.png"
import mongoDBImage from "../assets/mongoDB.png"
import nodeJsImage from "../assets/node Js.png"
import sassImage from "../assets/sass.png"

function Skills(){

    return(
        <section className="Skills">
            <div className="Skills-Skill">
                <div className="eachSkill"> HTML5 <Competency rating={10} id="HTML5" /> </div>
                <div className="eachSkill"> ReactJs <Competency rating={7} id="ReactJs" /> </div>
                <div className="eachSkill"> CSS3 <Competency rating={8} id="CSS3" /> </div>
                <div className="eachSkill"> JavaScript <Competency rating={8} id="Js" /> </div>
                <div className="eachSkill" > Git <Competency rating={8} id="Git" /> </div>
            </div>
            <div className="Skills-Tools">
                    <h2 className="Skills-Tools-Title"> Outils utilisés </h2>
                    <h3> SASS </h3>
                    <img src={sassImage} alt="sass Logo" />
                    <h3> Node Js </h3>
                    <img src={nodeJsImage} alt="node Js Logo" />
                    <h3> Mongo DB </h3>
                    <img src={mongoDBImage} alt="mongoDB Logo" />
                    <h3> GitHub </h3>
                    <img src={gitHubImage} alt="gitHub Logo" />
            </div>
        </section>
    )
}

export default Skills;