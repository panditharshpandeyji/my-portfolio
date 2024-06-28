import React from "react";
import Project from "./Project";
import "./Pro.css";
const ProjectList = () => {
  // Example data for projects
  const projects = [
    {
      title: "Real Time Chat App",
      description:
        "Developed a dynamic real-time chat application using the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO. The application supports instant messaging with features like user authentication, private and group chats.",
      imageUrl:
        "https://img.freepik.com/free-vector/dating-app-concept-with-chat-box_23-2148275625.jpg?size=626&ext=jpg&ga=GA1.1.1412568945.1701944524&semt=ais_user",
      projectUrl: "https://chat-app-frontend-hp.vercel.app/",
    },
  ];

  return (
    <div className="Projects-section" id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
        />
      ))}
    </div>
  );
};

export default ProjectList;
