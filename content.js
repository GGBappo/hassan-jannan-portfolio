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
      description: "A narrative-driven game jam project where I helped build dialogue, NPC interaction systems, and collaborative gameplay features for a surreal space story.",
      detailsHeading: "What I worked on",
      details: [
        "Built a modular dialogue system in Unity using ScriptableObjects to keep dialogue data clean, scalable, and easy to expand.",
        "Implemented NPC interaction logic with hitbox triggers and player input checks so conversations only start at the right time.",
        "Created a DialogueNPCManager setup so each NPC could manage its own conversation flow independently.",
        "Helped organize the team, support minigame work, and keep the project moving during a one-week jam."
      ],
      detailOverview: [
        "CEPHEUS was built during the Strange Places game jam as a story-focused experience centered on atmosphere, mystery, and the player's shifting understanding of what is real.",
        "My main contribution was building the dialogue and NPC interaction foundation that helped carry the narrative side of the project. I focused on making the system modular so the team could create and manage multiple conversations without hardcoding dialogue into every scene.",
        "As the week went on, I also helped with project direction and supported other gameplay work, which gave me a better sense of how technical decisions and team coordination affect the final build during a short production cycle."
      ],
      learnings: [
        "Rapid prototyping works better when systems are modular from the beginning, especially in a short game jam.",
        "NPC dialogue tools need clean ownership between player input, proximity checks, and conversation data to stay manageable.",
        "Scope control matters a lot when narrative systems, minigames, and polish all compete for limited time.",
        "Game jams taught me that leadership is not just building systems, but also helping the team stay focused and realistic."
      ],
      media: [
        {
          src: "assets/cepheus-cover.png",
          alt: "CEPHEUS cover art",
          caption: "Official cover art used for the project's public page."
        },
        {
          src: "https://dms.licdn.com/playlist/vid/v2/D4E05AQGO54x4FIU66g/thumbnail-with-play-button-overlay-high/B4EZxx.jVSIsDU-/0/1771438752073?e=2147483647&v=beta&t=ORq5jqhMZRmngb5tjxi6m0LmwoRckpI77NncUXKdFXw",
          alt: "CEPHEUS LinkedIn development clip thumbnail",
          caption: "LinkedIn progress update showing the dialogue and NPC interaction work in progress.",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7429952672713048064/",
          linkLabel: "Open LinkedIn clip"
        },
        {
          src: "https://dms.licdn.com/playlist/vid/v2/D4E05AQHbFftVcJwuBQ/thumbnail-with-play-button-overlay-high/B4EZyMiONtHMDU-/0/1771884309766?e=2147483647&v=beta&t=HV-lGT3rnEQM3snchy8LhNjl2r8R6vV1TafO4_tME3E",
          alt: "CEPHEUS final LinkedIn clip thumbnail",
          caption: "LinkedIn wrap-up post with a clip from the final jam build.",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7431821485213782016/",
          linkLabel: "Watch final clip on LinkedIn"
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
        { label: "Case Study", href: "project.html?project=cepheus", icon: "layers", style: "secondary" }
      ]
    },
    {
      slug: "gnome-golem",
      featured: true,
      category: "Puzzle Adventure",
      title: "Gnome & Golem",
      description: "A two-character puzzle game where I built core gameplay, movement, switching, and level systems around the relationship between the gnome and the golem.",
      detailsHeading: "What I worked on",
      details: [
        "Built core gameplay systems for both characters, including movement, controls, and the feel of switching between them.",
        "Designed the golem's protective mechanics, including bracing, blocking, and supporting safe path creation.",
        "Implemented checkpoints, level systems, and level-building work to support puzzle progression.",
        "Collaborated on the gnome-throwing mechanic, gameplay integration, UI work, and overall level flow."
      ],
      detailOverview: [
        "Gnome & Golem was developed during a game jam around the theme Invincible. The concept was a 2D puzzle platformer where players guide a fragile gnome girl through hazards by using an indestructible golem's abilities.",
        "My role centered on the core gameplay experience. I worked on character controls, movement systems, checkpoints, switching, and level implementation so the puzzle flow could feel clear and responsive.",
        "I also had the chance to collaborate with other developers on shared mechanics and learn from more experienced Unity developers, which made this project especially valuable from both a technical and teamwork perspective."
      ],
      learnings: [
        "Unity's newer Input System can make multi-character control cleaner, but it needs careful setup to stay readable and flexible.",
        "Tweening, lerping, and movement polish have a huge impact on how puzzle mechanics feel in the player's hands.",
        "Level design gets better when mechanics and puzzle layouts are tested together instead of in isolation.",
        "I came away with a better understanding of modular systems, scene management, and how to structure gameplay code for iteration.",
        "Game jams are great at revealing where polish, testing, and bug fixing need more time than you expect."
      ],
      media: [
        {
          src: "assets/gnome-golem-cover.png",
          alt: "Gnome and Golem cover art",
          caption: "Official cover art used for the project's public page."
        },
        {
          src: "https://dms.licdn.com/playlist/vid/v2/D4E05AQFpfMA92ygjpg/thumbnail-with-play-button-overlay-high/B4EZ1uTtoLG8DU-/0/1775672158498?e=2147483647&v=beta&t=QZ9cOIva89pHNDVejkJQNt_KZp_4wlnkIByR7lF5jys",
          alt: "Gnome and Golem progress clip thumbnail",
          caption: "LinkedIn development update focused on the core mechanics and puzzle setup.",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7447708868794544128/",
          linkLabel: "Open development clip"
        },
        {
          src: "https://dms.licdn.com/playlist/vid/v2/D4E05AQHGYJN95FV6fA/thumbnail-with-play-button-overlay-high/B4EZ2rgjnuHUDU-/0/1776698938157?e=2147483647&v=beta&t=kjXIkEUxzpQjGKWSxT3tT8towEkzFtJyR-68O3XGDHI",
          alt: "Gnome and Golem final clip thumbnail",
          caption: "LinkedIn wrap-up clip showing the later jam build and level work.",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7452015502865874945/",
          linkLabel: "Watch final clip on LinkedIn"
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
        { label: "Case Study", href: "project.html?project=gnome-golem", icon: "layers", style: "secondary" }
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

