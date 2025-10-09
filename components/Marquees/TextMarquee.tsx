import { clsx } from "clsx";
import "./TextMarquee.css";

interface TextMarqueeProps {
  text: string;
  bgColor: string; // e.g. "bg-primary"
  textBg: string; // e.g. "bg-secondary"
  textColor?: string; // e.g. "text-white"
  wrapperClassName?: string;
}

export default function TextMarquee({
  text,
  bgColor,
  textBg,
  textColor,
  wrapperClassName,
}: TextMarqueeProps) {
  // Repeat the text enough times to fill and loop seamlessly
  const repeatedText = Array(20).fill(text);

  return (
    <div className={clsx("text-marquee-wrapper", bgColor, wrapperClassName)}>
      <div className="text-marquee-track">
        {repeatedText.map((t, index) => (
          <div
            key={index}
            className={clsx("text-marquee-item", textBg, textColor)}
          >
            <h3 className="text-marquee-heading">{t}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
