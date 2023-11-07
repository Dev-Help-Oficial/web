import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
    <div
        className={`flex flex-row p-6 rounded-[20px] ${
            index !== features.length - 1 ? "mb-6" : "mb-0"
        } feature-card`}
    >
        <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        >
            <span className="text-xl">{icon}</span>
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-Poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-Poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);

const Business = () => (
    <section id="join" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Aprenda com desenvolvedores <strong>experientes</strong>!
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                O nosso servidor tem diversos desenvolvedores experientes sempre dispostos à ajudar novatos.
                Junte-se à nós agora mesmo e participe de eventos e desafios únicos para testar suas habilidades!
            </p>

            <Button text="Junte-se à nós" link="https://discord.gg/vNpPh6XTE9" styles={`mt-10`} background="blue-gradient" textcolor="black" />
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
        </div>
    </section>
);

export default Business;
