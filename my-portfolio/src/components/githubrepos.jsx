import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './githubrepos.css';

// Repo additional descriptions
const repositoryMappings = {
    'grupp-1-react': {
        displayName: 'E-Wallet (School project)',
        description: 'A website designed for mobile devices that handles your credit cards.',
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
        description: 'A website showcasing I know how to use JavaScript and API to fetch information about our solar system.',
    },
    'grupp-8-flickr-api': {
        displayName: 'Flickr Image Search (School project)',
        description: 'A website showcasing I know how to use JavaScript, API, and lightbox. In this case, we used API from Flickr to fetch pictures on search results.',
    },
};

const GitHubRepos = ({ username }) => {
    const repos = useSelector(state => state.repositories.repositories);

    return (
        <div className="repo">
            <div className="repo-container">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    My GitHub Repositories
                </motion.h2>
                <ul className="repo-list">
                    {repos.map((repo, index) => (
                        <motion.li
                            key={repo.id}
                            className="repo-item"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                        >
                            <a href={repositoryMappings[repo.name]?.url || `https://${username}.github.io/${repo.name}`} target="_blank" rel="noopener noreferrer" className="repo-name">
                                {repositoryMappings[repo.name]?.displayName || repo.name}
                            </a>
                            {repositoryMappings[repo.name]?.description && (
                                <p className="repo-description">{repositoryMappings[repo.name]?.description}</p>
                            )}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GitHubRepos;
