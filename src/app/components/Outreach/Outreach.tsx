
import { Outreach } from "@/types";
import ContentHeader from "../ContentHeader/ContentHeader";

import styles from './Outreach.module.css'
import { outReaches } from "@/app/data/data";


const OutreachCard: React.FC<Outreach> = ({ name, date, role, longerDescript,  }) => {
  return (
    <>
      <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border mb-4">
        <div className="collapse-title text-xl font-medium">{ name } <span className="text-sm ml-2 text-secondary-content">{ date ?? "" }</span></div>
        <div className="collapse-content">
          <p>{ longerDescript }</p>
        </div>
      </div>
    </>
  );
}


const AboutOutreach = () => {
  return (
    <>
      <div id="outreach" className={`${styles.outReachContainer} w-[100%] mt-6`}>
        <div className="mb-6">
          <ContentHeader title="outreach" inCard={false} />

          <div className={`mb-8 pl-6 pr-6`}>
            {
              outReaches.map((outreach) => (
                <OutreachCard key={outreach.name} {...outreach}  />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutOutreach;