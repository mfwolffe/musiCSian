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

          <div tabIndex={0} role="button" className="">Projects</div>
          <ul tabIndex={0} className={`dropdown-content menu bg-base-100 rounded-box z-[1] w-96 p-2 shadow ${styles.drop}`}>
            <ul>
              <SectionLabel description="Personal" classes="subpixel-antialiased" />
              <li><a className={`${styles.dropItem}`} href="#">MusicCPR (DAW - Thesis)</a></li>
              <li><a className={`${styles.dropItem}`} href="#">Terse</a></li>
              <li><a className={`${styles.dropItem}`} href="#">Primality Instrumentation w/ Intel PIN</a></li>
              <li><a className={`${styles.dropItem}`} href="#">Digital Dipole</a></li>
              <li><a className={`${styles.dropItem} font-mono`} href="#">Woof.sh</a></li>
              <li><a className={`${styles.dropItem} font-mono`} href="#">shellcut</a></li>
              <li><a className={`${styles.dropItem}`} href="#">A Better aTan2</a></li>
              <li><a className={`${styles.dropItem} font-mono`} href="#">{"Local{Toast,Roast,Ghost}"}</a></li>
              <li><a className={`${styles.dropItem}`} href="#">MusicCPR (algorithms for NEA Create)</a></li>
            </ul>
            <ul>
              <SectionLabel description="Selected School" classes="subpixel-antialiased" />
              <li><a className={`${styles.dropItem}`} href="3">Emulator for a y86 ISA CPU</a></li>
              <li><a className={`${styles.dropItem}`} href="3">Raccoon Rush</a></li>
              <li><a className={`${styles.dropItem}`} href="3">dukesh - a shell</a></li>
            </ul>
            <ul>
              <SectionLabel description="Selected Other" classes="subpixel-antialiased" />
              <li><a className={`${styles.dropItem}`} href="3">'Containerization' w/ Ad hoc Nix scripts</a></li>
              <li><a className={`${styles.dropItem}`} href="3">'Containerization' w/ custom Arch Linux images</a></li>
            </ul>
          </ul>
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
        <ul className="menu menu-horizontal px-1">
          <li><a href="">Home</a></li>

          <li>
            <ProjectsDropDown />
          </li>

          <li><a href="#">Outreach</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Moby</a></li>
        </ul>
      </div>
      </div>
    </div>
  )
}


export default TypedNavbar;
