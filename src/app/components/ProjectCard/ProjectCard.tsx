"use client";


import { shortProject } from "@/types";


const ProjectCard: React.FC<shortProject> = ({ title, imgPath, shortDescript }) => {

  const staticBG = imgPath === '';

  return (
    <>
      <div className="card bg-base-100 image-full w-96 shadow-xl">

        { !staticBG && (
        <figure>
          <img src={ imgPath } alt={ title } />
        </figure> 
        )}

        <div className="card-body">
          <h2 className="card-title">{ title }</h2>
          <p>{ shortDescript }</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;