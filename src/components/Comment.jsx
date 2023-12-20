import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'



export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/elizamsalles.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alice B.</strong>
                            <time title="23 de Março às 11:22h" dateTime="2023-03-23 11:22:00">Cerca de 2h atrás</time>
                        </div>

                        <button tittle="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        Muito bom Eliza, parabéns! 👏
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>23</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}