import light from "../styles/light/components/navbar.module.css";
import dark from "../styles/dark/components/navbar.module.css";
import NavbarItem from "./NavbarItem";
import { useTheme, useUpdateTheme } from "../contexts/ThemeContext";
import styles from "../styles/toggle.module.css";

const Navbar = () => {
  const darkTheme = useTheme();
  return (
    <>
      <header className={darkTheme ? dark.navbar : light.navbar}>
        <div className={darkTheme ? dark.navbar_items : light.navbar_items}>
          <NavbarItem href="#about_me" value="About Me" />
          <NavbarItem href="#skills" value="Skills" />
          <NavbarItem href="#projects" value="Projects" />
          {/*<NavbarItem href="#contact" value="Contact" />*/}
          <ToggleThemeButton />
        </div>
      </header>
    </>
  );
};

export default Navbar;

export const ToggleThemeButton = () => {
  const toggleTheme = useUpdateTheme();
  const darkTheme = useTheme();
  return (
    <label className={styles.switch}>
      <input checked={!darkTheme} type="checkbox" onChange={toggleTheme} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};
