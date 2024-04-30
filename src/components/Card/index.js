import styles from './Card.module.css'

function Card({ allRepos }){
    return (
        <div className={styles.container}>
            <h3>Key words - Palavras chave</h3>
            {allRepos.map((item) => (
                <p>{item['name']}</p>
            ))}
        </div>
    )
}


export default Card