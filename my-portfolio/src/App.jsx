import React from 'react';
import Header from './components/header';
import AboutMe from './components/aboutme';
import GitHubRepos from './components/githubrepos';
import Footer from './components/footer';

function App() {
    return (
        <div className="App">
            <Header />
            <AboutMe />
            <GitHubRepos username="philipalgebrink" />
            <Footer />
        </div>
    );
}

export default App;
