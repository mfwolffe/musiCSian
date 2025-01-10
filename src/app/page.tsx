"use client";


import AboutMusic     from "./components/Music/Music";
import AboutProjects  from "./components/Project/Project";
import AboutOutreach  from "./components/Outreach/Outreach";
import AboutMatt      from "./components/MainContent/MainContent";
import ProfileSidebar from "./components/ProfileSidebar/ProfileSidebar";


const imgPath = "/images/matt_atlanta2.png";
const nameHeaderText = "Matthew Forrester Wolffe";


export default function Home() {
  return (
    // <div className="grid grid-cols-[auto_1fr] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-11/12 mlr-auto">

    <div className="grid grid-cols-[auto_1fr] min-h-screen pl-4 pr-4 pt-8 pb-20 gap-6 font-[family-name:var(--font-geist-sans)] !w-[98%] mlr-auto">

      <ProfileSidebar name={nameHeaderText} imagePath={imgPath}  />

      <main className="flex flex-col gap-8 col-start-2">
        <AboutMatt />
        <AboutMusic />
        <AboutProjects />
        <AboutOutreach />
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
