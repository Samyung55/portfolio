import React, { createContext, useContext, useState } from 'react';
import { ProjectData } from './data';

export const ProjectContext = createContext();


export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState(ProjectData); // Initialize with an empty array or your data

  return (
    <ProjectContext.Provider value={{ project }}>
      {children}
    </ProjectContext.Provider>
  );
};


export default ProjectContext; // Export the context itself
