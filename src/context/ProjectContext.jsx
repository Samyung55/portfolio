import React, { createContext, useContext, useState } from 'react';
import { ClientData, ProjectData } from './data';

export const ProjectContext = createContext();


export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState(ProjectData); 
  const [clients, setClients] = useState(ClientData)

  return (
    <ProjectContext.Provider value={{ project, clients }}>
      {children}
    </ProjectContext.Provider>
  );
};


export default ProjectContext; // Export the context itself
