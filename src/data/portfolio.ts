import { AboutInfo, Project } from '@/types';

export const aboutInfo: AboutInfo = {
  name: "Christian Saavedra",
  title: "Desarrollador Fullstack",
  description: "Bachiller de Ingeniería Informática en la Universidad Ricardo Palma, soy apasionado en crear páginas web increíbles, y siempre estoy buscando nuevos desafíos para crecer profesionalmente.",
  profileImage: "/images/file.png",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Angular",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "C#",
    "Java",
    "Python",
    "MongoDB",
    "SQL Server",
    "MySQL",
  ],
  email: "casaavedram@outlook.com",
  linkedin: "https://www.linkedin.com/in/christian-saavedra-montero-602a18293/",
  github: "https://github.com/csaavedram",
};

export const projects: Project[] = [
    {
    id: "proyecto-1",
    title: "Shiny Hunter Counter (Aplicación en Inglés)",
    description: "Aplicación web para contar Shinies en Juegos de Pokémon desde segunda generación hasta novena generación.",
    longDescription: "Aplicación web para llevar un registro de los Shinies encontrados en juegos de Pokémon. Permite a los usuarios gestionar sus colecciones de Shinies. La aplicación incluye funcionalidades para agregar nuevos Shinies, editar detalles, y visualizar estadísticas de la colección.",
    images: [
      "/images/projects/shiny-1.jpg"
    ],
    techStack: ["Vite", "Tailwind", "React", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://csaavedram.github.io/shinycounter/",
    githubUrl: "https://github.com/csaavedram/shinycounter",
    featured: true,
    category: "Web Development"
  },
  {
    id: "proyecto-2",
    title: "Sistema Web para Mejorar la Gestión Operativa en APC Emedicom",
    description: "Una aplicación de e-commerce completa con carrito de cotizaciones, facturación y dashboard usuario/administrador.",
    longDescription: "Aplicación web completa de e-commerce desarrollada con Angular, que incluye gestión de productos, carrito de cotizaciones, facturación, autenticación de usuarios, sistema de pagos con MercadoPago, y panel de administración. La aplicación está optimizada para SEO y tiene un diseño completamente responsivo.",
    images: [
      "/images/projects/ecommerce-1.jpg"
    ],
    techStack: ["Angular", "Spring Boot", "MySQL", "Java", "Typescript", "Mercadopago", "JWT Auth"],
    demoUrl: "https://www.youtube.com/watch?v=qg4JY-iIZSA",
    githubUrl: "https://github.com/csaavedram/apc-frontend",
    featured: true,
    category: "Web Development"
  },
  {
    id: "proyecto-3",
    title: "Detección de Errores Lógicos y Semánticos en Código",
    description: "Modelo entrenado para detectar errores en código fuente utilizando modelos de deep learning.",
    longDescription: "Desarrollé un modelo que analiza código fuente para detectar errores lógicos y semánticos mediante técnicas de deep learning. Se entrenó un modelo sobre un conjunto de datos de fragmentos de código etiquetados con errores, permitiendo predecir posibles fallos que no suelen ser detectados por compiladores tradicionales.",
    images: [
      "/images/projects/taskmanager-1.jpg"
    ],
    techStack: ["Python", "Fine-Tuning", "CodeBERT", "Pandas", "Matplotlib", "Sklearn"],
    demoUrl: "https://docs.google.com/presentation/d/11OW1TpLEugyI0zhUlQnrSaJLZqnufW40NPc6ZOQn-Ko/",
    githubUrl: "https://github.com/csaavedram/logicalerrors",
    featured: false,
    category: "Deep Learning"
  },
  {
    id: "proyecto-4",
    title: "Sistema Web para Mejorar las Ventas de la Tienda ElsaVal",
    description: "Aplicación del clima con pronóstico extendido, geolocalización y diseño adaptativo.",
    longDescription: "Aplicación del clima que muestra condiciones actuales y pronóstico de 7 días. Incluye geolocalización automática, búsqueda de ciudades, mapas interactivos, gráficos de temperatura y precipitación, y notificaciones de alertas meteorológicas.",
    images: [
      "/images/projects/weather-1.jpg"
    ],
    techStack: ["Angular", "Spring Boot", "MySQL", "TailwindCSS", "TypeScript", "Java"],
    githubUrl: "https://github.com/csaavedram/Elsaval-Frontend",
    featured: false,
    category: "Web Development"
  },
  {
    id: "proyecto-5",
    title: "Sistema Web para el Control de Operaciones del Club Bujama Lacus",
    description: "Sistema con módulos destinados a controlar y gestionar los recursos",
    longDescription: "Sistema web desarrollado con Angular y Spring Boot, que permite la gestión de operaciones del club, incluyendo control de miembros, reservas y eventos.",
    images: [
      "/images/projects/blog-1.jpg",
    ],
    techStack: ["Angular", "Spring Boot", "MySQL", "Bootstrap", "TypeScript", "Java"],
    featured: false,
    category: "Web Development"
  }
];

// Función helper para obtener proyectos destacados
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

// Función helper para obtener proyectos por categoría
export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};
