import React from 'react';
import Header from './components/header';
import AboutMe from './components/aboutme';
import GitHubRepos from './components/githubrepos';
import GameShowcase from './components/gameshowcase';
import Footer from './components/footer';

function App() {
    return (
        <div className="App">
            <Header />
            <AboutMe />
            <GitHubRepos username="philipalgebrink" />
            <GameShowcase
                title="Don't worry child"
                description="A game I made during my gamemaker course."
                imageUrl="https://img.itch.zone/aW1nLzkyNTkzMzIucG5n/347x500/iOeSTy.png"
                gameLink="https://cyranolua.itch.io/dont-worry-child"
            />
            <Footer />
        </div>
    );
}

export default App;
