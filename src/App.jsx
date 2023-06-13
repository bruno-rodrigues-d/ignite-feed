import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';
import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/bruno-rodrigues-d.png',
      name: 'Bruno Rodrigues',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-06-07 11:15:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/bruno-rodrigues-d.png',
      name: 'Bruno Rodrigues',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-06-05 11:15:00'),
  },
];

function App() {

  return (
    <>
     <Header />

     <div className={styles.wrapper}>
       <Sidebar />
       <main>
         {posts.map(post => {
           return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
           )
         })}
       </main>
     </div>
    </>
  )
}

export default App
