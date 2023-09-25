import styles from "./style";
import {
    Content,
    Business,
    CardDeal,
    Clients,
    CTA,
    Footer,
    Navbar,
    Testimonials,
    Stats,
    Hero,
} from "./components";

const App = () => {
    return (
        <div className="bg-main w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                <CTA />
                    <Navbar />
                </div>
            </div>
            <div className={`bg-main ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div
                className={`bg-main ${styles.flexStart} ${styles.paddingX}`}
            >
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Content />
                    <CardDeal />
                    <Testimonials />
                    <Clients />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
