import { shortProject, Outreach } from "@/types";

const shortProjects: Array<shortProject> = [
  {
    title: "MusicCPR (DAW)",
    imgPath: "/images/features-1.png",
    shortDescript: "bespoke digital audio workstation as part of honors thesis",
  },
  { title: "terse", imgPath: "/images/terse.png", shortDescript: "yell at matt for being wordy in texts/emails" },
  { title: "woof.sh", imgPath: "/images/woofsh.png", shortDescript: "render moby in ascii art in the terminal" },
  
  { title: "DigitalDipole", imgPath: "/images/ddp.png", shortDescript: "chemistry educational toolkit" },
  { title: "a better aTan2", imgPath: "/images/atan2.png", shortDescript: "'solution' to a personal pet peeve" },
  {
    title: "MusicCPR (NEA Create variations algos)",
    imgPath: "/images/variations1.png",
    shortDescript: "procedurally generate 11 musical variations on a student composed motive and build + render single score",
  },

  {
    title: "dukesh",
    imgPath: "/images/dukesh.png",
    shortDescript: "simple emulated unix \"shell\", including custom shell builtins, utilities, piping, env, etc.",
    longerDescript:
      "This was a graded project for CS 361 at JMU; this is a systems course which takes begins students' foray into concurrency & parallelism (with quite a bit of networking too!)."
  },
  
  { title: "shellcut", imgPath: "/images/shellcut.png", shortDescript: "nonidiomadic personal shell alias manager" },
  { title: "Local{Toast,Ghost,Roast}", imgPath: "/images/toast.jpeg", shortDescript: "gag websites playing on the address 'localhost'" },
  {
    title: "Primality Instrumentation",
    imgPath: "/images/pin.png",
    shortDescript:
      "use intel PIN to compare efficencies of two naive primality tests (one of which appears decidedly less naive to humans) on modern hardware w/ compiler optimizations.",
  },
  {
    title: "y86 ISA CPU Emulator (for school)",
    imgPath: "/images/y86.png",
    shortDescript: "Emulate the traditional Von Neumann cycle for a cpu w/ a theoretical simplified x86 ISA",
  },

  {
    title: "'Raccoon Rush' (for school)",
    imgPath: "/images/345game.png",
    shortDescript: "Game written as a team for a software engineering course. It is deployed, but it's buggy at the moment!",
  },
  {
    title: "Containerization (Ad Hoc Nix Scripts / flakes)",
    imgPath: "",
    shortDescript:
      "Onboarding for MusicCPR has occasionally proven difficult to the point of discouragement. Traditional containerization proved to be too slow for some students' configurations. These are attempts to rectify the issue in a way that is lightweight and reliably reproducible",
  },
  {
    title: "Containerization (Arch/NixOS custom images)",
    imgPath: "",
    shortDescript:
      "Onboarding for MusicCPR has occasionally proven difficult to the point of discouragement. Traditional containerization proved to be too slow for some students' configurations. These are attempts to rectify the issue in a way that is lightweight and reliably reproducible",
  },
];

const outReaches: Array<Outreach> = [
  {
    name: "Transfer Student Panel",
    role: "",
    date: "2024.04.03",
    shortDescript: "",
    longerDescript: `
      I coordinated and lead a panel of 6 current JMU transfer students to visit BRCC campus at the request of BRCC professor and CS Transfer Degree Program Coordinator, Dan OBrien.
      We fielded questions from BRCC students about a wide range of topics, namely curricula, admission requirements for the major, housing, and of course, <a href="https://jmu.campusdish.com/en/awardsandaccolades/">food</a>.
      Before the panel, I collaborated with Professor O'Brien to ensure I scouted students whose foci/niches reflected the common interests of his students or who participated in specific activities/opportunities in the department.
    `,
  },
  {
    name: "CHOICES",
    role: "",
    date: "2024.03.02 / 2024.04.05 / 2024.04.12",
    shortDescript: "",
    longerDescript: `
      CHOICES are 'open house' events hosted on JMU campus for newly admitted prospective students.
      As a JMU CS Ambassador, I give group tours of the CS department, speak on panels, and field questions from individual students and their families while tabling.
      In addition, the ambassador team plays a role in planning/organizing for these events.
    `,
  },
  {
    name: "Fractal Art with Python",
    role: "Volunteer",
    date: "2023.10.02",
    shortDescript: "",
    longerDescript: `
      Volunteered for Dr. Michael Lam's "Fractal Art with Python" field trip actviity for a local middle school.
      We used boilerplate Python turtle graphics code to walk students through activities introducing core CS concepts, culminating with recursion and using it to have our turtles draw fractals.
      By the end of the activity, students had created art of their own by modifying the provided algorithms or starting new functions from scratch, and were able to take their creations home.
    `,
  },
  {
    name: "Get the Scoop on JMU Transfer",
    role: "Volunteer Ambassador",
    date: "2023.10.25",
    shortDescript: "",
    longerDescript: `
      Acted as a JMU student ambassador at an event at Blue Ridge Community College celebrating National Transfer Student Week and BRCC's Hunger Awareness Week.
      Fielded questions about life at JMU as a transfer student while scooping ice cream for attendees.
    `,
  },
  {
    name: "Bridges to Computing Summer Camp",
    role: "Teaching Assistant",
    date: "2024.07",
    shortDescript: "",
    longerDescript: `
      Bridges to Computing is an annual week-long program hosted by JMU’s CS and IT programs designed to introduce and engage local refugee students in computer science.
      I served as a teaching assistant for a track aimed at teaching web development with virtual reality headset integration.
      Students in our track worked to create personal webpages (...feels familiar...) and a 3D VR playground with imported assets, leading up to their creatiing a VR museum.
    `,
  },
  {
    name: "(CS) First Year Success Workshop",
    role: "",
    date: "2024.09.26",
    shortDescript: "",
    longerDescript: `
      Assisted in delivering a presentation to first-year CS and IT majors covering topics such as tech-adjacent clubs,
      research & career advancement opportunities,
      and how to prioritize wellbeing during stressful times of the semester.
    `,
  },
  {
    name: "Academic Open Houses",
    role: "",
    date: "2024.10.05",
    shortDescript: "",
    longerDescript: `
      During Academic Open House events, prospective students (not necessarily admitted) and their families visit JMU campus to learn about specific departments and major offerings.
      Student ambassadors like myself field questions about our respective majors while presenting on panels, giving tours, tabling, and more.
    `,
  },

];

export { shortProjects, outReaches };
