import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const AnimeCard = ({ anime }) => {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      cover={
        <img
          alt={anime.title}
          src={anime.images.jpg.image_url}
          style={{ height: '300px', objectFit: 'cover' }}
        />
      }
      onClick={() => navigate(`/anime/${anime.mal_id}`)}
    >
      <Card.Meta title={anime.title} />
    </Card>
  );
};

export default AnimeCard;
