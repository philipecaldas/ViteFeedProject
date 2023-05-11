/* eslint-disable react/prop-types */
import styles from './Comment.module.css';
import { Trash, ThumbsUp } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/philipecaldas.png" />

      <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Nick Caldas</strong>
            <time title='May 4th @ 8:13AM' dateTime='2023-05-04 08:13:20'>1 day ago</time>
          </div>
          <button title='Delete comment'>
            <Trash size={24}/>
          </button>
        </header>

        <p>{content}</p>
      </div>
      <footer>
        <button>
          <ThumbsUp size={20}/>
          Like <span>20</span>
        </button>
      </footer>
      </div>
    </div>
  )
}