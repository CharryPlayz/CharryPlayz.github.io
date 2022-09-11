import light from "../styles/light/components/badge.module.css";
import dark from "../styles/dark/components/badge.module.css";
import { useTheme } from "../contexts/ThemeContext";
import Image from "next/image";

type Props = {
  image: string;
  tooltip: string;
};

const Badge = ({ image, tooltip }: Props) => {
  const darkTheme = useTheme();
  return (
    <div className={darkTheme ? dark.content : light.content}>
      <Image
        className={darkTheme ? dark.image : light.image}
        src={image}
        width={50}
        height={50}
        alt=""
      />
      <p className={darkTheme ? dark.tooltip : light.tooltip}>{tooltip}</p>
    </div>
  );
};

export default Badge;
