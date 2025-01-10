
import { EquipmentCard } from "../Cards/Cards";
import ContentHeader from "../ContentHeader/ContentHeader";

import styles from './Music.module.css'



const AboutMusic = () => {
  return (
    <div id="music" className={`${styles.MusContainer} w-[100%] mt-6`}>

      <div className="mb-6">
        <ContentHeader title="music" inCard={false} />

        <div className={`flex gap-10 items-center flex-col sm:flex-row mb-8 pl-2`}>
          <div className="basis-1/2 pl-8 self-start">
            <p className={`${styles.MusBodyText}`}>
              I am also a "classically trained musician".
              I studied as a William R. Kenan Jr. Music Scholar at UNC Chapel Hill under Michael Kris, principal trombone of the NC Symphony (retired).
              Prior to studying with Professor Kris, I was mentored by Joe Eggebeen (B.M., Juilliard) of Bedminster, NJ.
              I play all the low brass, and, thanks to Mike, was able to learn/perform on "period" instruments like the ophicleide (TODO ?), sackbut (TODO ?), and cimbasso (TODO ?).
              I did not however, complete my degree at UNC.
            </p>
                  
            <p className={`${styles.MusBodyText}`}>
              When it comes to academic interests on the musical side, I'm most interested in the late romantics, historically informed performance, and musical acts of defiance.
              I've been fortunate enough to be able to study/perform music across the eastern United States and around Europe thanks to a travel stipend that was included with my scholarship at UNC.
              Favorite composers include, Mahler, Berlioz, Shostakovich, Bernstein, Strauss, and so many more. 
            </p>

            <EquipmentCard />

          </div>

          <div className="basis-1/2 mr-4 self-start mt-0">
            <img src="/images/duke-chapel-color-diff.webp" />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default AboutMusic;