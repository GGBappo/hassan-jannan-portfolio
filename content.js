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
      title: "Game development leadership and hands-on production."
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
    role: "Founder, Unity Developer, and Project Lead",
    heroHeading: [
      "Building",
      "interactive",
      "game experiences."
    ],
    accentLine: 1,
    summary: "I am a junior at the University of New Haven studying Computer Science with a concentration in Game Design and Development. I am the founder of Voyager Signal Games, where I lead a 10-member team building original game experiences in Unity. Over the last two years, I have led four collaborative projects focused on gameplay systems, iteration, and player experience.",
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
    { label: "Studio", value: "Voyager Signal Games" },
    { label: "Team Leadership", value: "Leading a 10-member development team" },
    { label: "Experience", value: "2 years building games" },
    { label: "Projects Led", value: "4 collaborative game projects" }
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
      featured: true,
      role: "Founder & Game Developer",
      company: "Voyager Signal Games",
      date: "June 2026 - Present",
      summary: "Founded and lead an independent game development studio focused on creating original, engaging game experiences.",
      bullets: [
        "Lead and coordinate a 10-member team, organize development tasks, support game design collaboration, and keep projects moving forward.",
        "Develop gameplay systems and mechanics in Unity and C#, using object-oriented programming and debugging to build functional prototypes.",
        "Guide project planning and creative direction, helping transform early concepts into playable experiences.",
        "Contribute technical decisions, feature implementation, prototyping, and iterative testing across active projects."
      ]
    },
    {
      featured: true,
      role: "Contract Game Developer",
      company: "Shabamin' Games LLC",
      date: "Current",
      summary: "Contributing to Project Wrath through Unity gameplay programming, UI systems, tutorials, playtesting, and production bug fixing within an established studio codebase.",
      bullets: [
        "Redesigned and implemented a functional results screen in Unity, adding missing tracked data and connecting it to the UI through Inspector configuration.",
        "Built and refined dynamic tutorial systems that introduce prompts as players encounter new mechanics.",
        "Prepared builds for playtesting by assembling scenes, testing features, identifying bugs, and helping polish the player experience.",
        "Fixed issues across gameplay and health-related systems while implementing and refining new mechanics.",
        "Worked with UI workflows, scrollable interfaces, events, listeners, and subscriptions in an existing production codebase."
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
      icon: "users",
      title: "Resident Assistant",
      place: "University of New Haven",
      date: "Current",
      description: "Supporting residents by building an inclusive community, planning programs, responding to concerns and incidents, helping uphold residential policies, and connecting students with campus resources."
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
      caseStudy: {
        role: "Narrative Systems & Gameplay Developer",
        timeline: "One-week game jam",
        team: "Six-person game jam team",
        tools: "Unity, C#, ScriptableObjects",
        challenge: "Create flexible dialogue and NPC interactions quickly enough to support a story-driven game while the team also built minigames and final polish.",
        approach: "Separated dialogue data from gameplay logic with ScriptableObjects, used hitbox and input checks for reliable interaction, and assigned each NPC a dedicated dialogue manager."
      },
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
          caption: "Official cover art used for the project's public page.",
          caseStudyHidden: true
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
      caseStudy: {
        role: "Gameplay Systems & Level Design",
        timeline: "One-week game jam",
        team: "Collaborative game jam team",
        tools: "Unity, C#, Input System",
        challenge: "Make two playable characters feel distinct while keeping their shared puzzle mechanics clear, responsive, and fun to use together.",
        approach: "Built movement, character switching, checkpoints, and golem protection mechanics alongside level flow, then iterated on input handling and transition polish."
      },
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
          caption: "Official cover art used for the project's public page.",
          caseStudyHidden: true
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
    },
    {
      slug: "clare-is-calling",
      featured: true,
      category: "Psychological Horror / Game Jam",
      title: "Clare is Calling",
      caseStudy: {
        role: "Gameplay Systems, AI & UI Developer",
        timeline: "Brackeys Game Jam 2026.2",
        team: "Collaborative game jam team",
        tools: "Unity, C#, NavMesh, ScriptableObjects",
        challenge: "Turn investigation into a tense horror loop by connecting item collection, readable inventory information, and an AI character that reacts to the player's actions.",
        approach: "Created reusable item data, raycast pickups, an inspection-focused inventory, NavMesh AI patrols, and a suspicion system, then used post-processing and polish to strengthen the mood."
      },
      description: "A psychological horror game about exploring a house, investigating what is real, and deciding who to trust while an AI character reacts to the player's choices.",
      detailsHeading: "What I worked on",
      details: [
        "Built an inventory system with Unity UI and lists, including item sprites, descriptions, and facts shown when the player hovers over an item.",
        "Used ScriptableObjects to create reusable item and interactable-item data that could be carried into the game's UI.",
        "Implemented raycast-based pickup interactions so players could collect items and add them to their inventory.",
        "Worked with NavMesh, path baking, and Animator controls to create an AI character that patrols randomly and uses a walking animation.",
        "Created a suspicion system that raises an AI suspicion bar when the player picks up items nearby, then polished the inventory, AI pathing, and horror atmosphere."
      ],
      detailOverview: [
        "Clare is Calling is a psychological horror project created for Brackeys Game Jam 2026.2. The game centers on exploring a house, examining what can be trusted, and responding to a tense relationship with the people around the player.",
        "I focused on the systems that made investigation and player choice feel tangible: collecting items, reading their details, and having an AI character respond when the player takes items in view. I also helped create the mood through post-processing and AI movement polish."
      ],
      learnings: [
        "ScriptableObjects are a strong fit for reusable item data because they keep inventory content separate from the systems that display and interact with it.",
        "Raycasts and Unity UI can work together to create clear, responsive pickup and inspection interactions.",
        "NavMesh pathing needs careful baking, testing, and Animator coordination to make AI movement feel believable.",
        "Connecting player actions to a suspicion system can make simple exploration mechanics feel tense and meaningful.",
        "Post-processing, UI polish, and bug fixing all make a real difference in how a horror game feels to play."
      ],
      media: [
        {
          src: "assets/clare-is-calling-cover.png",
          alt: "Clare is Calling cover art",
          caption: "Official cover art from the project's itch.io page.",
          caseStudyHidden: true
        },
        {
          src: "assets/clare-is-calling-banner.png",
          alt: "Clare is Calling banner art",
          caption: "Project artwork from the Clare is Calling itch.io page.",
          href: "https://marvinooo.itch.io/cla",
          linkLabel: "Play Clare is Calling on itch.io"
        }
      ],
      image: "assets/clare-is-calling-cover.png",
      tags: ["Unity", "C#", "Horror", "AI", "Game Jam"],
      links: [
        { label: "View Project", href: "https://marvinooo.itch.io/cla", icon: "arrow-up-right", style: "primary" },
        { label: "Case Study", href: "project.html?project=clare-is-calling", icon: "layers", style: "secondary" }
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

