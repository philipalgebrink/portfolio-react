import React from 'react';
import Header from './components/header';
import AboutMe from './components/aboutme';
import GitHubRepos from './components/githubrepos';

function App() {
    return (
        <div className="App">
            <Header />
            <AboutMe />
            <GitHubRepos username="philipalgebrink" />
        </div>
    );
}

export default App;
