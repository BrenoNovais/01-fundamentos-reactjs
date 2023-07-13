import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'

export function Post(props) {
    console.log(props)
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={false} src="" alt="" />
                    <div className={styles.authorInfo}>
                        <strong></strong>
                        <span></span>
                    </div>
                </div>

                <time title="11 de maio às 08:13h" dateTime='2023-06-05'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>
                    <p></p>
                    <p></p>
                    <p> <a href=""></a></p>
                    <p> <a href="">#lol</a></p>
                    <p> <a href="">#js</a></p>
                    <p> <a href="">#peace</a></p>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Escreva um comentário'
                />

                <button type='submit'>Publicar</button>

            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}