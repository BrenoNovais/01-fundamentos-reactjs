import { Header } from "./components/Header"
import './global.css'
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/5530645?v=4',
      name: 'Breno Novais',
      role: 'Full Developer'
    },
    content: [
      { type: 'paragraph', content: 'Esse é um texto gerado automaticamente, ou não!' },
      { type: 'paragraph', content: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam autem nisi quis tenetur porro beatae, earum doloribus. Maiores blanditiis est, voluptatibus!' },
      { type: 'link', content: 'linkedin.com/in/breno-novais' }
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/553561?v=4',
      name: 'Novais Breno ',
      role: ' Developer Full'
    },
    content: [
      { type: 'paragraph', content: 'Esse é um texto gerado automaticamente, ou não!' },
      { type: 'paragraph', content: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam autem nisi quis tenetur porro beatae, earum doloribus. Maiores blanditiis est, voluptatibus!' },
      { type: 'link', content: 'linkedin.com/in/breno-novais' }
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  }
]

export function App() {
  return (
    <div>
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

    </div>
  )
}