import Marquee from "react-fast-marquee";
import { clsx } from "clsx";
import "./TextMarquee.css";

interface TextMarqueeProps {
  text: string;
  bgColor: string;    // expects constants like "bg-primary"
  textBg: string;     // expects constants like "bg-secondary"
  textColor?: string; // expects constants like "text-white"
  wrapperClassName?: string;
}

export default function TextMarquee({ text, bgColor, textBg, textColor, wrapperClassName }: TextMarqueeProps) {
  const repeatedText = Array(10).fill(text);

  return (
    <div className={clsx("text-marquee-wrapper", bgColor, wrapperClassName)}>
      <Marquee speed={90} gradient={false}>
        {repeatedText.map((text, index) => (
          <div key={index} className={clsx("text-marquee-item", textBg, textColor)}>
            <h3 className="text-marquee-heading">{text}</h3>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
