import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './gameshowcase.css';

const GameShowcase = ({ title, description, imageUrl, gameLink }) => {
    const [showImageModal, setShowImageModal] = useState(false);

    const handleImageClick = () => {
        setShowImageModal(true);
    };

    const handleCloseImageModal = () => {
        setShowImageModal(false);
    };

    const handleTitleClick = () => {
        window.open(gameLink, '_blank');
    };

    return (
        <div className='game'>
            <div className='game-container'>
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    My Games
                </motion.h2>
                <motion.div 
                    className="game-item"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="game-content">
                        <h2 className="game-title" onClick={handleTitleClick}>{title}</h2>
                        <p className="game-description">{description}<br /> Press image for a bigger picture.</p>
                    </div>
                    <div className="game-image-container" onClick={handleImageClick}>
                        <img src={imageUrl} alt={title} className="game-image" />
                    </div>
                </motion.div>
            </div>
            {showImageModal && (
                <div className="image-modal" onClick={handleCloseImageModal}>
                    <img src={imageUrl} alt="Large Game Image" />
                </div>
            )}
        </div>
    );
};

export default GameShowcase;
