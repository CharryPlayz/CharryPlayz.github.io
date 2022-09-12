import Head from "next/head";
import Navbar from "../components/Navbar";
import light from "../styles/light/home.module.scss";
import dark from "../styles/dark/home.module.scss";
import { useTheme } from "../contexts/ThemeContext";
import Badge from "../components/Badge";
import Project from "../components/Project";

const Home = () => {
  const darkTheme = useTheme();
  const birthDate = new Date("09/24/2008");
  const difference = Date.now() - birthDate.getTime();
  const dt = new Date(difference);
  const year = dt.getUTCFullYear();
  const age = Math.abs(year - 1970);

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={darkTheme ? dark.content : light.content}>
        <div
          className={darkTheme ? dark.container : light.container}
          id="about_me"
        >
          <h1 className={darkTheme ? dark.title : light.title}>About Me</h1>
          <div className={darkTheme ? dark.text : light.text}>
            <p>
              Hey, My name is Maja Parašilovac. I am {age} years old and
              recently started programming with with React and since then have
              made a few projects that I unfortunately didn&apos;t keep track
              of.
            </p>
          </div>
        </div>
        <div
          className={darkTheme ? dark.container : light.container}
          id="skills"
        >
          <h1 className={darkTheme ? dark.title : light.title}>Skills</h1>
          <div className={darkTheme ? dark.badges : light.badges}>
            <Badge image="/skills/html.png" tooltip="HTML" />
            <Badge image="/skills/css.png" tooltip="CSS" />
            <Badge image="/skills/javascript.png" tooltip="JavaScript" />
            <Badge image="/skills/github.png" tooltip="Github" />
            <Badge image="/skills/nextjs.png" tooltip="NextJS" />
            <Badge image="/skills/react.png" tooltip="React" />
            <Badge image="/skills/node.png" tooltip="NodeJS" />
            <Badge image="/skills/typescript.png" tooltip="Typescript" />
          </div>
        </div>
        <div
          className={darkTheme ? dark.container : light.container}
          id="projects"
        >
          <h1 className={darkTheme ? dark.title : light.title}>Projects</h1>
          <div className={darkTheme ? dark.projects : light.projects}>
            <Project
              title="This Page"
              tooltip="Click to view"
              href="https://github.com/CharryPlayz/CharryPlayz.github.io"
            />
          </div>
        </div>
        {/* {<div
          className={darkTheme ? dark.container : light.container}
          id="contact"
        >
          <h1 className={darkTheme ? dark.title : light.title}>Contact</h1>
          <div className={darkTheme ? dark.contact : light.contact}>
            <ContactForm />
          </div>}
        </div> */}
        <br />
      </div>
    </>
  );
};

export default Home;
