import React, { useEffect, useState } from "react";
import { fget } from "../../ApiCalls/ApiCall";
import Card from "./ProjectCards/ProjectCards";
import "./ProjectOverview.css";
import Modal from "@mui/material/Modal";
import ProjectDetailsModal from "../ProjectModal/ProjectDetailModal/ProjectDetailOverview";
export default function ProjectOverview() {
  const [projectList, setProjectList] = useState([]);
  const [isOpenProjectDetailModal, setIsOpenProjectDetailModal] =
    useState(false);
  const [projectDetails, setProjectDetails] = useState([]);
  const getProjectDetail = (e) => {
    setProjectDetails(e);
    setIsOpenProjectDetailModal(true);
  };
  useEffect(() => {
    fget().then((res) => {
      setProjectList(res.data);
    });
  }, [projectList]);

  return (
    <>
      <div className="row">
        {projectList.map((project, index) => (
          <div key={index} className="column">
            <Card project={project} getProjectDetail={getProjectDetail} />
          </div>
        ))}
      </div>
      <div>
        <Modal
          className="modal"
          open={isOpenProjectDetailModal}
          onClose={() => setIsOpenProjectDetailModal(!isOpenProjectDetailModal)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ProjectDetailsModal projectDetails={projectDetails} closeModal={()=>setIsOpenProjectDetailModal(!isOpenProjectDetailModal)} />
        </Modal>
      </div>
    </>
  );
}
