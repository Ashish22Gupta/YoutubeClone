import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.css';

const Navbar = ({ setSearchQuery, toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchQuery(searchTerm);
      navigate('/');
      setSearchTerm('');
    }
  };

  return (
    <motion.nav
      className="navbar glass"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="navbar-left">
        <motion.button
          className="icon-btn"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </motion.button>
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.02 }}
          onClick={() => {
            setSearchQuery('trending');
            navigate('/');
          }}
        >
          <motion.span
            animate={{ 
              color: ['#ff0033', '#ff0066', '#ff0033'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ▶
          </motion.span>
          <span className="logo-text">Tube</span>
          <span className="logo-dot">.</span>
        </motion.div>
      </div>

      <div className={`navbar-center ${isSearchFocused ? 'focused' : ''}`}>
        <motion.form 
          onSubmit={handleSubmit}
          className="search-form"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="search-btn"
          >
            <SearchIcon />
          </motion.button>
        </motion.form>
      </div>

      <div className="navbar-right">
        {[
          { icon: VideoCallIcon, label: 'Create' },
          { icon: AppsIcon, label: 'Apps' },
          { icon: NotificationsIcon, label: 'Notifications' },
          { icon: AccountCircleIcon, label: 'Profile' },
        ].map((item, index) => (
          <motion.button
            key={index}
            className="icon-btn"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <item.icon />
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;