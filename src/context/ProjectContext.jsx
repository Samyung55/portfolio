import React, { createContext, useState } from "react";
import { ProjectData } from "./data";

export const ProjectContext = createContext({});

export const ProjectProvider = ({ children }) => {
    const [project, setProject ] = useState(ProjectDate);

    return (
        <ProjectContext.Provider value={{ project }}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectProvider