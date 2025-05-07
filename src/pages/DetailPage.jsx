import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeDetails } from '../api/jikanApi';
import AnimeDetail from '../components/AnimeDetail';
import {  Spin } from 'antd';

const DetailPage = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getAnimeDetails(id);
        setAnime(data.data);
      } catch (error) {
        console.error('Error fetching anime details:', error);
      }
    };
    fetchDetails();
  }, [id]);

  if (!anime) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" tip="Loading anime details..." />
      </div>
    );
  }

  return (
    <div className="p-4">
      <AnimeDetail anime={anime} />
    </div>
  );
};

export default DetailPage;
