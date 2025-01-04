
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

      <ContentHeader title="Interests" size="2xl"/>

      <ul className="pl-8">
        <li className="list-disc">High Performance Computing</li>
        <li className="list-disc">Human Computer Interaction </li>
        <li className="list-disc">Fullstack Web</li>
        <li className="list-disc">Audio Software</li>
      </ul>
    </div>
  )
}


const MainContent = () => {
  return (
    <div className={`${styles.MCContainer} h-full w-full`}>

      <ContentHeader title="about" size="3xl" />

      <div className={`flex gap-4 items-center flex-col sm:flex-row `}>
        <div className="basis-2/3 pl-8">
          <p className={`${styles.bodyText}`}>
            Hello! I'm Matt.
            I'm a computer science student at James Madison University in Harrisonburg, VA.
            I Began programming late in middle school, choosing  C/C++ as my learner languages.
            This was perhaps a silly thing to do and as such I learned slowly.
            After I complete my bachelors at JMU I intend to pursue a PhD in either the domain of high performance computing (HPC) or human computer interaction (HCI).
          </p>

          <p className={`${styles.bodyText}`}>
            My favorite language is unsurprisingly C, but C earns that honor only by virtue of being least irritating to me.
            I am also well versed in Java, Python, Unix shell scripting, JSX/TSX and fullstack web, assembly, and more.
          </p>

          <p className={`${styles.bodyText}`}>
            I'm very enthusiastic about Gnu/Linux and the greater FOSS movement;
            I currently daily drive endeavourOS on one desktop and NixOS on the other.
            I am also trying Rhino Linux for its unique release approach.
          </p>

          <p className={`${styles.bodyText}`}>At JMU I'm currently working towards completing an honors thesis in the realms of web audio processing and participatory design.
            It entails building a bespoke digital audio workstation (DAW) within MusicCPR, a free and open source LMS for instrumental music.
            The thesis is advised by Dr. Michael Stewart, and committee additionally includes Drs. Christopher Johnson and Dee A. B. Weikle.
          </p>

          <p className={`${styles.bodyText}`}>
            I am also a 'classically trained musician';
            I studied as a William R. Kenan Jr. Music Scholar at UNC Chapel Hill under Mike Kris, retired principal trombone of the NC Symphony.
            I play all the low brass, and was able to learn/perform on "period" instruments like the ophicleide, sackbut, and cimbasso while at UNC.
            I did not complete my degree at UNC, however.
          </p>
          
          <p className={`${styles.bodyText}`}>
            When it comes to academic interests on the music side, I'm interested in the late romantic era, historically informed performance, and music as acts of defiance.
            I play all the low brass instruments and perform on period instruments likethe ophicleide, sackbut, and cimbasso.
          </p>
        </div>

        <InterestsCard />

      </div>
    </div>
  );
}

export default MainContent;