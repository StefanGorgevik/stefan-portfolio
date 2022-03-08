import {
  ReactCertificate,
  ReactNativeOneCertificate,
  ReactNativeTwoCertificate,
  ReactQueryCertificate,
} from "../assets/images/index";
import { CertificateProps } from "../types";

export const certificates: CertificateProps[] = [
  { id: 1, title: "React - The Complete Guide", img: ReactCertificate },
  {
    id: 2,
    title: "React Query: Server State Management",
    img: ReactQueryCertificate,
  },
  {
    id: 3,
    title: "React Native - The Practical Guide",
    img: ReactNativeOneCertificate,
  },
  {
    id: 4,
    title: "React Native - Complete(Zero to Mastery)",
    img: ReactNativeTwoCertificate,
  },
];
