import { SkillProps } from "../types/dataTypes";
import ReactPicture from "../assets/images/skillIcons/react.svg";
import ReactNative from "../assets/images/skillIcons/react-native.svg";
import ReactQuery from "../assets/images/skillIcons/react-query.svg";
import Redux from "../assets/images/skillIcons/redux.svg";
import CSS from "../assets/images/skillIcons/css.svg";
import HTML from "../assets/images/skillIcons/html.svg";
import MUI from "../assets/images/skillIcons/mui.svg";
import Node from "../assets/images/skillIcons/mui.svg";
// import JavascriptIcon from "@mui/icons-material/Javascript";
export const skills: SkillProps[] = [
  { id: 1, skill: "React", image: ReactPicture },
  {
    id: 2,
    skill: "React Native",

    image: ReactNative,
  },
  { id: 3, skill: "Javascript", image: ReactNative },
  { id: 4, skill: "Typescript", image: ReactPicture },
  { id: 5, skill: "Material UI", image: MUI },
  { id: 6, skill: "Redux", image: Redux },
  { id: 7, skill: "React-query", image: ReactQuery },
  { id: 9, skill: "HTML", image: HTML },
  { id: 10, skill: "CSS", image: CSS },
  { id: 11, skill: "Node.JS", image: Node },
];
