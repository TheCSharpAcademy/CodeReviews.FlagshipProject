import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { ElementType } from "react";

export type Provider = {
  id: number;
  name: string;
  icon: ElementType;
  idName: string;
};

const providers: Provider[] = [
  { id: 0, name: "Google", icon: FaGoogle, idName: "googleId" },
  { id: 1, name: "Github", icon: FaGithub, idName: "githubId" },
  { id: 2, name: "Facebook", icon: FaFacebook, idName: "facebookId" },
];

export default providers;
