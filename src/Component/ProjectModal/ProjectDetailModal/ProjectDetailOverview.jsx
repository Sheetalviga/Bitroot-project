import React from "react";
import "./ProjectDetailOverview.css";
import CloseIcon from "@mui/icons-material/Close";
export default function ProjectDetailsModal(props) {
  console.log(props.projectDetails);
  return (
    <div className="projectDetailContainer">
      <div style={{ height: "60%" }}>
        <div className="iconContainer">
          <CloseIcon
            className="icon"
            onClick={() => {
              props.closeModal();
            }}
          />
        </div>
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src={props.projectDetails.thumbnail.small}
        />
      </div>
      <div style={{ padding: "4%" }}>
        <div>
          <span style={{ fontWeight: "700", fontSize: "25px" }}>
            {props.projectDetails.title}
          </span>
        </div>
        <div style={{ marginTop: "3%" }}>
          <p style={{ color: "grey" }}>{props.projectDetails.content}</p>
        </div>
        <div className="author">
          {props.projectDetails.author.avatar ? (
            <div>
              <img
                className="avatar"
                src={props.projectDetails.author.avatar}
              />
            </div>
          ) : (
            ""
          )}

          <div>
            {props.projectDetails.author.name} -{" "}
            {props.projectDetails.author.role}
          </div>
        </div>
      </div>
    </div>
  );
}
