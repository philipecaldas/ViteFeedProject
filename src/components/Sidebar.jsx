import styles from './Sidebar.module.css';
import { PencilLine } from '@phosphor-icons/react';
import {Avatar} from './Avatar';

export function Sidebar(){
  return (
    <aside className={styles.sidebar} >
      <img 
        className={styles.cover}
        alt=''
        src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
      />
      
      <div className={styles.profile}>
        <Avatar src='https://github.com/philipecaldas.png'/>
        <strong>Nick Caldas</strong>
        <span>Software Eng</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20}/>
          Edit Profile
        </a>
      </footer>
    </aside>
  )
}