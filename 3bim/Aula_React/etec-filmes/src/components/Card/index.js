import styles from "./Card.module.css";

function Card(){
    return(
        <section className={styles.card}> 
            <a 
                href="https://www.youtube.com/watch?v=482tDopNzoc"
                rel="noreferrer noopener" 
                target='_blank'>
                <img src="/images/cardteste.jpg" alt="Capa" width='20%'/>
            </a>
        </section>

    );
}

export default Card;