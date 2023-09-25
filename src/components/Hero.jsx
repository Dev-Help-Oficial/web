import styles from "../style";

const Hero = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
        >
            <div
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            >


                

                <div className="flex flex-row justify-between items-center w-full p-3">
                    <h1 className="flex-1 font-Poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        DevHelp <br className="sm:block hidden" />{" "}
                        
                    </h1>
                    
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        
                    </div>
                </div>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Encontre ajuda sobre qualquer tópico sobre programação!
                </p>
            </div>

            <div
                className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
            >
                

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>
        </section>
    );
};

export default Hero;
