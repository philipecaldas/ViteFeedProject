import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/philipecaldas.png' />
          <div className={styles.authorInfo}>
            <strong>Nick Caldas</strong>
            <span>Software Eng</span>          
          </div>
        </div>

        <time title='May 4th @ 8:13AM' dateTime='2023-05-04 08:13:20'>Published 1 day ago</time>
      </header>
      
      <div className={styles.content}>
        <p>Hello everyone</p>
        <p>This is the first post for the application</p>
        <p> {`->`} <a href="#">Link to follow</a></p>
        <p><a href="#">#someTag</a></p>
      </div>

      <form className={styles.commentForm}>
      <strong>Share your thoughts</strong>
      <textarea placeholder='Leave your comment here'/>
      <footer>
        <button type='submit' onClick={(e)=> e.preventDefault()}>Submit</button>
      </footer>
      </form>
      <div className={styles.commentList} >
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}