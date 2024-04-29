import React, { useState } from 'react';
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
                <h2>My Games</h2>
                <div className="game-item">
                    <div className="game-content">
                        <h2 className="game-title" onClick={handleTitleClick}>{title}</h2>
                        <p className="game-description">{description}<br /> Press image for bigger picture.</p>
                    </div>
                    <div className="game-image-container" onClick={handleImageClick}>
                        <img src={imageUrl} alt={title} className="game-image" />
                    </div>
                </div>
            </div>
            {showImageModal && (
                <div className="image-modal" onClick={handleCloseImageModal}>
                    <img src="https://img.itch.zone/aW1nLzkyNTkzMzIucG5n/original/cim7B%2B.png" alt="Large Game Image" />
                </div>
            )}
        </div>
    );
};

export default GameShowcase;