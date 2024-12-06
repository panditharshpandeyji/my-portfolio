import React from "react";
import Project from "./Project";
import "./Pro.css";
const ProjectList = () => {
  // Example data for projects
  const projects = [
    {
      title: "EM Accounts Live Project",
      description:
        "This application focuses on society management and offers dynamic features for efficient operations. I worked on every aspect of this project",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJP-fgszMpL0NrgOhxfbrHqf9NcLgO9xCb9w&s",
      projectUrl: "http://13.202.179.147/SocietyMaintenance",
    },
    {
      title: "College Bus Schedule Application",
      description:
        "I developed a College Bus Schedule Application aimed at simplifying transportation for students.",
      imageUrl:
        "https://t3.ftcdn.net/jpg/05/71/69/10/360_F_571691018_GxAIRdpQ1wk38db2lYkWQEhxqalnBsL3.jpg",
      projectUrl: "",
    },
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
