const portfolioContent = {
  hero: {
    name: "Athul Sabu",
    title: "Passionate Developer and Coder",
    description: "Hey, I’m Athul! I enjoy creating web applications that solve real problems and bring ideas to life. I’m all about clean, efficient code and crafting user experiences that feel effortless. Every project is a chance to learn, grow, and make something meaningful. I believe the best solutions are born from curiosity and collaboration.",
    profileImage: "/react-portfolio/images/profile-pic.png"
  },
  
  skills: [
    'C',
    'Java',
    'Python',
    'JavaScript',
    'HTML',
    'CSS',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL',
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
        sourceCodeLink: '',
        previewImage: '/react-portfolio/images/projects/adcolumn-preview.png',
        images: [
          '/react-portfolio/images/projects/adcolumn-preview.png',
          '/react-portfolio/images/projects/adcolumn-2.png',
          '/react-portfolio/images/projects/adcolumn-3.png',
          '/react-portfolio/images/projects/adcolumn-4.png',
          '/react-portfolio/images/projects/adcolumn-5.png',
          '/react-portfolio/images/projects/adcolumn-6.png',
        ]
    },
    {
        name: 'CV-parser',
        title: 'CV-parser',
        tech: 'Node.js, Express.js, EJS, pdf-parse',
        desc: 'Web application for parsing and extracting key details from resume PDFs',
        description: 'Developed a Node.js web application to parse and extract key details from resume PDFs. Utilized Express.js, EJS, pdf-parse, compromise, and express-fileupload. The web application extracts and displays personal details such as name, email, qualifications, and more, showcasing skills in server-side JavaScript, file handling, and text processing.',
        deployLink: 'https://automated-cv-parser.onrender.com/',
        sourceCodeLink: '',
        previewImage: '/react-portfolio/images/projects/cvparser-preview.png',
        images: [
          '/react-portfolio/images/projects/cvparser-preview.png',
          '/react-portfolio/images/projects/cvparser-2.png',
        ]
    },
    {
        name: 'FutureScape',
        title: 'FutureScape',
        tech: 'Next.js, python, docker, supabase',
        desc: 'Web Application for online competitions',
        description: 'Built a web application for a college tech fest with seven rounds, including blind coding and debugging challenges. Used Next.js, Tailwind CSS, and Supabase to implement features like a real-time leaderboard, user authentication, and an admin panel to manage participant progression.',
        deployLink: '',
        sourceCodeLink: '',
        previewImage: '/react-portfolio/images/projects/futurescape-1.png',
        images: [
          '/react-portfolio/images/projects/futurescape-1.png',
          '/react-portfolio/images/projects/futurescape-2.png',
          '/react-portfolio/images/projects/futurescape-3.png',
          '/react-portfolio/images/projects/futurescape-4.png',
          '/react-portfolio/images/projects/futurescape-5.png',
          '/react-portfolio/images/projects/futurescape-6.png',
        ]
    },
    {
        name: 'PolyComm',
        title: 'PolyComm',
        tech: 'Next.js, Stream API, React',
        desc: 'Multilingual video conferencing platform with transcription',
        description: 'Developed a video conferencing platform using Next.js and the Stream API, enabling users to create and join meetings. The application supports real-time transcription in three languages, with automatic translation to English for seamless communication. Additionally, PolyComm offers post-meeting documentation tools with customizable templates, allowing users to generate, edit, and export detailed meeting summaries efficiently.',
        deployLink: '',
        previewImage: '/react-portfolio/images/projects/polycomm-1.png',
        images: [
          '/react-portfolio/images/projects/polycomm-1.png',
          '/react-portfolio/images/projects/polycomm-2.png',
          '/react-portfolio/images/projects/polycomm-3.png',
          '/react-portfolio/images/projects/polycomm-4.png',
          '/react-portfolio/images/projects/polycomm-5.png',
          '/react-portfolio/images/projects/polycomm-6.png',
        ]
    },
    {
        name: 'File-Vault',
        title: 'File Vault',
        tech: 'Node.js, Express.js, TypeScript, Supabase, AES-256-GCM',
        desc: 'Secure file storage and retrieval system with end-to-end encryption',
        description: 'A secure file storage and retrieval system that allows authorized users to upload, download, and manage their files. Implemented with Node.js, Express.js, TypeScript, and Supabase, using Object-Oriented Programming principles and AES-256-GCM encryption. Features include secure file upload and storage, end-to-end file encryption and decryption, user authentication and authorization, file metadata management, and file renaming and deletion capabilities.',
        deployLink: '',
        sourceCodeLink: 'https://github.com/AthulSabu2002/fileVault',
        previewImage: '/react-portfolio/images/projects/filevault-1.png',
        images: [
          '/react-portfolio/images/projects/filevault-1.png',
          '/react-portfolio/images/projects/filevault-2.png',
          '/react-portfolio/images/projects/filevault-3.png',
        ]
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