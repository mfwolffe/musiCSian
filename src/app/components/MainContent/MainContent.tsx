"use client";

import styles from "./MainContent.module.css"
import ContentHeader from "../ContentHeader/ContentHeader"
import { InterestsCard } from "../Cards/Cards";


const AboutMatt = () => {
  return (
    <div className={`MCContainer w-[100%] mt-6`}>

      <ContentHeader title="about" inCard={false} />


      <h2 className="text-center">Hi this site is currently under construction</h2>
      <p className="text-center">I deployed while still in progress because I couldn't bear to have that bloated jekyll site up for any longer.</p>
      <p className="text-center mb-6">This was a mistake, clearly.</p>


      <div className={`flex gap-6 items-center flex-col sm:flex-row mb-8 pl-2`}>
        <div className="content-text">
          <p className={`${styles.bodyText}`}>
            Hello! I'm Matt.
            I'm a computer science student at James Madison University in Harrisonburg, VA.
            I Began programming late in middle school (in 2009 - I am a "nontraditional", i.e., <em>older</em>, student), choosing  C/C++ as my learner languages - 
            this was perhaps a silly thing to do, and as such, I learned rather slowly.
            After I complete my bachelors at JMU I intend to pursue a PhD in the domain of high performance computing (HPC), human computer interaction (HCI), audio processing, or some meld of those three.
          </p>

          <p className={`${styles.bodyText}`}>
            My favorite language is (unsurprisingly) C, but C earns that honor by virtue of being least irritating to me.
            I am also well-versed in
            <strong> Java, Python, Unix shell scripting, JSX/TSX and fullstack web, assembly, and others. </strong>
            I am a firm believer that BiP (Brass Instrument Principle - that learning one in depth allows you to learn essentially all others with relative ease (no one says BiP. I made it up).) applies too, to programming languages.
          </p>

          <p className={`${styles.bodyText}`}>
            I'm very enthusiastic about Gnu/Linux and the greater FOSS movement;
            On my main machines I drive Cachy, Endeavour, vanilla Arch, NixOS, and MacOS.
            At the moment, I'm also tinkering with Rhino Linux as that seems like an interesting ...endeavor.
          </p>

          <p className={`${styles.bodyText}`}>
            At JMU I'm currently working towards completing an honors thesis in the domains of web audio processing and participatory design.
            The thesis entails building a bespoke digital audio workstation (DAW) within MusicCPR, a free and open source LMS for instrumental music education.
            My thesis is advised by the creator and principal investigator of research carried out on the MusicCPR platform, <a href="">Dr. Michael Stewart</a>.
            The committee additionally includes Drs. Christopher Johnson and Dee A. B. Weikle.
          </p>
        </div>

        <InterestsCard />

      </div>
    </div>
  );
}

export default AboutMatt;
