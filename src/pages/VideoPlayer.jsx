import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import Navbar from '../components/Navbar';
import VideoCard from '../components/VideoCard';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        setLoading(true);
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
        
        const videoResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`
        );
        
        if (videoResponse.data.items && videoResponse.data.items.length > 0) {
          const video = videoResponse.data.items[0];
          setVideoData({
            title: video.snippet.title,
            channel: video.snippet.channelTitle,
            channelId: video.snippet.channelId,
            views: video.statistics.viewCount,
            likes: video.statistics.likeCount,
            description: video.snippet.description,
          });
        }

        const recommendedResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&relatedToVideoId=${videoId}&key=${apiKey}`
        );

        if (recommendedResponse.data.items) {
          const mappedRecommended = recommendedResponse.data.items.map((item) => ({
            id: item.id.videoId,
            image: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
            title: item.snippet.title,
            channel: item.snippet.channelTitle,
            channelImage: item.snippet.thumbnails.default?.url,
            views: 'N/A',
            timestamp: new Date(item.snippet.publishedAt).toLocaleDateString(),
          }));
          setRecommendedVideos(mappedRecommended);
        }
      } catch (err) {
        console.error('Error fetching video:', err);
        setError('Failed to load video');
      } finally {
        setLoading(false);
      }
    };

    if (videoId) {
      fetchVideoData();
    }
  }, [videoId]);

  if (loading) {
    return (
      <div className="video-player">
        <Navbar />
        <div className="loading-state">
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
          <p className="loading-text">Loading video...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="video-player">
        <Navbar />
        <div className="error-state">
          <span className="error-icon">😅</span>
          <h2>Failed to load video</h2>
          <p>{error}</p>
          <button className="retry-btn" onClick={() => navigate('/')}>
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="video-player">
      <Navbar />
      <div className="video-player-container">
        <motion.div
          className="video-main"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <div className="video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <motion.div 
            className="video-details-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="video-title-main">{videoData?.title || 'Video Title'}</h1>
            <div className="video-channel-info">
              <div className="channel-details">
                <img 
                  className="channel-avatar-large" 
                  src={`https://yt3.ggpht.com/ytc/AIdro_nO4k9-4k9-4k9-4k9-4k9=s68-c-k-c0x00ffffff-no-rj`} 
                  alt={videoData?.channel || 'Channel'} 
                />
                <div>
                  <h4>{videoData?.channel || 'Channel Name'}</h4>
                  <p>{videoData?.views ? `${Number(videoData.views).toLocaleString()} views` : 'N/A views'}</p>
                </div>
              </div>
              <motion.button 
                className="subscribe-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="video-recommendations"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="recommendations-title">Recommended</h3>
          {recommendedVideos.length > 0 ? (
            recommendedVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <VideoCard
                  id={video.id}
                  image={video.image}
                  title={video.title}
                  channel={video.channel}
                  views={video.views}
                  timestamp={video.timestamp}
                  channelImage={video.channelImage}
                />
              </motion.div>
            ))
          ) : (
            <p style={{ color: 'var(--text-secondary)' }}>No recommendations available</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default VideoPlayer;