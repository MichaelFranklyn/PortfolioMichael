import './style.css';
import React from 'react'

function ProjectsContent(props) {

    return (
        <div className="contentProjectsContent">

            <video
                id="my-player"
                controls
                preload="auto"
            >
                <source src={props.video} type="video/mp4"></source>
            </video>

            <div className='divPriContentProjects'>
                <h1>{props.title}</h1>

                <div className='divSecContentProjects'>
                    <p>{props.descricao}</p>

                    <div className='buttonsContentProjectsContent'>
                        <a href={props.codigo}><button>Código</button></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectsContent;