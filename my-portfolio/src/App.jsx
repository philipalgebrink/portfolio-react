import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import AboutMe from './components/aboutme';
import GitHubRepos from './components/githubrepos';
import GameShowcase from './components/gameshowcase';
import Contact from './components/contactme';
import Footer from './components/footer';

function App() {
    // Pass the github username this way for it to work with routing
    const githubUsername = 'philipalgebrink';

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/github" element={<GitHubRepos username={githubUsername} />} />
                    <Route path="/games" element={<GameShowcase
                        title="Don't worry child"
                        description="A game I made during my gamemaker course."
                        imageUrl="https://img.itch.zone/aW1nLzkyNTkzMzIucG5n/347x500/iOeSTy.png"
                        gameLink="https://cyranolua.itch.io/dont-worry-child" />}
                    />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
