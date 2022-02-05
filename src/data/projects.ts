export interface ProjectProps {
  id: number;
  name: string;
  info: string;
  url: string;
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    name: "Sit.Com",
    info: "Front end project made in React JS, Material UI and React-query. For  It's purpose is to let the user explore new sitcoms.",
    url: "https://sit-com.herokuapp.com/",
  },
  {
    id: 2,
    name: "Budget Architect",
    info: `Full-stack developed project, made with NodeJS and ReactJS. 
        I used MongoDB as a database and mongoose for creating the model.  
        For style, I used plain CSS, and for deployment, I used Heroku.`,
    url: "https://budgetarchitect.herokuapp.com/",
  },
  {
    id: 3,
    name: "BodyBuildingMedia",
    info: `The first version of a bodybuilding social media, which is a full-stack developed project, 
        created with ReactJS, Node.js, and MongoDB. It is a responsive website and for UI, I used plain HTML and CSS. 
        Photo upload mode was created with the help of Cloudinary and the project is deployed on Heroku.`,
    url: "https://bodybuildingmedia.herokuapp.com",
  },
  {
    id: 4,
    name: "Expense Calculator",
    info: `Full-stack developed project, created with ReactJS, Node.js, and MongoDB. For the UI, I used plain HTML and
        CSS. It is a calculator where you can keep track of your expenses and bought items. It was given as an ending project
        by Semos Education.`,
    url: "https://stark-island-29614.herokuapp.com",
  },
  {
    id: 5,
    name: "Rick n' Morty",
    info: `Front-end developed project, created with ReactJS, using React Hooks. For the UI, I used plain HTML and
        CSS. It is a small front-end project where I used an API and made a responsive web page.`,
    url: "https://stefangorgevik.github.io/ricknmorty/",
  },
  {
    id: 6,
    name: "Movie Database",
    info: `Front-end developed project, created with ReactJS. For the UI, I used plain HTML and
        CSS. It is a small front-end project where I used a prepared API, but the information was limited, 
        so I worked with what I had.`,
    url: "https://stefangorgevik.github.io/movies/",
  },
];
