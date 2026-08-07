import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Videos from '../components/Videos';
import { useFetch } from '../hooks/useFetch';
import './Home.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('trending');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('sidebar-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('sidebar-open');
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.classList.remove('sidebar-open');
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  const getApiUrl = (query) => {
    switch(query) {
      case 'trending':
        return 'videos?chart=mostPopular&regionCode=US';
      case 'explore':
        return 'search?part=snippet&q=popular&type=video';
      case 'subscriptions':
        return 'search?part=snippet&q=subscriptions&type=video';
      case 'library':
        return 'search?part=snippet&q=library&type=video';
      case 'history':
        return 'search?part=snippet&q=history&type=video';
      case 'music':
        return 'search?part=snippet&q=music&type=video';
      case 'movies':
        return 'search?part=snippet&q=movies&type=video';
      case 'gaming':
        return 'search?part=snippet&q=gaming&type=video';
      default:
        return searchQuery === 'trending' 
          ? 'videos?chart=mostPopular&regionCode=US' 
          : `search?part=snippet&q=${searchQuery}&type=video`;
    }
  };

  const url = getApiUrl(searchQuery);
  const { data: videos, loading, error } = useFetch(url);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="home">
      <Navbar setSearchQuery={setSearchQuery} toggleSidebar={toggleSidebar} />
      
      <div className="home-content">
        <Sidebar 
          isOpen={sidebarOpen} 
          setSearchQuery={setSearchQuery}
          onClose={closeSidebar}
        />
        
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              className="sidebar-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSidebar}
            />
          )}
        </AnimatePresence>

        <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
          {loading && (
            <motion.div 
              className="loading-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="loading-spinner">
                <div className="spinner"></div>
              </div>
              <p className="loading-text">Loading awesome videos...</p>
            </motion.div>
          )}
          
          {error && (
            <motion.div 
              className="error-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className="error-icon">😅</span>
              <h2>Oops! Something went wrong</h2>
              <p>{error}</p>
              <button 
                className="retry-btn"
                onClick={() => window.location.reload()}
              >
                Retry
              </button>
            </motion.div>
          )}
          
          {videos && <Videos videos={videos} />}
        </main>
      </div>
    </div>
  );
};

export default Home;