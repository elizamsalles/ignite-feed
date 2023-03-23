import styles from './Sidebar.module.css'
import { PencilSimpleLine } from "@phosphor-icons/react"; 


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>

            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
            />

            <img 
            className={styles.avatar}
            src="https://yt3.ggpht.com/yti/AHXOFjXqYUtx1t9uu0P5RdwPzlpOep4gezDy9BzGTPSk=s108-c-k-c0x00ffffff-no-rj"
             />

            <div className={styles.profile}>
                <strong>Eliza Salles</strong>
                <span>Front-end Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
} 