"use client";

import styles from './TypedNavbar.module.css'
import Typewriter from "../Typewriter/Typewriter";


interface SectionLabelProps {
  classes?:     string;
  description:  string;
}


const SectionLabel: React.FC<SectionLabelProps> = ({ description, classes="" }) => {
  return (
    <>
      <summary className={`${styles.dropGroup} ${classes}`}>{ description }</summary>
    </>
  );
}


const ProjectsDropDown = () => {
  return (
      <div className="dropdown dropdown-bottom dropdown-hover">
        {/* <details> */}
          {/* <summary>Projects</summary> */}

          <div tabIndex={0} role="button" className=""><a href="#projectsCard">Projects</a></div>
        {/* </details> */}
      </div>
  )
}


// TODO @mfwolffe responsiveness
const TypedNavbar: React.FC = () => {
  return (
    <div className="navbar bg-secondary text-neutral-content rounded-md w-[98%] mlr-auto mt-6 pl-4 pr-4">
      <div className="navbar-start w-full">

      <div className="navbar-start">
        <Typewriter final="musi(CS)ian" initial="musician" textClasses="text-2xl text-secondary-content tracking-wide" cursorClasses="bg-primary" accentString="(CS)" />
      </div>

      <div className="navbar-end hidden lg:flex">
        <span className='text-xs text-primary self-center'>Jump to:</span>
        <ul className="menu menu-horizontal px-1">
          {/* TODO: cruft */}
          <li>
            <ProjectsDropDown />
          </li>

          <li><a href="#outreach">Outreach</a></li>
          <li><a href="#music">Music</a></li>
          <li><a href="#moby">Moby</a></li>
        </ul>
      </div>
      </div>
    </div>
  )
}


export default TypedNavbar;
