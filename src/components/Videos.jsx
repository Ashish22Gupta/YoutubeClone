import React from 'react';
import { motion } from 'framer-motion';
import VideoCard from './VideoCard';
import './Videos.css';

const Videos = ({ videos }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div 
      className="videos-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {videos.map((video, index) => (
        <VideoCard
          key={video.id}
          index={index}
          id={video.id}
          image={video.image}
          title={video.title}
          channel={video.channel}
          views={video.views}
          timestamp={video.timestamp}
          channelImage={video.channelImage}
        />
      ))}
    </motion.div>
  );
};

export default Videos;