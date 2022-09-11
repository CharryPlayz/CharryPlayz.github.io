import { useTheme } from "../contexts/ThemeContext";
import dark from "../styles/dark/components/navbarItem.module.css";
import light from "../styles/light/components/navbarItem.module.css";

type Props = {
  href: string;
  value: string;
};

const NavbarItem = ({ href, value }: Props) => {
  const darkTheme = useTheme();
  return (
    <a href={href} className={darkTheme ? dark.content : light.content}>
      {value}
    </a>
  );
};

export default NavbarItem;
