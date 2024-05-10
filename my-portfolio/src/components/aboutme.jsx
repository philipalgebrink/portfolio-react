import React from 'react';
import './aboutme.css'; // Import CSS file for styling

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="about-me-content">
                <h2>About Me</h2>
                <div className="about-me-item">
                    <h3 className="about-me-name">Philip Älgebrink</h3>
                    <p className="about-me-description">
                        Hello, my name is Philip Älgebrink. I'm currently studying Front-End Developer.<br />
                        I have a burning interest for making something from nothing, which is why I chose this path.<br />
                        I've also studied 1 year of Gamemaker where I worked in Unity and C#.<br />
                        Right now I'm learning about React.js which is what I use for this portfolio!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;