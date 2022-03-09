import CalculateSharpIcon from "@mui/icons-material/CalculateSharp";
import { ProjectProps } from "../types";

export const projects: ProjectProps[] = [
  {
    id: 1,
    name: "Sit.Com",
    info: "This project is allowing users to authenticate, browse and choose their favorite sitcoms.",
    url: "https://sit-com.herokuapp.com/",
    Icon: CalculateSharpIcon,
    skills: ["React", "Material UI", "React Query", "Typescript"],
  },
  {
    id: 2,
    name: "Budget Architect",
    info: `Full-stack developed project, made to help user keep track of their expenses.`,
    url: "https://budgetarchitect.herokuapp.com/",
    Icon: CalculateSharpIcon,
    skills: ["React", "Node.JS", "MongoDB", "HTML/CSS"],
  },
  {
    id: 3,
    name: "Rick n' Morty",
    info: `Front-end developed project, that lets the users browse through Rick n' Morty characters and see info about them.`,
    url: "https://stefangorgevik.github.io/ricknmorty/",
    Icon: CalculateSharpIcon,
    skills: ["React", "Javascript", "CSS", "HTML"],
  },
  {
    id: 4,
    name: "BodyBuildingMedia",
    info: `Attempt for a bodybuilding social media website, where users can authenticate, post their diets and workouts.`,
    url: "https://bodybuildingmedia.herokuapp.com",
    Icon: CalculateSharpIcon,
    skills: ["React", "Javascript", "CSS", "HTML"],
  },
  {
    id: 5,
    name: "Expense Calculator",
    info: `Full-stack developed project that serves as a calculator where you can keep track of your expenses and bought items.`,
    url: "https://stark-island-29614.herokuapp.com",
    Icon: CalculateSharpIcon,
    skills: ["React", "Node.js", "MongoDB", "HTML/CSS"],
  },
  {
    id: 6,
    name: "Movie Database",
    info: `Front-end developed project that lets the users browse and search for movies.`,
    url: "https://stefangorgevik.github.io/movies/",
    Icon: CalculateSharpIcon,
    skills: ["React", "Javascript", "HTML", "CSS"],
  },
];
