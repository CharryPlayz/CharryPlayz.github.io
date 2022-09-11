import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";
import dark from "../styles/dark/components/project.module.css";
import light from "../styles/light/components/project.module.css";

type Props = {
  title: string;
  tooltip: string;
  href: string;
};

const Project = ({ title, tooltip, href }: Props) => {
  const darkTheme = useTheme();
  return (
    <>
      <a
        rel="noreferrer"
        href={href}
        target="_blank"
        className={darkTheme ? dark.wrapper : light.wrapper}
      >
        <h1 className={darkTheme ? dark.title : light.title}>{title}</h1>
        <p className={darkTheme ? dark.tooltip : light.tooltip}>{tooltip}</p>
      </a>
    </>
  );
};

export default Project;
