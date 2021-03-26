import React from 'react'
import { FaTimes } from "react-icons/fa"
const Project = ({project, onDelete}) => {
    return (
        <>
            <p class="border p-1">{project.name}<FaTimes style={{color:"red",cursor:"pointer"}} onClick={() => onDelete(project.id)}/>
            <br/>
            {project.time}</p>
        </>
    )
}

export default Project
