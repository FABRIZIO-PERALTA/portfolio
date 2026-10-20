import designImage from "../assets/projects/design.png";
import ventaImage from "../assets/projects/mostrar-ventass.png";
import academiaImage from "../assets/projects/inicioAlumno.png";

const projects = [


  {
    id: 3,
    title: "Aula Virtual - Academia de Inglés",
    type: "Aplicación Web | Proyecto Real",
    image: academiaImage,

    description:
      "Plataforma educativa desarrollada para una academia de inglés. Permite gestionar alumnos, cursos, temas y recursos didácticos mediante un sistema de autenticación y autorización por roles. Aplicación desplegada en un servidor VPS.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Thymeleaf",
      "Docker",
      "Ubuntu"
    ],

    repositoryUrl: ""
  },

  {
    id: 1,

    title: "API Bazar",

    type: "API REST",

    image: ventaImage,

    description:
      "API REST desarrollada con Spring Boot para gestionar productos, clientes, ventas y control de stock.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Docker",
    ],

    repositoryUrl: "https://github.com/FABRIFAMAF/bazar-api.git",
  },

  {
    id: 2,

    title: "Taco Cloud",

    type: "Aplicación Web",

    image: designImage,

    description:
      "Aplicación web desarrollada siguiendo el libro Spring in Action, implementando autenticación, persistencia y gestión de pedidos.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JDBC",
      "Thymeleaf",
      "H2 Database",
    ],

    repositoryUrl: "https://github.com/FABRIFAMAF/taco-cloud.git",
  },
];

export default projects;