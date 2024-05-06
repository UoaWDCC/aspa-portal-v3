import styles from './MTT.module.css';
import ExecCard from "./ExecCard"

export default function MeetTheTeam() {

  const execs = [
    {name: "Leonardo", title: "Executive", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png"}, 
    {name: "Raphael", title: "Executive", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png"},
    {name: "Michaelangelo", title: "Executive", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png"},
    {name: "Donatello", title: "Executive", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png"},
    {name: "Splinter", title: "Executive", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png"},
    {name: "Shredder", title: "Executive", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png"}
  ];
 
  return (
      <div className={styles.teamborder}>
        <h1>
          Meet The Team
        </h1>
        <div className={styles.container}>
          { execs.map((exec) => (
            <ExecCard exec={exec}/>
          ))}
        </div>
      </div>
  )
}