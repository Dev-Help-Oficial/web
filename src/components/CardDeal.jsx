import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Aprenda programação com exercícios reais
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            📣 Fique por dentro dos exercícios e complete-os para aprender cada vez mais!
            </p>

            <Button text="Junte-se à nós" link="https://discord.gg/vNpPh6XTE9" styles={`mt-10`} background="blue-gradient" textcolor="black" />
        </div>

        
    </section>
);

export default CardDeal;
