import styles from './Header.module.css';
import npcLogo from '../assets/npc-logo.svg';

export function Header(){
  return (
    <header className={styles.header}>
      <img src={npcLogo} alt="NPC Logo" />     
      <strong>NPC Feed</strong>
    </header>
  )
}