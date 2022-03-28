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

  // const array1 = props.tecnologies.forEach(e => (
  //   <ul>
  //     <li>{e}</li>
  //   </ul>
  // ))
  return (
    <div className="projects-card-container">
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
            <b>Project:</b> <br />
            {props.title}
          </h2>
          <p className="projects-card-text">
            <b>Description:</b> <br /> {props.description}
          </p>
          <p className="projects-card-text">
            <b>Used Technologies:</b> <br /> 
          </p>
          {
            props.tecnologies.map(e => (
                <ul>
                  <li className="projects-card-technologies-list-item">{e}</li>
                </ul>
              ))
          }
          {props.productionLink && (
            <div>
              <p className="projects-card-text">Link: <br/>
              <Link href={props.productionLink}>
                <a className="projects-card-prod-link">{props.productionLink}</a>
              </Link>
              </p>
            </div>
          )}
          {props.githubLink && (
            <div>
              <p className="projects-card-text">Repository: <br />
              <Link href={props.githubLink}>
                <a>{props.githubLink}</a>
              </Link>
              </p>
              
            </div>
          )}
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};
