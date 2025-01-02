import React from "react";
import styles from './HoverNav.module.css'

import { List } from "flowbite-react";


interface HoverNavProps {
  navPath?: string;
  linkText: string;
  linkSymb?: string;
  linkIconImg: React.ReactNode;
}

const HoverNav: React.FC<HoverNavProps> = ({ navPath="#", linkText, linkSymb="➙", linkIconImg: ico }) => {
  return (
    <List.Item className="flex items-center gap-2">
      { ico }
        <a
        href={navPath}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.link} pr-5 tracking-tighter`}
        data-replace={`${linkText} ${linkSymb}`}
        >
          <span>{ linkText }</span>
        </a>
    </List.Item>
  );
};

export default HoverNav;
