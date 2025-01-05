
import styles from "./MainContent.module.css"


interface ContentHeaderProps {
  size:  string;
  title: string;
}


const ContentHeader: React.FC<ContentHeaderProps> = ({ title, size }) => {
  return (
    <div className="pl-8 pt-6 pb-4">
      <h1 className={`mr-auto subpixel-antialiased text-${size}`}>{ title }</h1>
    </div>
  );
}


const InterestsCard = () => {
  return (
    <div className={`basis-1/3 mr-8 bg-slate-400 h-full self-start mt-6 ${styles.interestsCard}`}>

      <div className="mb-6">
        <ContentHeader title="Interests" size="2xl"/>
        <ul className="pl-8">
          <li className="list-disc">Parallel File Systems</li>
          <li className="list-disc">High Performance Computing</li>
            <ul className="pl-4 list-disc">
              <li>Large Scale Parallel & Distributed Systems (like folding@home!)</li>
              <li>Scientific Computing</li>
              <li>Climate Modeling</li>
              <li>Materials Science</li>
            </ul>
          <li className="list-disc">Human Computer Interaction</li>
            <ul className="pl-4 list-disc">
              <li>Shared Musical Experiences</li>
            </ul>
          <li className="list-disc">Fullstack Web</li>
          <li className="list-disc">Audio Processing</li>
          <ul className="pl-4 list-disc">
            <li>Convultion Engines</li>
          </ul>
        </ul>
      </div>
    </div>
  )
}


const AboutMatt = () => {
  return (
    <div className={`${styles.MCContainer} w-full`}>

      <ContentHeader title="about" size="4xl" />

      <div className={`flex gap-20 items-center flex-col sm:flex-row mb-8`}>
        <div className="basis-2/3 pl-8">
          <p className={`${styles.bodyText}`}>
            Hello! I'm Matt.
            I'm a computer science student at James Madison University in Harrisonburg, VA.
            I Began programming late in middle school, choosing  C/C++ as my learner languages - 
            this was perhaps a silly thing to do, and as such, I learned rather slowly.
            After I complete my bachelors at JMU I intend to pursue a PhD in the domain of high performance computing (HPC), human computer interaction (HCI), audio processing, or some meld of those three.
          </p>

          <p className={`${styles.bodyText}`}>
            My favorite language is (unsurprisingly) C, but C earns that honor by virtue of being least irritating to <strong>me</strong>.
            I am also very well-versed in Java, Python, Unix shell scripting, JSX/TSX and fullstack web, assembly, and others.
          </p>

          <p className={`${styles.bodyText}`}>
            I'm very enthusiastic about Gnu/Linux and the greater FOSS movement;
            On my main machines I drive Cachy, Endeavour, vanilla Arch, NixOS, (and MacOS).
            At the moment, I'm also tinkering with Rhino Linux as that seems like an interesting ...endeavor.
          </p>

          <p className={`${styles.bodyText}`}>
            At JMU I'm currently working towards completing an honors thesis in the domains of web audio processing and participatory design.
            The thesis entails building a bespoke digital audio workstation (DAW) within MusicCPR, a free and open source LMS for instrumental music education.
            My thesis is advised by the creator and principal investigator of research carried out on the MusicCPR platform, <a href="">Dr. Michael Stewart</a> My committee additionally includes Drs. Christopher Johnson and Dee A. B. Weikle.
          </p>

          <p className={`${styles.bodyText}`}>
            I am also a "classically trained musician".
            I studied as a William R. Kenan Jr. Music Scholar at UNC Chapel Hill under Michael Kris, principal trombone of the NC Symphony (retired).
            I play all the low brass, and, thanks to Mike, was able to learn/perform on "period" instruments like the ophicleide (TODO ?), sackbut (TODO ?), and cimbasso (TODO ?).
            I did not however, complete my degree at UNC.
          </p>
          
          <p className={`${styles.bodyText}`}>
            When it comes to academic interests on the musical side, I'm most interested in the late romantics, historically informed performance, and musical acts of defiance.
            I play all the low brass instruments and have performed on period instruments like the ophicleide, sackbut, and cimbasso.
            Favorite composers include, Mahler, Berlioz, Shostakovich, Bernstein, Strauss, and so many more. 
          </p>
        </div>

        <InterestsCard />

      </div>
    </div>
  );
}

export default AboutMatt;
