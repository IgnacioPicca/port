import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { FaJsSquare, FaReact, FaSass, FaGitAlt, FaJava } from 'react-icons/fa'
import { SiTailwindcss, SiBootstrap, SiFirebase, SiMui, SiMysql } from 'react-icons/si'
import SkillsIcon from '../components/SkillsIcon.jsx'

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2}
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1}
};

export const icons = [
    { label: 'HTML', icon: <IoLogoHtml5 size={50} className='w-8 md:w-auto'/> },
    { label: 'CSS', icon: <IoLogoCss3 size={50} className='w-8 md:w-auto'/> },
    { label: 'JavaScript', icon: <FaJsSquare size={50} className='w-8 md:w-auto'/> },
    { label: 'React', icon: <FaReact size={50} className='w-8 md:w-auto'/> },
    { label: 'MySQL', icon: <SiMysql size={50} className='w-8 md:w-auto' /> },
    { label: 'Java', icon: <FaJava size={50} className='w-8 md:w-auto'/> },
    { label: 'Firebase', icon: <SiFirebase size={50} className='w-8 md:w-auto'/> },
    { label: 'TailwindCSS', icon: <SiTailwindcss size={50} className='w-8 md:w-auto'/> },
    { label: 'Sass', icon: <FaSass size={50} className='w-8 md:w-auto'/> },
    { label: 'Bootstrap', icon: <SiBootstrap size={50} className='w-8 md:w-auto'/> },
    { label: 'MUI', icon: <SiMui size={50} className='w-8 md:w-auto'/> },
    { label: 'Git', icon: <FaGitAlt size={50} className='w-8 md:w-auto'/> },
]

const Project = ({ title, subtitle, link }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-gold z-30 flex flex-col justify-center items-center text-center p-16 text-blue text-bold text-xl`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
    return (
        <motion.div className="relative" variants={projectVariant}>
            <a href={link}>
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">
                    {title}
                </p>
                <p className="mt-7 text-light">
                    {subtitle}
                </p>
            </div>
                <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
            </a>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="pt-40 pb-40">
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl text-light">
                        MY <span className="text-gold">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5 mb-16">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                {/* <div className="mt-10 mb-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 justify-items-center py-12 px-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-md">
                    { icons.map(i => <SkillsIcon label={i.label} icon={i.icon} key={i.label} />) }
                </div> */}
           
            </motion.div>
            
            {/* PROJECTS */}

            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3 gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={container}
                >

                    {/* ROW 1 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 justify-items-center py-12 px-8 bg-white/10 backdrop-blur-sm shadow-md max-w-[400px]">
                        {/* <p>Focus on user experience to improve usability and accessibility </p>        */}
       
                    { icons.map(i => <SkillsIcon label={i.label} icon={i.icon} key={i.label} />) }

                </div>
                <Project title="Landing Podcast" subtitle="Landing page" link="https://bluedotpodcasts.netlify.app/" />
                <Project title="Tres4Veinte" subtitle="A music academic web" link="https://tres4veinte.netlify.app/" />
                    {/* ROW 2 */}
                <Project title="PiccApple" subtitle="Apple e-commerce" link="https://piccapple.vercel.app/" />
                <Project title="Memory Game" subtitle="Pokemon memory game" link="https://mentalchallenge.netlify.app/" />
                <Project title="Expreso Libre" subtitle="Software for package delivery" link="https://github.com/IgnacioPicca/Tp-Expreso-Libre" />

                </motion.div>
            </div>

        </section>
    );
};

export default Projects;