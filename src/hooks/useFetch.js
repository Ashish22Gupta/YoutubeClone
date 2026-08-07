import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${BASE_URL}/${url}`, {
          params: {
            part: 'snippet',
            maxResults: 20,
            key: import.meta.env.VITE_YOUTUBE_API_KEY,
          }
        });
        const mappedData = response.data.items.map((item) => ({
          id: item.id.videoId || item.id,
          image: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
          channelImage: item.snippet.thumbnails.default?.url,
          views: 'N/A',
          timestamp: new Date(item.snippet.publishedAt).toLocaleDateString(),
        }));
        setData(mappedData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};