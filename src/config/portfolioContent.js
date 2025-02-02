const portfolioContent = {
  hero: {
    name: "Athul Sabu",
    title: "Passionate Developer and Coder",
    description: "Hey, I’m Athul! I enjoy creating web applications that solve real problems and bring ideas to life. I’m all about clean, efficient code and crafting user experiences that feel effortless. Every project is a chance to learn, grow, and make something meaningful. I believe the best solutions are born from curiosity and collaboration.",
    profileImage: "/portfolio-react/images/profile-pic.png"
  },
  
  skills: [
    // Programming Languages
    'C',
    'Java',
    'Python',
    'JavaScript',
    // Frontend Technologies
    'HTML',
    'CSS',
    'React',
    // Backend Technologies
    'Node.js',
    'Express',
    // Databases
    'MongoDB',
    'SQL',
    // Version Control
    'Git'
  ],
  
  projects: [
    {
        name: 'ADcolumn',
        title: 'ADcolumn',
        tech: 'HTML, CSS, JavaScript, Node.js',
        desc: 'Responsive web application for booking newspaper ad slots',
        description: 'Created a responsive web application for booking newspaper ad slots using HTML, CSS, JavaScript, and Node.js. The web application allows users to select dates and ad spaces with real-time availability updates and integrates Stripe for secure payments. The design ensures a seamless experience across all devices.',
        deployLink: 'https://adcolumn.onrender.com',
        previewImage: '/portfolio-react/images/projects/adcolumn-preview.png'
    },
    {
        name: 'CV-parser',
        title: 'CV-parser',
        tech: 'Node.js, Express.js, EJS, pdf-parse',
        desc: 'Web application for parsing and extracting key details from resume PDFs',
        description: 'Developed a Node.js web application to parse and extract key details from resume PDFs. Utilized Express.js, EJS, pdf-parse, compromise, and express-fileupload. The web application extracts and displays personal details such as name, email, qualifications, and more, showcasing skills in server-side JavaScript, file handling, and text processing.',
        deployLink: 'https://automated-cv-parser.onrender.com/',
        previewImage: '/portfolio-react/images/projects/cvparser-preview.png'
    },
    {
        name: 'FoodDelivery',
        title: 'FoodDelivery',
        tech: 'React, Node.js, Express, MongoDB',
        desc: 'Full-stack food delivery web application',
        description: 'Built a full-stack food delivery web application using React, Node.js, Express, and MongoDB. The web application features a user-friendly interface for browsing menus and placing orders, an admin panel for restaurant management, secure payment processing via Stripe, and real-time order tracking.',
        deployLink: 'https://food-del-web-app.netlify.app/',
        previewImage: '/portfolio-react/images/projects/food-del.png'
    },
    {
        name: 'Gemini-clone',
        title: 'Gemini-clone',
        tech: 'React, Gemini API, CSS',
        desc: 'AI chat interface clone inspired by Google Gemini',
        description: 'Built a responsive Gemini clone using React and integrated with the official Gemini API. Features include a clean chat interface with message history, code block formatting, and responsive design. The application demonstrates proficiency in React state management, API integration, and CSS styling.',
        deployLink: 'https://gemini-clone-athul-sabus-projects.vercel.app/',
        previewImage: '/portfolio-react/images/projects/gemini-preview.png'
    }
  ],

  
  social: {
    github: 'https://github.com/AthulSabu2002',
    linkedin: 'https://www.linkedin.com/in/athul-sabu-417a5327b/',
    email: 'mailto:athulsabu75@gmail.com' 
  },

  terminal: {
    welcomeMessage: 'Welcome to my portfolio. Type "help" to see available commands.',
    prompt: '~',
    availableCommands: `
      Available commands:
      • projects - View my projects
      • about - Learn about me
      • skills - See my technical skills
      • contact - Get my contact info
      • clear - Clear the terminal
    `
  }
};

export { portfolioContent };
