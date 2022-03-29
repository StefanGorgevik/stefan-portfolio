import {
  ReactCertificate,
  ReactNativeOneCertificate,
  ReactNativeTwoCertificate,
  ReactQueryCertificate,
  ReactMuiCertificate,
} from "../assets/images/index";
import { CertificateProps } from "../types";

export const certificates: CertificateProps[] = [
  {
    id: 1,
    title: "React - The Complete Guide",
    img: ReactCertificate,
    url: "https://ude.my/UC-4525f61a-444d-424c-8d1f-8ad67b6cb41c",
  },
  {
    id: 2,
    title: "React Query: Server State Management",
    img: ReactQueryCertificate,
    url: "https://ude.my/UC-763d3edf-d598-43d5-b599-f024c9ed5ae6",
  },
  {
    id: 3,
    title: "React Native - The Practical Guide",
    img: ReactNativeOneCertificate,
    url: "https://ude.my/UC-e84d4773-0045-49da-a808-5c37d233d40b",
  },
  {
    id: 4,
    title: "React Native - Complete(Zero to Mastery)",
    img: ReactNativeTwoCertificate,
    url: "https://ude.my/UC-b78c85f1-416c-4686-9799-821ca77f0608",
  },
  {
    id: 5,
    title: "Implement High Fidelity Designs with Material-UI and ReactJS",
    img: ReactMuiCertificate,
    url: "https://www.udemy.com/certificate/UC-a3031e68-bb43-4a0f-8047-774956e3baec/",
  },
];
