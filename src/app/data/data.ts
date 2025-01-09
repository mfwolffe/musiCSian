import { shortProject } from "@/types";

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
      "MusicCPR development onboarding has proven difficult with so many different machines. Traditional containerization approaches did not suffice.",
  },
  {
    title: "Containerization (Arch/NixOS custom images)",
    imgPath: "",
    shortDescript:
      "MusicCPR development onboarding has proven difficult with so many different machines. Traditional containerization approaches did not suffice.",
  },
];

export { shortProjects };
