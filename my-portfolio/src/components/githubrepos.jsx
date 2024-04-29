import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './githubrepos.css';

// Repo additional descriptions
const repoDescriptions = {
    'grupp-1-react': 'A website designed for mobile device that handles your creditcards. (School project)',
    'Philip_FE23_flexboxMania': 'A website showcasing my flexbox skills (School project)',
    'Philip_FE23_individuell-examination': 'A website showcasing I know how to use grid and flexbox. (School project)',
    'Solaris-individuell-examination': 'A website showcasing I know how to use javascript and API to fetch information of our solarsystem. (School project)'
};

const GitHubRepos = ({ username }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}/repos`);
                setRepos(response.data);
            } catch (error) {
                console.error('Error fetching GitHub repositories:', error);
            }
        };

        fetchRepos();
    }, [username]);

    return (
        <div className='repo-container'>
            <h2>My GitHub Repositories</h2>
            <ul className="repo-list">
                {repos.map(repo => (
                    <li key={repo.id} className="repo-item">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-name">{repo.name}</a>
                        {repoDescriptions[repo.name] && (
                            <p className="repo-description">{repoDescriptions[repo.name]}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHubRepos;
