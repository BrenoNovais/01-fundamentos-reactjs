import { Header } from "./components/Header"
import './global.css'
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Breno Novais" content="NopS" />
          <Post author="Novais Breno" content="Spon" />
        </main>

      </div>

    </div>
  )
}