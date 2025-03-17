 
  export const navigation = [
    {
      id: "0",
      title: "Home",
      url: "#home",
    },
    // {
    //   id: "1",
    //   title: "Shop",
    //   url: "#shop",
    // },
    {
      id: "2",
      title: "Portfolio",
      url: "#portfolio",
    },
    // {
    //   id: "3",
    //   title: "About",
    //   url: "#About",
    // },
    {
      id:"4",
      title: "Contact",
      url: "#contact"
    },
    {
      id: "5",
      title: "New account",
      url: "/signup",
      onlyMobile: true,
    },
    {
      id: "6",
      title: "Sign in",
      url: "/login",
      onlyMobile: true,
    },
  ];

  const homeSmile = '/assets/home-smile.svg';
  const file02 = '/assets/file-02.svg';
  const searchMd = '/assets/search-md.svg';
  const plusSquare = '/assets/plus-square.svg';
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  const notification4 = '/assets/notification/image-4.png'
  const notification3 = '/assets/notification/image-3.png' 
  const notification2 = '/assets/notification/image-2.png'

  export const notificationImages = [notification4, notification3, notification2];

  const yourlogo ='/assets/bitwise-small-white.png';
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const brainwaveServices = [
    "Website & Landing Page building",
    "Customized web apps",
    "E-commerce stores",
    "API &  Backend Services"
  ];
  
  const recording03 = '/assets/recording-03.svg';
  const recording01 ='/assets/recording-01.svg';
  const disc02 = '/assets/disc-02.svg';
  const chromecast = '/assets/chrome-cast.svg';
  const sliders04 = '/assets/sliders-04.svg';

  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "AI-Powered Voice Notes App",
      text: "Convert speech to text and organize notes with AI summarization.",
      date: "February 2025",
      status: "progress",
      imageUrl: '/assets/roadmap/image-1.png',
      colorful: true,
    },
    {
      id: "1",
      title: "Gamified Educational Quiz App",
      text: "A learning platform whre users earn XP for answering questions correctly.",
      date: "March 2025",
      status: "progress",
      imageUrl: '/assets/roadmap/image-2.png',
    },
    {
      id: "2",
      title: "Library Management System",
      text: "A smart and efficient Library Management System that simplifies book tracking, borrowing, and returns.",
      date: "January 2025",
      status: "done",
      imageUrl: '/assets/roadmap/image-3.png',
    },
    {
      id: "3",
      title: "AI Image Generator API",
      text: "A REST API that lets users generate AI-powered images from text prompts.",
      date: "May 2023",
      status: "progress",
      imageUrl: '/assets/roadmap/image-4.png',
    },
  ];
  
  export const collabText =
    "With latest tools and top-notch digital products, it's the perfect solution for people looking to work smarter.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Seamless Integration",
      text: collabText,
    },
    {
      id: "1",
      title: "Smart Automation",
    },
    {
      id: "2",
      title: "Top-notch Security",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: '/assets/collaboration/figma.png',
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: "/assets/collaboration/notion.png",
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: "/assets/collaboration/discord.png",
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: "/assets/collaboration/slack.png",
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: "assets/collaboration/photoshop.png",
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: "assets/collaboration/protopie.png",
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: "assets/collaboration/framer.png",
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: "assets/collaboration/raindrop.png",
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ];
  
  export const products = [
    {
      id: "0",
      title: "Social Media Templates",
      text: "Professionally designed Instagram and Facebook post templates with modern aesthetics and trendy color schemes, easily customizable in Canva.",
      backgroundUrl: "assets/benefits/card-1.svg",
      iconUrl: 'assets/benefits/icon-1.svg',
      imageUrl: 'assets/benefits/image-2.png',
    },
    {
      id: "1",
      title: "Branding Kits",
      text: "Complete branding packages including logo templates, color palettes, font combinations, and social media assets created in Figma.",
      backgroundUrl: "assets/benefits/card-2.svg",
      iconUrl: 'assets/benefits/icon-2.svg',
      imageUrl: 'assets/benefits/image-2.png',
      light: true,
    },
    {
      id: "2",
      title: "Website UI Kits",
      text: "High-conversion landing page components and UI elements, ready to be implemented for modern websites.",
      backgroundUrl: "assets/benefits/card-3.svg",
      iconUrl: 'assets/benefits/icon-3.svg',
      imageUrl: 'assets/benefits/image-2.png',
    },
    {
      id: "3",
      title: "Digital Planners",
      text: "Beautiful and functional digital planners with hyperlinked sections, created with iPad-compatible features.",
      backgroundUrl: "assets/benefits/card-4.svg",
      iconUrl: 'assets/benefits/icon-4.svg',
      imageUrl: 'assets/benefits/image-2.png',
      light: true,
    },
    {
      id: "4",
      title: "AI-Enhanced Mockups",
      text: "Premium product mockups enhanced with AI for realistic shadows and lighting effects for professional product displays.",
      backgroundUrl: "assets/benefits/card-5.svg",
      iconUrl: 'assets/benefits/icon-1.svg',
      imageUrl: 'assets/benefits/image-2.png',
    },
    {
      id: "5",
      title: "Digital Art Collections",
      text: "Unique digital illustrations and patterns, perfect for prints, merchandise, and digital backgrounds.",
      backgroundUrl: "assets/benefits/card-6.svg",
      iconUrl: 'assets/benefits/icon-2.svg',
      imageUrl: 'assets/benefits/image-2.png',
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: '/assets/socials/discord.svg',
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: '/assets/socials/twitter.svg',
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: '/assets/socials/instagram.svg',
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: '/assets/socials/telegram.svg',
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: '/assets/socials/facebook.svg',
      url: "#",
    },
  ];