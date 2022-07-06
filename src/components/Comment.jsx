import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>

      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/33429566?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='11 de maio às 08:11h' dateTime='2022-05-11 08:11:01'>
                Cerda de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>

          </header>

          <p>Muito bom Devon, parabéns!!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Applaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}