"use client";

import styles from './ContentHeader.module.css'


interface ContentHeaderProps {
  title:  string;
  aside?: string;
  inCard: boolean;
}



const ContentHeader: React.FC<ContentHeaderProps> = ({ title, inCard, aside='' }) => {
  return (
    <div className="pl-5 pt-4 pb-4">
      {/* this is atrocious lol */}
        <h1 className={`mr-auto subpixel-antialiased ${inCard ? 'text-2xl' : 'text-4xl'}`}>{ title } { !aside ? '' : <span className={`text-sm ${styles.asideText}`}>{ aside }</span> }</h1>
    </div>
  );
}

export default ContentHeader;
