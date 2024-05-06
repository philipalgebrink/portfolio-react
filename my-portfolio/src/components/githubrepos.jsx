import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import './githubrepos.css';

// Repo additional descriptions

const repositoryMappings = {
    'grupp-1-react': {
        displayName: 'E-Wallet (School project)',
        description: 'A website designed for mobile device that handles your creditcards.',
        url: 'https://philipalgebrink-ewallet.netlify.app/',
    },
    'Philip_FE23_flexboxMania': {
        displayName: 'Flexbox Mania (School project)',
        description: 'A website showcasing my flexbox skills.',
    },
    'Philip_FE23_individuell-examination': {
        displayName: 'Flexbox and Grid Mania (School project)',
        description: 'A website showcasing I know how to use grid and flexbox.',
    },
    'Solaris-individuell-examination': {
        displayName: 'Our Solarsystem (School project)',
        description: 'A website showcasing I know how to use javascript and API to fetch information of our solarsystem.',
    },
    'grupp-8-flickr-api': {
        displayName: 'Flickr Image Search (School project)',
        description: 'A website showcasing I know how to use javascript, API and lightbox. In this case we used API from Flickr to fetch pictures on searching results.',
    },
}

const GitHubRepos = ({ username }) => {
    const repos = useSelector(state => state.repositories.repositories);

    return (
        <div className='repo'>
            <div className='repo-container'>
                <h2>My GitHub Repositories</h2>
                <ul className="repo-list">
                    {repos.map(repo => (
                        <li key={repo.id} className="repo-item">
                            <a href={repositoryMappings[repo.name]?.url || `https://${username}.github.io/${repo.name}`} target="_blank" rel="noopener noreferrer" className="repo-name">
                                {repositoryMappings[repo.name]?.displayName || repo.name}
                            </a>
                            {repositoryMappings[repo.name]?.description && (
                                <p className="repo-description">{repositoryMappings[repo.name]?.description}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GitHubRepos;
