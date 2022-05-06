let info = {
  name: "Chhinghor Leng",
  logo_name: "Chhinghor",
  flat_picture: require("./src/assets/chhinghor.jpg"),
  chhinghior_aba: require("./src/assets/myaba.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },

  description:
    "I'm a fullstack Developer with a passion for building projects that are used routinely. Building applications in JavaScript. Former supervisor and finance professional who's eager to enhance a company's user experience. ",
  links: {
    linkedin: "https://www.linkedin.com/in/ching-hor-bb7bb415b",
    github: "https://github.com/lengchhinghor",
    angellist: "#",
    resume:
      "#"
  },
  education: [
    {
      name: "Royal University of Phnom Penh",
      place: "Phnom Penh, Cambodia",
      date: "May, 2018 - May, 2021",
      degree: "Computer Science",
      gpa: "2.8/4.0",

      skills: [
        // "Skills gained:",
        // "Design, conduct and interpret research and statistical analysis. ",
        // "Apply an evidence-based approach to problems.",
        // "Communicate findings using models, charts and graphs.",
        // "Communicate research findings using clear, accurate, concise writing.",


      ]
    },
    {
      name: "Korea Software HRD Center",
      course:"Full Stack Developer",
      place: "Phnom Penh, Cambodia",
      date: "May, 2021 - Oct, 2021",
      degree: "Basic Couse",
      gpa: "8.5/10.0",
      description:
        "",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "OOP",
        "PHP",
        "MySql",
       "Spring Boot",
       "Swift",
       "React JS"
      ]
    }
  ],
  experience: [

    {
      name: "Freelancer",
      place: "CamCyber",
      date: "Aug, 2019 - Present",
      position: "Full Stack Web Developer",
      description:
        "Developing Front-end website",
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Bootstrap",
          "React.js",
          "Vue.js",
          "laravel",
          "Angular"


        ]
    },

  ],
  skills: [
    {
      title: "languages",
      info: [
        "Javascript",
        "CSS",
        "HTML5"

      ],
      icon: "fa fa-code"
    },
   
    {
      title: "web technologies",
      info: ["Vue.js",  "React.js", "Node.js", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["Postgres", "MySQL",],
      icon: "fa fa-database"
    },
    
  ],
  portfolio: [

    {
      name: "Skills Development fund",
      pictures: [

        {
          img: require("./src/assets/portfolio/grocery/sdf.png")
        },
        {
          img: require("./src/assets/portfolio/grocery/sdf.png")
        },

      ],
      technologies: ["JavaScript", "HTML5", "Bootstrap","Laravel"],
      category: "News ",
      github: "#",
      visit: "http://sdfcambodia.org/",
      description:
        "To be the most trusted financing platform for sustainable and demand-driven skill development."
    },



    {
      name: "Skills Development fund",
      pictures: [

        {
          img: require("./src/assets/portfolio/grocery/sdf.png")
        },
        {
          img: require("./src/assets/portfolio/grocery/sdf.png")
        },

      ],
      technologies: ["JavaScript", "HTML5", "Bootstrap","Laravel"],
      category: "News ",
      github: "#",
      visit: "http://sdfcambodia.org/",
      description:
        "To be the most trusted financing platform for sustainable and demand-driven skill development."
    },
    {
      name: "Skills Development fund",
      pictures: [

        {
          img: require("./src/assets/portfolio/grocery/sdf.png")
        },
        {
          img: require("./src/assets/portfolio/grocery/sdf.png")
        },

      ],
      technologies: ["JavaScript", "HTML5", "Bootstrap","Laravel"],
      category: "News ",
      github: "#",
      visit: "http://sdfcambodia.org/",
      description:
        "To be the most trusted financing platform for sustainable and demand-driven skill development."
    }
  ],
   recommendations: [
    {
      title:
        "Korea Software HRD Center is an academy training center for training software professionals in cooperation with Korea International Cooperation Agency(KOICA) and Webcash in April, 2013 in Phnom Penh, Cambodia. ",
    
      location: " Address: #12, St 323, Sangkat Boeung Kak II, Khan Toul Kork, Phnom Penh, Cambodia."
    },
    {
      title:
        "Korea Software HRD Center is an academy training center for training software professionals in cooperation with Korea International Cooperation Agency(KOICA) and Webcash in April, 2013 in Phnom Penh, Cambodia. ",
    
      location: " Address: #12, St 323, Sangkat Boeung Kak II, Khan Toul Kork, Phnom Penh, Cambodia."
    }
    
  ]
};

export default info;



