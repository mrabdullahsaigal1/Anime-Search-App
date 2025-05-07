import React, { useState, useEffect } from 'react';
import { Input, Pagination, Card } from 'antd';
import { searchAnime } from '../api/jikanApi';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/reset.css';

const { Search } = Input;

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [animeList, setAnimeList] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) {
        fetchSearchedAnime();
      } else {
        fetchTopAnime();
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query, page]);

  const fetchTopAnime = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);
      const data = await res.json();
      setAnimeList(data.data);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching top anime:', error);
    }
  };

  const fetchSearchedAnime = async () => {
    try {
      const data = await searchAnime(query, page);
      setAnimeList(data.data);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching searched anime:', error);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setPage(1); 
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div style={{ padding: '24px', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '24px', fontWeight: 'bold'}}>Anime Search</h1>
      <Search
        placeholder="Search anime..."
        enterButton="Search"
        size="large"
        value={query}
        onChange={handleInputChange}
        style={{ marginBottom: '24px', maxWidth: '500px', margin: '0 auto', display: 'block' }}/>

      <h2 style={{ margin: '24px 0 16px', fontSize: '1.5rem', fontWeight: 'bold' }}>
        {query.trim() ? 'Search Results' : 'Top Anime'}
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(225px, 1fr))',
          gap: '16px',
        }}>
        {animeList.map((anime) => (
          <Card
            key={anime.mal_id}
            hoverable
            cover={
              <img
                alt={anime.title}
                src={anime.images?.jpg?.image_url}
                style={{ height: '300px', objectFit: 'cover' }}
              />
            }
            onClick={() => navigate(`/anime/${anime.mal_id}`)}
          >
            <Card.Meta title={anime.title} />
          </Card>
        ))}
      </div>

      {pagination?.items && (
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Pagination
            current={page}
            total={pagination.items.total}
            pageSize={pagination.items.per_page}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
