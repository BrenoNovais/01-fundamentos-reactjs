import styles from './Post.module.css'
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/55306453?v=4" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Breno Novais</strong>
                        <span>Full Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 08:13h" dateTime='2023-06-05'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>
                    <p>Esse é um texto gerado automaticamente, ou não!</p>
                    <p> <a href="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam autem nisi quis tenetur porro beatae, earum doloribus. Maiores blanditiis est, voluptatibus!</a></p>
                    <p> <a href="">#lol #js</a></p>
                </p>
            </div>
        </article>
    )
}