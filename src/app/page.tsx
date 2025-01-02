"use client";


import ProfileSidebar from "./components/ProfileSidebar/ProfileSidebar";

const imgPath = "/images/matt_atlanta2.png";
const nameHeaderText = "Matthew Forrester Wolffe";


export default function Home() {
  return (
    <div className="grid grid-cols-[auto_1fr] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-11/12 mlr-auto">

      <ProfileSidebar name={nameHeaderText} imagePath={imgPath}  />

      <main className="flex flex-col gap-8 col-start-2">
        <div className="flex gap-4 items-center flex-col sm:flex-row">

        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
