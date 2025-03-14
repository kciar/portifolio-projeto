
import styles from './Sobre.module.css'
import avatar from './images/avatar.jpg'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'
    
function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Raick Miranda</span> <br />
                    <strong>Estudante de Desenvolvimento de Sistemas</strong> </p>

                    <p>Oi, eu sou o Raick, estudante do 3º ano do Ensino Médio e do curso técnico em Desenvolvimento <br />de 
                        Sistemas no SESI Planalto, em Goiânia. Nascido em Aracaju e criado em Goiânia,
                        estudo no SESI desde 2022.</p>

                    
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" />
                </div>
            </div>

        </section>
    )
}

export default Sobre

