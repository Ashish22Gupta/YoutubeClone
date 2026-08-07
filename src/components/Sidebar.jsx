import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieIcon from '@mui/icons-material/Movie';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import './Sidebar.css';

const SidebarRow = ({ selected, Icon, title, onClick }) => {
  return (
    <motion.div
      className={`sidebar-row ${selected ? 'selected' : ''}`}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ 
        x: 10,
        background: 'rgba(255, 255, 255, 0.05)'
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <Icon className={`sidebar-icon ${selected ? 'selected-icon' : ''}`} />
      <span className="sidebar-title">{title}</span>
      {selected && (
        <motion.div 
          className="sidebar-indicator"
          layoutId="sidebar-indicator"
        />
      )}
    </motion.div>
  );
};

const Sidebar = ({ isOpen, setSearchQuery, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { Icon: HomeIcon, title: 'Home', path: '/', query: 'trending' },
    { Icon: WhatshotIcon, title: 'Trending', path: '/', query: 'trending' },
    { Icon: ExploreOutlinedIcon, title: 'Explore', path: '/', query: 'explore' },
    { Icon: SubscriptionsOutlinedIcon, title: 'Subscriptions', path: '/', query: 'subscriptions' },
    { Icon: VideoLibraryOutlinedIcon, title: 'Library', path: '/', query: 'library' },
    { Icon: HistoryOutlinedIcon, title: 'History', path: '/', query: 'history' },
    { Icon: MusicNoteIcon, title: 'Music', path: '/', query: 'music' },
    { Icon: MovieIcon, title: 'Movies', path: '/', query: 'movies' },
    { Icon: SportsEsportsIcon, title: 'Gaming', path: '/', query: 'gaming' },
  ];

  const handleNavigation = (item) => {
    if (setSearchQuery) {
      setSearchQuery(item.query);
    }
    navigate(item.path);
    if (onClose) {
      onClose();
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    if (setSearchQuery) setSearchQuery('trending');
    if (onClose) onClose();
  };

  const currentYear = new Date().getFullYear();

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.aside
          className="sidebar glass"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="sidebar-header">
            <motion.div 
              className="sidebar-logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            >
              <span>▶</span>
              <span>Tube</span>
            </motion.div>
          </div>
          
          <div className="sidebar-menu">
            {menuItems.map((item, index) => (
              <SidebarRow
                key={item.title}
                selected={item.query === 'trending' && location.pathname === '/'}
                Icon={item.Icon}
                title={item.title}
                onClick={() => handleNavigation(item)}
              />
            ))}
          </div>

          <motion.div 
            className="sidebar-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="sidebar-footer-line" />
            <p className="sidebar-footer-text">© {currentYear} Tube</p>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;