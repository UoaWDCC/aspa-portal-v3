import styles from "./Socials.module.css";
import SocialsCard from "./SocialsCard"

export default function Socials() {
  const socials = [
    {exec: "Name Surname", execTestimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", execTitle: "Title"},
    {exec: "Name Surname", execTestimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", execTitle: "Title"},
    {exec: "Name Surname", execTestimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", execTitle: "Title"}
]
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Check Out Our Socials!
      </h1>
      <div className={styles.content}>
        {socials.map((social) => (
          <SocialsCard key={social.exec} social={social} />     
        ))}
      </div>
    </div>

  );
}