import styles from './TeamListAdmin.module.css';
import ExecCard from "./ExecCard"

export default function MeetTheTeam() {

  // Setup placeholder execs
  const execs = [
    {name: "Sky Zhang", title: "Executive", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}, 
    {name: "Zen Dogra", title: "Executive", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"},
    {name: "Jeffery Luo", title: "Executive", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"},
    {name: "Amado Manaois", title: "Executive", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"},
    {name: "Vicki Kong", title: "Executive", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"},
    {name: "Jasmine Cheung", title: "Executive", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}
  ];
 
  return (
      <div className={styles.container}>
        <h1 className={styles.title}>
          Meet The Team
        </h1>
        <div className={styles.content}>
          {/* Loop through all the execs and show their respective card*/}
          { execs.map((exec) => (
            // Give props, exec and id
            <ExecCard key={exec.name} exec={exec}/>
          ))}
        </div>
        <button>EDIT MEMBERS</button>
      </div>
  )
}