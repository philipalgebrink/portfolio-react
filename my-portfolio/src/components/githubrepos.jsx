import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './githubrepos.css';

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
        <div>
            <h2>My GitHub Repositories</h2>
            <ul className="repo-list">
                {repos.map(repo => (
                    <li key={repo.id} className="repo-item">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-name">{repo.name}</a>
                        <p className="repo-description">{repo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHubRepos;
