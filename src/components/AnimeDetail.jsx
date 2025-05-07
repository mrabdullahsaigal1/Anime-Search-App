import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import {
  StarFilled,
  TrophyFilled,
  FireFilled,
  TeamOutlined,
} from '@ant-design/icons';

const AnimeDetail = ({ anime }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        <Button
          onClick={handleBack}
          className="mb-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold" >
          ← Back
        </Button>

        <h1 className="text-4xl font-extrabold text-center text-indigo-700 dark:text-indigo-400 mb-10">
          {anime.title}
        </h1>

        <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
          <div className="flex-shrink-0">
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              className="w-[300px] rounded-2xl shadow-2xl object-cover"/>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-300">
              Synopsis
            </h2>
            <p className="leading-relaxed text-justify text-gray-700 dark:text-gray-300">
              {anime.synopsis || "No synopsis available."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 hover:scale-105 transition">
            <StarFilled className="text-3xl text-yellow-400 mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {anime.score ?? 'N/A'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {anime.scored_by?.toLocaleString()} users
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 hover:scale-105 transition">
            <TrophyFilled className="text-3xl text-pink-500 mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              #{anime.rank ?? 'N/A'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">Ranked</p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 hover:scale-105 transition">
            <FireFilled className="text-3xl text-red-500 mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              #{anime.popularity ?? 'N/A'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">Popularity</p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 hover:scale-105 transition">
            <TeamOutlined className="text-3xl text-teal-500 mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {anime.members?.toLocaleString() ?? 'N/A'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
