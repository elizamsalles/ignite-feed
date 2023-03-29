import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'



export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://img.freepik.com/free-vector/cute-turtle-super-hero-cartoon-vector-icon-illustration-animal-holiday-icon-concept-isolated-flat_138676-4623.jpg?w=740&t=st=1680107944~exp=1680108544~hmac=782a0a24b01e15f52673f0048be7e706a92fdc61d289c848be91ccc4f402bb99" />

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