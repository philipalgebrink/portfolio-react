import React from 'react';
import { motion } from 'framer-motion';
import './aboutme.css'; 

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="about-me-content">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About Me
                </motion.h2>
                <motion.div 
                    className="about-me-item"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <p className="about-me-description">
                        Hello, my name is Philip Älgebrink. I'm currently studying Front-End Developer.<br />
                        I have a burning interest for making something from nothing, which is why I chose this path.<br />
                        I've also studied 1 year of Gamemaker where I worked in Unity and C#.<br />
                        Right now I'm learning about React.js which is what I use for this portfolio!<br />
                        Test.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
