import { ArrowBendDoubleUpLeft } from '@phosphor-icons/react';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://yt3.ggpht.com/yti/AHXOFjXqYUtx1t9uu0P5RdwPzlpOep4gezDy9BzGTPSk=s108-c-k-c0x00ffffff-no-rj" />
                    <div className={styles.authorInfo}>
                        <strong>Eliza Salles</strong>
                        <span>Front-end Developer</span>
                    </div>
                </div>

                <time title="20 de Março às 16:33h" dateTime="2023-03-20 16:34:00">Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Oi gente! 👋</p>
                <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Dev Links, evento da Rocketseat. O nome do projeto é Projeto Perfil 🚀</p>
                <p><a href="https://elizamsalles.github.io/projeto/" target={'_blank'}><ArrowBendDoubleUpLeft /> Deploy</a></p>
                <p><a href="https://github.com/elizamsalles/projeto" target={'_blank'}>👉 Código</a></p>
            
            </div>

          
                <form className={styles.commentSection}>
                    <strong>
                        Deixe seu feedback
                    </strong>

                    <textarea 
                        placeholder="Escreva um comentário..." 
                    />
                    <footer>
                        <button type="submit">
                            Publicar
                        </button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div> 

            
        </article>
    )
}