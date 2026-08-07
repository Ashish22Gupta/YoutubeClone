import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './VideoCard.css';

const VideoCard = ({ image, title, channel, views, timestamp, channelImage, id, index }) => {
  return (
    <motion.div
      className="video-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.05,
        type: 'spring',
        stiffness: 200,
        damping: 20
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
    >
      <Link to={`/video/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="video-card-wrapper">
          <div className="video-thumbnail-container">
            <motion.img
              className="video-thumbnail"
              src={image}
              alt={title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="video-overlay"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <span className="play-icon">▶</span>
            </motion.div>
          </div>
          
          <div className="video-info">
            <motion.img 
              className="channel-avatar"
              src={channelImage}
              alt={channel}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
            <div className="video-details">
              <h4 className="video-title">{title}</h4>
              <p className="channel-name">{channel}</p>
              <div className="video-meta">
                <span>{views}</span>
                <span className="dot">•</span>
                <span>{timestamp}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default VideoCard;