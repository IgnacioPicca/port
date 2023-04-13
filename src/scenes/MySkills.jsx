import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="about" className="pt-10 pb-24">
            {/* HEADER AND IMG SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                        className="md:w-1/3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {opacity:1, x:0}
                        }}
                >
                    <p className="font-playfair font-semibold text-4xl text-light mb-5">
                        ABOUT <span className="text-gold">ME</span>
                    </p>
                    <LineGradient width="w-1/3" />

                    <p className="mt-10 mb-7 text-xl text-light">Hello! My name is Ignacio and I enjoy creating and designing webs.</p>
                    <p className="text-xl text-light"> I'm motivated by the challenge of exploring innovative solutions for each project.</p>
                    
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div
                    className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-gold before:z-[-1]"
                    > 
                        <img
                            src="assets/skills-image.png"
                            alt="skill"
                            className="z-10"
                        />
                    </div>
                    ) : (
                            <div>
                                <img
                                    src="assets/skills-image.png"
                                    alt="skill"
                                    className="z-10"
                                />
                            </div>
                    )}
                </div>                   
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* WORK */}
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {opacity:1, y:0}
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-4xl py-10">
                                Working Now
                            </p>                            
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-color1 absolute right-0 top-0 z-[-1]"/>                     
                    </div>
                    <p className="mt-5 text-light">
                        I work within the Help Desk team in Divisón Informatica, giving assistance to users on the company's own systems and in my free time, i work on my own, in the implementation of systems for construction companies.
                    </p>
                </motion.div>
                
                {/* EDUCATION */}
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {opacity:1, y:0}
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-4xl py-10">
                                Education
                            </p>                            
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-color2 absolute right-0 top-0 z-[-1]"/>                     
                    </div>
                    <p className="mt-5 text-light">
                       I completed the Front-end Developer with React JS course at CoderHouse, certified by Ualá and PedidosYa. Currently, I'm studying the second year of the Systems Engineering degree and taking courses in ASP.NET Core web development at Education It.
                    </p>
                </motion.div>
                
                {/* ABOUT ME */}
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {opacity:1, y:0}
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-4xl py-10">
                                Who I Am
                            </p>                            
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-color3 absolute right-0 top-0 z-[-1]"/>                     
                    </div>
                    <p className="mt-5 text-light   ">
                       In my free time, I mainly enjoy listening to music. I am a techno music DJ. I love modern design and architecture. Amateurfotography and am also a very good tennis player.
                    </p>
               </motion.div>
            </div>

        </section>
    );
};

export default MySkills;