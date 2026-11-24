"use client";

import styles from "./MainContent.module.css"
import ContentHeader from "../ContentHeader/ContentHeader"
import { InterestsCard } from "../Cards/Cards";


const AboutMatt = () => {
  return (
    <div className={`MCContainer w-[100%] mt-6`}>

      <ContentHeader title="about" inCard={false} />


      <h2 className="text-center">Hi this site is currently under construction (It's also out of date).</h2>
      <p className="text-center">I deployed while still in progress because I couldn't bear to have that bloated jekyll site up for any longer.</p>
      <p className="text-center mb-6">This was a mistake, clearly.</p>


      <div className={`flex gap-6 items-center flex-col sm:flex-row mb-8 pl-2`}>
        <div className="content-text">
          <p className={`${styles.bodyText}`}>
            Hello! I'm Matt.
            I recently graduated from James Madison University with a Bachelor's in Computer Science.
            I Began programming late in middle school (in 2009 - I was a "nontraditional", i.e., <em>older</em>, student), choosing  C/C++ as my learner languages - 
            this was perhaps a silly thing to do, and as such, I learned rather slowly.
            Someday I intend to pursue a PhD in HCI, hoping to continue the work I began at JMU at another institution.
          </p>

          <p className={`${styles.bodyText}`}>
            My favorite language is C, but C earns that honor by virtue of being least irritating to me (see also: I learned it first).
            I am also well-versed in
            <strong> Java, Python, Unix shell scripting, JSX/TSX and fullstack web, assembly, and others. </strong>
            I'm currently learning Fortran for some reason. I actually quite like many things about the language. I've produced many large scale projects over at <strong><a href="https://github.com/fortrangoingonforty">FortranGoingOnForty</a></strong>. 
            I am a firm believer that BiP (Brass Instrument Principle - that learning one in depth allows you to learn essentially all others with relative ease (no one says BiP. I made it up).) applies too, to programming languages.
          </p>

          <p className={`${styles.bodyText}`}>
            Speaking of languages, I also speak <strong>wolf</strong>, a novel compiled systems language. I designed it and then implemented it with the help of claude. It's built around one idea: memory lives
            in regions, blocks whose contents are all freed together at a point the compiler infers. That gets you C's control over memory without
            malloc and free, and it aims at Rust's safety without lifetime annotations or a fight with the borrow checker. There's no garbage collector, 
            so there are no pauses, as there can be in Go. Concurrency follows the same rule: a region moves between tasks and is never shared, so data races
            are ruled out by construction, without locks. Arithmetic is checked in every build, release included. Everyday builds use wolf's own backend and compile
            fast, and --release goes through LLVM. Wolf is pre-alpha and still moving, but it already runs real programs written in it: a shell, a grep, all 107 GNU core utilities,
            a terminal multiplexer, a web server, and a debugger. Check out the github org over at <strong><a href="https://github.com/wolffe-lang">wolffe-lang</a></strong>.
          </p>

          <p className={`${styles.bodyText}`}>
            I'm very enthusiastic about Gnu/Linux and the greater FOSS movement;
            On my main machines I drive Cachy, Endeavour, vanilla Arch, NixOS, and MacOS.
          </p>

          <p className={`${styles.bodyText}`}>
            I've also been designing a hobbyist unix-like operating system in wolf. It's called PAX. 
            pax is a kernel that runs static Linux x86-64 programs unmodified, with a userspace also built in wolf.
            It's a clean-room implementation of Linux's userspace interface and contains no Linux source. Every claim
            it makes is a scripted test that boots the system, and where the behavior is Linux's, pax is held byte for
            byte to a real Linux booted the same way. It boots on real hardware from a USB stick, installs to disk, and ships
            its own shell, core utilities, editor and debugger, along with its own git and ssh clients, all written in wolf.
            it's early, and it isn't a security boundary yet. If you're interested you can find it in the wolffe-lang org at
            <strong><a href="https://github.com/wolffe-lang/pax">PAX</a></strong>.
          </p>

          <p className={`${styles.bodyText}`}>
            At JMU I completed an Honor's Thesis in the domains of web audio processing and participatory design.
            The thesis entailed building a bespoke digital audio workstation (DAW) within MusicCPR, a free and open source LMS for instrumental music education.
            The DAW featured single and multitrack editing, custom renderings for waveforms, copy/paste and undo, and an effects rack with 27 effects including but not limited to reverb (convolution), glitch, paulstretch, and more.
            It was advised by the creator and principal investigator of research carried out on the MusicCPR platform, <a href="https://hcientist.com">Dr. Michael Stewart</a>.
            The committee additionally includes Drs. Christopher Johnson and Dee A. B. Weikle.
          </p>

          <p className={`${styles.bodyText}`}> 
            {/* this is so pretentious but i love it to this day */}
            Philosophically, I align my conceptions of computing and interactions w/ machines with the 'post-digital' understanding of users of modern technologies & tools as craftspersons;
            that a broader adoption of the view of the desktop workstation as rather, an atelier, is one means of hoisting technological literacies of broader populations.
            
            I draw on Richard Sennet's call to action on this topic, <em>our challenge, I think today is to engage and unpack the narrative of becoming skilled <strong>rather than to be merely passive consumers of the tools of our own time</strong>.</em>
          </p>
        </div>

        <InterestsCard />

      </div>
    </div>
  );
}

// BING BONG!
export default AboutMatt;
