import React from "react";

export interface ProjectCardProps {
  image: string;
  title: string;
  githubLink?: string;
  productionLink?: string;
  description: string;
  tecnologies: string;
}

export const ProjectsCard = (props: ProjectCardProps) => {
  return (
    <div className="card mb-3" style={{ maxWidth: 1040, margin: "5% auto" }}>
      <div className="row g-0">
        <div className="col-md-8">
          <img
            src={props.image}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
              <small className="text-muted">{props.tecnologies}</small>
            </p>
            {props.productionLink && (
              <p className="card-text">
                <small className="text-muted">{props.productionLink}</small>
              </p>
            )}
            {props.githubLink && (
              <p className="card-text">
                <small className="text-muted">{props.githubLink}</small>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
