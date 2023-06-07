import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export function Comment() {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/bruno-rodrigues-d.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruno Rodrigues</strong>
              <time title="06 de Junho às 16:59h" dateTime="2023-06-06 16:59:00">Cerca de 2h atrás</time>
            </div>

            <button title='Deletar comntário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Bruno, parabéns!! 🚀</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}