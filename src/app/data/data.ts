import { shortProject, Outreach } from "@/types";

const shortProjects: Array<shortProject> = [
  {
    title: "MusicCPR (DAW)",
    imgPath: "/images/DAW-NEW.png",
    shortDescript: "bespoke digital audio workstation as part of honors thesis",
    url: "https://studio.musicsian.com",
  },
  {
    title: "vmi virtual memorial",
    imgPath: "/images/virginia-mourning.jpg",
    shortDescript: "virtual memorial/archive of VMI's war dead",
    url: "https://vmimemorial.com"
  },
  {
    title: "gar",
    imgPath: "/images/gar.png",
    shortDescript: "x11 tiling window manager. part of the gardesk suite",
    url: "https://gar.musicsian.com"
  },
  {
    title: "fortsh",
    imgPath: "/images/fortsh.png",
    shortDescript: "friendly fortran posix shell",
    url: "https://fortsh.musicsian.com"
  },
  {
    title: "armfortas",
    imgPath: "/images/fortsh.png",
    shortDescript: "Bespoke ARM64 Fortran Compiler",
  },
  {
    title: "rcal",
    imgPath: "/images/rcal.png",
    shortDescript: "Better terminal calendar app",
  },
  {
    title: "afs-as",
    imgPath: "/images/fortsh.png",
    shortDescript: "Standalone ARM64 assembler for macOS. Encodes instructions, parses .s files, emits Mach-O objects. Designed for use with armfortas, but usable with any ARM64 assembly on macOS.",
  },
  {
    title: "fuss",
    imgPath: "/images/fuss.png",
    shortDescript: "interactive tree utility with binds for quickly performing common git commands",
  },
  {
    title: "tarmac",
    imgPath: "/images/tarmac.png",
    shortDescript: "Tiling window manager for MacOS",
    url: "https://tarmac.musicsian.com"
  },
  {
    title: "ers",
    imgPath: "/images/ers.png",
    shortDescript: "Border renderer for MacOS, designed for use with tarmac window manager, but usable with any tiling window manager on MacOS",
  },
  {
    title: "hyprkvm",
    imgPath: "/images/hyprkvm.png",
    shortDescript: "Software KVM switch for Hyprland",
  },
  {
    title: "gump",
    imgPath: "/images/gump.png",
    shortDescript: "smarter cd with fuzzy matching and directory frecency, sans a command prefix",
  },
  {
    title: "sultree",
    imgPath: "/images/sultree.png",
    shortDescript: "tree clone with SeLinux label filtering",
  },
  {
    title: "wanda",
    imgPath: "/images/wanda.png",
    shortDescript: "glue to launch Wand/WeMod on linux",
  },
  {
    title: "dougk",
    imgPath: "/images/dougk.png",
    shortDescript: "build your own cozy pond",
    url: "https://dougk.musicsian.com"
  },
  {
    title: "sniffly",
    imgPath: "/images/sniffly1.png",
    shortDescript: "SpaceSniffer inspired desktop disk usage visualizer. Written in modern Fortran with GTK4 bindings.",
    url: "https://sniffly.musicsian.com",
  },
  {
    title: "sniffert",
    imgPath: "/images/sniffert.png",
    shortDescript: "SpaceSniffer inspired terminal disk usage visualizer. Written in modern Fortran with ncurses bindings.",
  },
  {
    title: "garbg",
    imgPath: "/images/gar.png",
    shortDescript: "background service for gar window manager",
    url: "https://gar.musicsian.com"
  },
  {
    title: "fit",
    imgPath: "/images/fit.png",
    shortDescript: "three pane tui merge editor inspired by the VSCode gui merge editor",
  },
  {
    title: "facsimile",
    imgPath: "/images/fac.png",
    shortDescript: "a better (according to me) terminal text editor.",
    url: "https://facsimile.musicsian.com",
  },
  {
    title: "fackr",
    imgPath: "/images/fackr.png",
    shortDescript: "Rust port of facsimile, my terminal text editor.",
    url: "https://facsimile.musicsian.com",
  },
  {
    title: "lusten",
    imgPath: "/images/lusten.png",
    shortDescript: "chatroom based listening parties. experiments with web sockets.",
    url: "https://lusten.musicsian.com",
  },
  {
    title: "garlaunch",
    imgPath: "/images/gar.png",
    shortDescript: "rofi-like application launcher for gar window manager",
    url: "https://gar.musicsian.com"
  },
  {
    title: "ferp",
    imgPath: "/images/ferp.png",
    shortDescript: "grep clone written in modern fortran with regex support",
  },
  {
    title: "fortress",
    imgPath: "/images/fortress.png",
    shortDescript: "commandline file explorer with git binds for fast management of projects",
  },
  {
    title: "AERO cuda emulation",
    imgPath: "/images/aero.png",
    shortDescript: "emulate CMAQ AERO module on GPU with CUDA to demonstrate potential speedups",
  },
  {
    title: "quotoadian",
    imgPath: "/images/toad.png",
    shortDescript: "serve a fresh toad every day of the week",
    url: "https://quotoadian.musicsian.com",
  },
  {
    title: "arco",
    imgPath: "/images/arco.png",
    shortDescript: "virtual instrument maker and player",
    url: "https://studio.musicsian.com",
  },
  {
    title: "garclip",
    imgPath: "/images/gar.png",
    shortDescript: "system clipboard manager for gar window manager",
    url: "https://gar.musicsian.com"
  },
  {
    title: "garfield",
    imgPath: "/images/garfield.png",
    shortDescript: "file explorer for the gar desktop suite",
    url: "https://gar.musicsian.com"
  },
    {
    title: "gartray",
    imgPath: "/images/gar.png",
    shortDescript: "system tray for the gar desktop suite",
    url: "https://gar.musicsian.com"
  },
  {
    title: "cob",
    imgPath: "/images/cob.png",
    shortDescript: "monch fireflies as a lil guy",
    url: "https://cob.musicsian.com",
  },
  {
    title: "parrot",
    imgPath: "/images/parrot.png",
    shortDescript: "birb. it insults you for screwing up shell commands",
  },
  {
    title: "wasm calculators",
    imgPath: "/images/wasm.png",
    shortDescript: "tinkering with webassembly with C and Fortran",
    url: "https://wasm.musicsian.com",
  },
  {
    title: "sketch",
    imgPath: "/images/sketch.png",
    shortDescript: "paint but make it ascii. for my grandma.",
    url: "https://sketch.musicsian.com",
  },
  {
    title: "MELK",
    imgPath: "/images/MELK.png",
    shortDescript: "ULTIMATE SPIDERMAN UI GENERATION",
    url: "https://melk.musicsian.com",
  },
  {
    title: "cadenza",
    imgPath: "/images/cadenza.png",
    shortDescript: "attempts at vocal transcription with yin pitch detection",
    url: "https://cadenza.musicsian.com",
  },
  {
    title: "fortbite",
    imgPath: "/images/fortbite.png",
    shortDescript: "arbitrary precision fortran cli calculator",
  },
  {
    title: "sortmanteau",
    imgPath: "/images/sortmanteau.png",
    shortDescript: "ascii visualizations of sorting algorithms",
    url: "https://sortmanteau.musicsian.com",
  },
  {
    title: "parallax",
    imgPath: "/images/parallax.png",
    shortDescript: "music visualizations but make it ascii",
    url: "https://parallax.musicsian.com",
  },
  {
    title: "garshot",
    imgPath: "/images/gar.png",
    shortDescript: "screenshot utility for gar window manager with annotation support",
    url: "https://gar.musicsian.com"
  },
  {
    title: "notvox cue",
    imgPath: "/images/notvox2.png",
    shortDescript: "CLI Spotify controller/client powered by 'nodbox' servers."
  },
  {
    title: "JubJubWord",
    imgPath: "/images/jub.png",
    shortDescript: "generate plausibly deniable nonsense words in a markov chain playground",
    url: "https://baobob.io"
  },
  {
    title: "bashamole",
    imgPath: "/images/bashamole.png",
    shortDescript: "whackamole within the confines of the FHS. Educational game for practicing unix shell nav",
    url: "https://bashamole.sh",
  },
  { title: "SPRONG", imgPath: "/images/sprong.png", shortDescript: "Pong with Physick", url: "https://sprong.sh" },
  { title: "cue", imgPath: "/images/cue.jpeg", shortDescript: "gesture controlled DSPlayground" },
  { title: "shtick", imgPath: "/images/shtick.png", shortDescript: "nonidiomadic personal shell config manager" },
  { title: "gitswitch", imgPath: "/images/gitswitch.png", shortDescript: "'account-aware-gpg' git config switcher" },
  { title: "wulFTP", imgPath: "/images/wulftpp.png", shortDescript: "PyQt6 'frontend' for sftp for my family to use for backups instead of relying on clouds." },
  { title: "terse", imgPath: "/images/terse.png", shortDescript: "yell at matt for being wordy in texts/emails", url: "https://overstat.ing" },
  { title: "woof.sh", imgPath: "/images/woofsh.png", shortDescript: "render moby in ascii art in the terminal" },
  { title: "DigitalDipole", imgPath: "/images/ddp.png", shortDescript: "chemistry educational toolkit", url: "https://dipole.musicsian.com" },
  { title: "wezztershier", imgPath: "/images/wez.png", shortDescript: "decoration-generated gui for wezterm config" },
  { title: "a better aTan2", imgPath: "/images/atan2.png", shortDescript: "'solution' to a personal pet peeve", url: "https://protract.ing" },
  {
    title: "MusicCPR (NEA Create variations algos)",
    imgPath: "/images/variations1.png",
    shortDescript: "procedurally generate 11 musical variations on a student composed motive and build + render single score",
  },
  {
    title: "waldweben",
    imgPath: "/images/waldweben.png",
    shortDescript: "static site generator using frontmatter for my poetry and prose",
  },
  {
    title: "gartray",
    imgPath: "/images/gar.png",
    shortDescript: "system tray utility for gar window manager",
    url: "https://gar.musicsian.com",
  },
  {
    title: "dukesh (for school)",
    imgPath: "/images/dukesh.png",
    shortDescript: 'simple emulated unix "shell", including custom shell builtins, utilities, piping, env, etc.',
    longerDescript:
      "This was a graded project for CS 361 at JMU; this is a systems course which takes begins students' foray into concurrency & parallelism (with quite a bit of networking too!).",
  },
  {
    title: "dougdoug",
    imgPath: "/images/dougdoug.png",
    shortDescript: 'Make yerself a doug, doug!',
    longerDescript: "I really don't know. God help me.",
    url: "https://dougdoug.musicsian.com",
  },
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
      We fielded questions from BRCC students about a wide range of topics, namely curricula, admission requirements for the major, housing, and of course, food.
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
      As a JMU CS Ambassador, I give group tours of the CS department, speak on panels, and field questions from individual students and their families while tabling at CHOICES.
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
      Students in our track worked to create personal webpages and a 3D VR playground with imported assets, leading up to students creating their own VR museums.
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
