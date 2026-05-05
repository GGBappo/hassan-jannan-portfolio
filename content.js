window.PORTFOLIO_CONTENT = {
  siteTitle: "Hassan Jannan | Portfolio",
  theme: {
    accent: "#c51622",
    accentStrong: "#ff5f6d",
    warmAccent: "#ffffff",
    bg: "#050505",
    bgAlt: "#101010",
    panel: "#151515",
    text: "#f5f5f5",
    muted: "#c9c9c9",
    border: "rgba(255, 255, 255, 0.12)"
  },
  sectionHeaders: {
    skills: { kicker: "Core Skills" },
    highlights: { kicker: "Quick Snapshot" },
    expertise: {
      kicker: "Strengths",
      title: "What I can contribute right away."
    },
    experience: {
      kicker: "Experience",
      title: "Leadership, development, and internship experience."
    },
    education: {
      kicker: "Education",
      title: "Academic foundation and campus involvement."
    },
    projects: {
      kicker: "Projects",
      title: "Projects that show how I build, lead, and learn."
    },
    contact: { kicker: "Connect" }
  },
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],
  profile: {
    name: "Hassan Jannan",
    role: "Computer Science Student, Unity Developer, and Project Lead",
    heroHeading: [
      "Building",
      "interactive",
      "game experiences."
    ],
    accentLine: 1,
    summary: "I am a junior at the University of New Haven studying Computer Science with a concentration in Game Design and Development. As President of the Game Development and Design Club, I help lead student collaboration while building hands-on experience in Unity. Over the last year and a half, I have led three team-based game projects focused on gameplay systems, iteration, and player experience.",
    contactLabel: "Want to connect?",
    contactCopy: "I am interested in internships, junior game development roles, and collaborative projects.",
    contactHref: "https://www.linkedin.com/in/hassan-jannan-7a652431b/",
    contactLinkLabel: "Connect on LinkedIn",
    actions: [
      { label: "View Projects", href: "#projects", style: "primary", icon: "arrow-up-right" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/hassan-jannan-7a652431b/", style: "secondary", icon: "linkedin" }
    ],
    skills: [
      "Unity Engine",
      "C#",
      "C++",
      "Java",
      "Gameplay Loops",
      "Progression Systems",
      "Player Experience",
      "Prototyping",
      "Git",
      "Gameplay Programming",
      "Team Leadership",
      "Game Design",
      "Project Development",
      "Software Development",
      "Adaptability",
      "AI",
      "Networking",
      "Marketing"
    ]
  },
  highlights: [
    { label: "Primary Engine", value: "Unity" },
    { label: "Leadership", value: "President, Game Development and Design Club" },
    { label: "Experience", value: "1.5 years building games" },
    { label: "Projects Led", value: "3 collaborative student projects" }
  ],
  expertise: [
    {
      icon: "code",
      title: "Unity Development",
      description: "I build gameplay systems and interactive experiences in Unity, with a strong focus on iteration, debugging, and turning ideas into playable results.",
      tags: ["Unity", "C#", "Gameplay Systems"]
    },
    {
      icon: "briefcase",
      title: "Project Leadership",
      description: "Across class, club, and internship work, I have led projects, coordinated teammates, and kept development moving with clear priorities.",
      tags: ["Leadership", "Collaboration", "Production"]
    },
    {
      icon: "spark",
      title: "Game Design Focus",
      description: "My concentration in Game Design and Development helps me connect programming decisions with player experience, pacing, and design intent.",
      tags: ["Design Thinking", "Prototyping", "Iteration"]
    }
  ],
  experience: [
    {
      role: "President",
      company: "Game Development and Design Club, University of New Haven",
      date: "Current",
      summary: "Leading the club community and helping create a stronger environment for collaboration, student projects, and shared learning in game development.",
      bullets: [
        "Support club activities centered on game development and design.",
        "Encourage collaboration between students with different creative and technical strengths.",
        "Help create a welcoming environment focused on learning, teamwork, and growth."
      ]
    },
    {
      featured: true,
      role: "Game Development Head and Project Lead",
      company: "Digital Defenders Internship",
      date: "04/20/2025 - 08/12/2025",
      summary: "Led development of an educational game for children focused on teaching the dangers of poor cybersecurity habits.",
      bullets: [
        "Led the project from concept to playable build while coordinating teammates, milestones, and development priorities.",
        "Built and debugged core gameplay systems and interactive features in Unity using C#.",
        "Tested and iterated on mechanics to keep the experience intuitive, educational, and engaging for children.",
        "Documented design decisions and aligned implementation with the project's learning goals across the team."
      ]
    },
    {
      role: "Computer Science Student",
      company: "University of New Haven",
      date: "Current",
      summary: "Studying Computer Science with a concentration in Game Design and Development while building practical experience in programming and game production.",
      bullets: [
        "Developing a foundation in software engineering and interactive systems.",
        "Applying classroom knowledge directly to student and club-led game projects.",
        "Continuing to strengthen Unity workflow, collaboration, and problem solving."
      ]
    }
  ],
  education: [
    {
      icon: "cap",
      title: "B.S. in Computer Science",
      place: "University of New Haven",
      date: "In Progress",
      description: "Concentration in Game Design and Development, with a focus on programming, systems thinking, and interactive digital experiences."
    },
    {
      icon: "briefcase",
      title: "Student Leadership and Project Work",
      place: "University and club-based experience",
      date: "Ongoing",
      description: "Building practical experience by leading projects, collaborating with peers, and applying classroom knowledge to real game development work."
    },
    {
      icon: "users",
      title: "Sigma Alpha Epsilon (SAE)",
      place: "University fraternity experience",
      date: "Ongoing",
      description: "My involvement in SAE has strengthened my leadership, communication, and campus networking skills while helping me contribute to student life beyond the classroom."
    }
  ],
  projects: [
    {
      slug: "cepheus",
      featured: true,
      category: "Game Jam Project",
      title: "CEPHEUS",
      description: "A narrative-driven space project about a man transported into his delusions, navigating space to uncover a darker truth about humanity.",
      detailsHeading: "What I worked on",
      details: [
        "Worked on narrative dialogue systems using ScriptableObjects, later improving them with Unity Events.",
        "Helped plan, organize, and direct the project.",
        "Assisted with building the minigames.",
        "Unfinished due to time constraints, learned about scope creep and how to prevent it and plan better."
      ],
      detailOverview: [
        "CEPHEUS was built as a story-focused game jam project with an emphasis on atmosphere, mystery, and the player's shifting understanding of what is real.",
        "My role crossed both design and implementation, which meant helping shape the structure of the experience while also building systems that supported the narrative."
      ],
      learnings: [
        "Strong scope control matters, especially when narrative systems and minigames both compete for time.",
        "Switching from an early ScriptableObject approach to Unity Events gave the dialogue flow more flexibility.",
        "Planning dependencies earlier would have made the narrative and gameplay pieces connect more smoothly.",
        "Leadership during a jam is as much about keeping the team focused as it is about writing code."
      ],
      media: [
        {
          src: "assets/cepheus-cover.png",
          alt: "CEPHEUS cover art",
          caption: "Official cover art used for the project's public page."
        },
        {
          src: "https://img.itch.zone/aW1hZ2UvNDMxMzA4MS8yNTczNTYyNy5wbmc=/794x1000/wIUx96.png",
          alt: "CEPHEUS screenshot one",
          caption: "A look at the project's visual tone and in-game presentation."
        },
        {
          src: "https://img.itch.zone/aW1hZ2UvNDMxMzA4MS8yNTczNTYyOC5wbmc=/794x1000/s4KiAo.png",
          alt: "CEPHEUS screenshot two",
          caption: "Story-driven gameplay moments from the itch page screenshots."
        }
      ],
      image: "assets/cepheus-cover.png",
      tags: ["Unity", "Game Jam", "Narrative"],
      links: [
        { label: "View Project", href: "https://itsupiki-okami.itch.io/cepheus", icon: "arrow-up-right", style: "primary" },
        { label: "Case Study", href: "project.html?project=cepheus", icon: "layers", style: "secondary", newTab: true }
      ]
    },
    {
      slug: "gnome-golem",
      featured: true,
      category: "Puzzle Adventure",
      title: "Gnome & Golem",
      description: "A puzzle game centered on an indestructible golem helping a nervous gnome through a dangerous forest.",
      detailsHeading: "What I worked on",
      details: [
        "Worked on the main gameplay systems and level design.",
        "Built the core mechanics for both the gnome and the golem.",
        "Collaborated on the gnome-throwing mechanic.",
        "Learned more about Unity's input systems and Tweening/Lerping."
      ],
      detailOverview: [
        "Gnome & Golem centered on cooperative-feeling puzzle mechanics built around two very different characters, which made interaction design and level flow especially important.",
        "I focused on creating the moment-to-moment gameplay systems that gave both characters clear identities while still making them feel connected."
      ],
      learnings: [
        "Mechanic clarity matters more when players are switching between multiple character abilities.",
        "Level design gets stronger when you test puzzle ideas alongside the actual movement and interaction systems.",
        "Polish systems like input handling, tweening, and movement transitions have a huge effect on how puzzle games feel.",
        "Shared mechanics benefit from clear ownership and communication when multiple teammates are contributing."
      ],
      media: [
        {
          src: "assets/gnome-golem-cover.png",
          alt: "Gnome and Golem cover art",
          caption: "Official cover art used for the project's public page."
        },
        {
          src: "https://img.itch.zone/aW1hZ2UvNDQ2Njc5OC8yNjcwMzQ4Mi5wbmc=/794x1000/d%2BZApR.png",
          alt: "Gnome and Golem screenshot one",
          caption: "Puzzle and environment framing from the itch page screenshots."
        },
        {
          src: "https://img.itch.zone/aW1hZ2UvNDQ2Njc5OC8yNjcwMzUwMC5wbmc=/794x1000/FRPm%2Bl.png",
          alt: "Gnome and Golem screenshot two",
          caption: "A second gameplay view showing the game's character interaction style."
        }
      ],
      image: "assets/gnome-golem-cover.png",
      tags: ["Unity", "Puzzle", "Team Project"],
      links: [
        { label: "View Project", href: "https://marvinooo.itch.io/gnomegolem", icon: "arrow-up-right", style: "primary" },
        { label: "Case Study", href: "project.html?project=gnome-golem", icon: "layers", style: "secondary", newTab: true }
      ]
    }
  ],
  contact: {
    heading: "Let's connect about game development.",
    summary: "I am always interested in meeting other developers, learning from new opportunities, and contributing to strong collaborative game projects.",
    location: "University of New Haven",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/hassan-jannan-7a652431b/", icon: "linkedin" },
      { label: "hassanjannan1234@gmail.com" }
    ]
  },
  footerNote: ""
};

