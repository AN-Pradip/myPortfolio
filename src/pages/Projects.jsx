import React, { useState } from "react";
import InfoProjects from "../ProjectsData.json";

function Projects(){
    const [OpenedModal, setOpenedModal] = useState(0);

    function OpenModal(clicked_id){
        const modal = document.getElementById(clicked_id);
        setOpenedModal(clicked_id)
        modal.showModal()
    }
    function CloseModal(event){
        const modal = document.getElementById(OpenedModal);
        if(event.target === modal) {
            modal.close();
        }
    }

    return(
        <section className="Projects" onClick={(event) => {CloseModal(event)}}>
            {InfoProjects.map((InfoProject) => {
            return(
                <article key={InfoProject.id} onClick={() => {OpenModal(InfoProject.id)} } >
                    <div className="InfoProject--article">
                        <img src={InfoProject.coverURL}  alt="" className="InfoProject--article--img" />
                        <h2 className="InfoProject--article--title">{InfoProject.title}</h2>
                    </div>
                    <dialog className="InfoProject--modal" id={InfoProject.id}>
                        <div >
                            <img src={InfoProject.coverURL} alt="" className="InfoProject--modal--img" />
                            <h2 className="InfoProject--modal--title">{InfoProject.title}</h2>
                            <p className="InfoProject--modal--description" > {InfoProject.description} </p>
                            <div className="InfoProject--modal--stacksAndtools">
                                <h3>Stacks and Tools</h3>
                                <ul>
                                {InfoProject.stacksAndtools.map((StackOrTool) => {
                                    return(
                                        <li> {StackOrTool} </li>
                                    )
                                })}
                                </ul>
                            </div>
                        </div> 
                    </dialog>
                </article>
            )
            })}
        </section>
    )
}

export default Projects;