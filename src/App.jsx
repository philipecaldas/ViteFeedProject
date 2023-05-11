import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/philipecaldas.png',
      name: 'Nick',
      role: 'Software Eng',
    },
    content: [
      {  type: 'paragraph', comment: 'Hello everyone', id: 0 },
      {  type: 'paragraph', comment: 'This is the first post for the application', id: 1 },
      {  type: 'link', comment: '-> Link to follow', id: 2 },
      {  type: 'link', comment: '#someTag', id: 3 },
    ],
    publishedAt: new Date('2023-05-11 14:49:20'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/812311.png',
      name: 'Phil',
      role: 'CTO',
    },
    content: [
      {  type: 'paragraph', comment: 'Hello everyone', id: 4 },
      {  type: 'paragraph', comment: 'This is the first post for the application', id: 5 },
      {  type: 'link', comment: '-> Link to follow', id: 6 },
      {  type: 'link', comment: '#someTag', id: 7 },
    ],
    publishedAt: new Date('2023-05-04 08:13:20'),
  }
]


function App() {
  return (
  <div>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts?.map((post)=> 
          <Post 
            key={post.id}
            {...post}
          />
        )}
      </main>
    </div>
  </div>
  )
}

export default App
