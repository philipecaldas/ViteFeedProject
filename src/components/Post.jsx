import { useState } from 'react';
import styles from './Post.module.css';
import { getTimeParams } from '../helpers';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

/* eslint-disable react/prop-types */
export function Post({author, publishedAt, content}){
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(['This is 1', 'This is 2']);

  const relativeDate = getTimeParams(publishedAt);
  
  const publishedDateFormatted = new Intl.DateTimeFormat('en-US', {
    day:'2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAt);
  
  const publisedDateRelativeToNow = new Intl.RelativeTimeFormat('en-US', {
    numeric: 'always',
    style: 'long',
  }).format(-relativeDate.value, relativeDate.unit);


  const handleSubmit = () =>{
    event.preventDefault()
    setComments([...comments, newComment]);
    setNewComment('');
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>          
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publisedDateRelativeToNow}
        </time>
      </header>
      
      <div className={styles.content}>
        {content.map(line => {
          if(line.type==='paragraph') return <p key={line.id}>{line.comment}</p>
          else if(line.type=== 'link') return <p key={line.id}><a href='#'>{line.comment}</a></p>
        })}
      </div>

      <form 
        onSubmit={handleSubmit} 
        className={styles.commentForm}
      >
      <strong>Share your thoughts</strong>
      <textarea
        name='newComment'
        onChange={(e)=> setNewComment(e.target.value)} 
        value={newComment}
        placeholder='Leave your comment here'
      />
      <footer>
        <button type='submit'>Submit</button>
      </footer>
      </form>
      <div className={styles.commentList} >
        {comments?.map(comment => <Comment key={comment} content={comment}/>)}
      </div>
    </article>
  )
}