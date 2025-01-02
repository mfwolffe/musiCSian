"use client";


import { List } from "flowbite-react";
import { LiaOrcid } from "react-icons/lia";
import HoverNav from "../HoverNav/HoverNav";
import {  PiGithubLogoDuotone as GitLinkIco,
          PiGitPullRequestDuotone as GitIco,
          PiMusicNotesSimpleLight as MusIco,
          PiChalkboardTeacherLight as TutIco,
          PiChalkboardSimpleDuotone as TaIco,
          PiLinkedinLogoDuotone as LInLinkIco,
          PiInstagramLogoDuotone as InsLinkIco, 
          PiChatTeardropDotsDuotone as ChtLinkIco,
} from "react-icons/pi";
import { HumanResources } from "../HumanResources";


// TODO @mfwolffe just have one?
interface ProfileHeaderProps {
  name:      string;
  imagePath: string;
}

interface ProfileSidebarProps {
  name:      string;
  imagePath: string;
}

const liaOrcid   = <LiaOrcid   className="text-[oklch(var(--p))]" />
const gitLinkIco = <GitLinkIco className="text-[oklch(var(--p))]" />
const linLinkIco = <LInLinkIco className="text-[oklch(var(--p))]" />
const insLinkIco = <InsLinkIco className="text-[oklch(var(--p))]" />
const chtLinkIco = <ChtLinkIco className="text-[oklch(var(--p))]" />


const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, imagePath }) => {
  return (
    <>
      <div className="avatar w-full mt-1">
        <div className="ring-accent-content ring-offset-base-100 w-24 rounded-full ring ring-offset-2 ml-auto mr-auto">
          <img src={imagePath} />
        </div>
      </div>

      <h2 className="text-center text-primary text-lg font-normal subpixel-antialiased my-3">
        { name }
      </h2>
    </>
  );
}


const ProfileBio: React.FC = () => {
  return (
    <>
      <List className="py-3 text-secondary-content">
        <List.Item icon={GitIco}>CS Major @ JMU</List.Item>
        <List.Item icon={TaIco}>Lead CS TA @ JMU</List.Item>
        <List.Item icon={TutIco}>Math, chem, & CS tutor</List.Item>
        <List.Item icon={TaIco}>CS Ambassador @ JMU</List.Item>
        <List.Item icon={MusIco}>Classically Trained Musician</List.Item>
      </List>
    </>
  );
}


const ProfileDetails: React.FC = () => {
  return (
    <>
      <List className="py-3 tracking-wider">
        <HoverNav linkIconImg={gitLinkIco} navPath="https://github.com/mfwolffe" linkText="Github" ></HoverNav>
        <HoverNav linkIconImg={linLinkIco} navPath="https://www.linkedin.com/in/matthew-forrester-wolffe-563227328/" linkText="LinkedIn" ></HoverNav>
        <HoverNav linkIconImg={insLinkIco} navPath="https://www.instagram.com/mfwolffe/" linkText="Instagram" ></HoverNav>
        <HoverNav linkIconImg={liaOrcid}   navPath="https://orcid.org/0009-0009-1072-0013" linkText="OrcID" ></HoverNav>
        <HoverNav linkIconImg={chtLinkIco} navPath="" linkText="Schedule a Chat!" ></HoverNav>
      </List>
    </>
  );
}


const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ name, imagePath }) => {
  return (
    <>
      <aside className="sticky top-0 h-full">
        {/* TODO @mfwolffe consider a card? */}
        <div className="h-full w-80">
          <div className="h-full overflow-y-auto overflow-x-hidden rounded px-3 py-4 bg-secondary">
            <ProfileHeader name={name} imagePath={imagePath} />
            <HumanResources classString="" />

            <ProfileBio />
            <HumanResources classString="" />

            <ProfileDetails />
          </div>
        </div>
      </aside>
    </>
  );
}


export default ProfileSidebar;
