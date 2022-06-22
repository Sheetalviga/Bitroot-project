import React from "react";
import "./ProjectCards.css";
export default function Card(props) {
  return (
    <div className="hoverEffect">
      <div className="container">
        <img
          className="image"
          width="100%"
          height="220px"
          src={props.project.thumbnail.small}
        />
        <div class="middle">
          <div
            class="text"
            onClick={() => props.getProjectDetail(props.project)}
          >
            Learn more
          </div>
        </div>
      </div>
      <div className="contentContainer">
        <div>
          <span className="title">{props.project.title}</span>
        </div>
        <div style={{ marginTop: "7%" }}>
          <p className="content">{props.project.content}</p>
        </div>
        <div className="authorDetails">
          <div>
            {props.project.author.name} - {props.project.author.role}
          </div>
          <div>{props.project.date}</div>
        </div>
      </div>
    </div>
  );
}
