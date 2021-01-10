import React from "react";
import Fade from "react-reveal/Fade";
import "../css/Containers/Projects.css";

export function Projects() {
  const state = {
    list: [
        {
            name: 'Amrita E-Wallet',
            detail: "Full Stack App to make digital transaction in our university canteens . Created and Updated the UI screen's with the latest features of VueJS",
            tools: ['VueJs', 'NodeJS', 'MongoDB' ],
            live: '',
            code: '',
        },
        {
            name: 'Covid-19 Tracker',
            detail: "A coronavirus cases tracker built using ReactJS visualizing the spread of the pandemic virus throughout the world. Deployed on firebase.",
            tools: ['ReactJS', 'Node.js','Firebase'],
            live: 'https://arjun-covid19-tracker.web.app',
            code: ''
        },
        {
            name: 'Video Chat Application',
            detail: "A web based video chat application using express, socketJS and webRTC by creating rooms to communicate with each other. Deployed on microsoft azure and google app engine.",
            tools: ['VanillaJS','SocketJS','WerbRTC','NodeJS','Heroku'],
            live: 'https://boiling-river-56198.herokuapp.com/aba689f9-d093-4ccc-a064-8b8efdc9b1c9',
            code: ''
        },
        {
            name: 'Time Table Management System',
            detail: "A full stack application to create time table for college students and faculties by eliminating the conflicts between the teaching hours .Implemented using NodeJS, ReactJS and MySQL",
            tools: ['NodeJS', 'ReactJS', 'MySQL'],
            live: '',
            code: ''
        },
    ]
  };

  return (
    <div id="projects" className="projects">
      <Fade>
        <h1 style={{ paddingTop: "2vw" }}>Projects</h1>
      </Fade>
      <ul>
        {state.list.map(item => (
            <li key = {item.detail}>
                <div className = "cards">
                    <h4 className = "make"> {item.name} </h4>
                    <p> {item.detail} </p>
                    <p className = "tools"> {item.tools.map(tool => (
                        <span key = {tool}> | {tool} | </span>
                    ))} </p>
                    <div>
                    <a href = {item.live ? item.live : null} target="blank">{item.live ? "Live" : null}</a>
                    <span> {item.code ? '|' : null}</span>
                    <a href = {item.code ? item.code : null} target="blank">{item.code ? "Code" : null}</a>
                    </div>
                </div>
            </li>
        ))}
    </ul>
    </div>
  );
}

export default Projects;
