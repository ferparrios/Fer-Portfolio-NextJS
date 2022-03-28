import Link from "next/link";
import React from "react";

export interface ProjectCardProps {
  image: string;
  title: string;
  githubLink?: string;
  productionLink?: string;
  description: string;
  tecnologies: string[];
}

export const ProjectsCard = (props: ProjectCardProps) => {

  // const array1 = props.tecnologies.forEach(e => (<p>e</p>))

  const array1 = props.tecnologies.forEach(e => (
    <ul>
      <li>{e}</li>
    </ul>
  ))
  return (
    <div className="projects-card-container">
      {/* <div className="row g-0"> */}
      <div className="projects-card-image-container">
        <img
          src={props.image}
          className="projects-card-image"
          alt="..."
        />
      </div>

      <div className="projects-card-content-container">
        <div className="card-body">
          <h2 className="projects-card-title">
            <b>Proyecto:</b> <br />
            {props.title}
          </h2>
          <p className="projects-card-text">
            <b>Description:</b> <br /> {props.description}
          </p>
          <p className="projects-card-text">
            <b>Tecnologías Usadas:</b> <br /> 
          </p>
          {array1}
          {props.productionLink && (
            <div>
              <p className="projects-card-text">Enlace:</p>
              <Link href={props.productionLink}>
                <a>{props.productionLink}</a>
              </Link>
            </div>
          )}
          {props.githubLink && (
            <div>
              <p className="projects-card-text">Repositorio:</p>
              <Link href={props.githubLink}>
                <a>{props.githubLink}</a>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};
