import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons"

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            {/* Image Section */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div
                    className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-gold before:z-[-1]"
                    > 
                        <img
                            src="assets/profile-image.png"
                            alt="hero"
                            className=" z-10 w-full max-w-[400px] md:max-w-[600px]"
                        />
                    </div>
                ): (
                        <div>
                            <img
                            src="assets/profile-image.png"
                            alt="hero"
                            className=" z-10 w-full max-w-[400px] md:max-w-[600px]"
                        />
                        </div>   
                )}
            </div>


                {/* Main Section */}

                <div
                className="z-30 basics-2/5 mt-12 md:mt-32">
                    {/* Headings */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {opacity:1, x:0}
                        }}
                    >
                        <p className="text-6xl font-playfair z-10 text-center md:text-start"> Ignacio Picca</p>
                    
                        <p className="mt-10 mb-7 text-md text-center md:text-start text-light">
                        Front End developer from Argentina with a curious and creative mind.
                        </p>
                </motion.div>
                
                {/* CALL TO ACTIONS */}

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: {opacity:1, x:0}
                    }}
                >
                    <AnchorLink
                        className="bg-black text-deep-blue border-2 border-light-500/50 rounded-1xl py-3 px-7 font-semibold hover:text-light transition duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                       <p>Interested in working together?</p> 
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: {opacity:1, x:0}
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>


            </div>
        </section>
    )
    
}

export default Landing;