import styles from "../style";
import Button from "./Button";

const CTA = () => (
    <section
        className={`${styles.flexCenter} p-5 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] w-full box-shadow`}
    >
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>Entre na nossa comunidade!</h2>
            <p className={`${styles.paragraph} mt-5`}>
               Toda e qualquer coisa sobre programação!
            </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button />
        </div>
    </section>
);

export default CTA;
