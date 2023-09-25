import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
    <section
        id="clients"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div
            className={`${styles.flexCenter} text-center w-full flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}
        >
            <h2 className={styles.heading2}>
            🔔 Testemunhos
            </h2>
            <div className="w-full md:mt-0 mt-6">
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                ✍️ Deixe seu testemunho em nosso servidor do Discord para que ele possa ser colocado aqui!
                </p>
            </div>
        </div>

        <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]`">
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
);

export default Testimonials;
