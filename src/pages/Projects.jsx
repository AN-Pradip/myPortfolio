import React from "react";
import InfoProjects from "../ProjectsData.json";

function Projects(){

    function OpenModal(){
    }

    return(
        <section className="Projects">
            {InfoProjects.map((InfoProject) => {
            return(
                <article key={InfoProject.id} onClick={() => {OpenModal()}}>
                    <div className="InfoProject--article">
                        <img src={InfoProject.coverURL} alt="" className="InfoProject--article--img" />
                        <h2 className="InfoProject--article--title">{InfoProject.title}</h2>
                    </div>
                </article>
            )
            })}
        </section>
    )
}

export default Projects;