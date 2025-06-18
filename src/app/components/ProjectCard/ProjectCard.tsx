"use client";

import { useState } from "react";
import { shortProject } from "@/types";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: shortProject;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Modal backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal content */}
        <div 
          className="bg-base-100 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="p-6 border-b border-base-300">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl hover:text-primary transition-colors"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          {/* Modal body */}
          <div className="p-6">
            {project.imgPath && (
              <img 
                src={project.imgPath} 
                alt={project.title}
                className="w-full rounded-lg mb-4"
              />
            )}
            
            <p className="text-base-content mb-4">
              {project.longerDescript || project.shortDescript}
            </p>

            {/* Action buttons */}
            <div className="flex gap-4 mt-6">
              {project.url && (
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Live Project
                </a>
              )}
              <button 
                onClick={onClose}
                className="btn btn-ghost"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectCard: React.FC<shortProject> = ({ title, imgPath, shortDescript, longerDescript, url }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const staticBG = imgPath === '';

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        {!staticBG && (
          <figure>
            <img src={imgPath} alt={title} />
          </figure> 
        )}

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{shortDescript}</p>
          <div className="card-actions justify-end">
            <button 
              className="btn btn-primary"
              onClick={handleOpenModal}
            >
              See More
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={{ title, imgPath, shortDescript, longerDescript, url }}
      />
    </>
  );
};

export default ProjectCard;