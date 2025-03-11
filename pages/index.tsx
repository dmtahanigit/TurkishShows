import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TVSeriesCard } from '@/components/TVSeriesCard';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Footer } from '@/components/Footer';
import { Series } from '@/types/series';

const TMDB_API_BASE_URL = 'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://api.themoviedb.org/3');
const TMDB_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTY2OWQ4ZTVlNWY4YmFhMWQyNDYxM2JjNjFmNDE3MSIsInN1YiI6IjY1ZWU1ZjE4YzE1YjU1MDE3YmVhODc4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qqXP2VmRrVYVIW9JFh1TBtZQJqHj_sLSBQEGXAHVFtY';

export default function Home() {
  const [turkishSeries, setTurkishSeries] = useState<Series[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTurkishSeries = async () => {
      try {
        const fiveYearsAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 5)).toISOString().split('T')[0];
        const url = `${TMDB_API_BASE_URL}/discover/tv?with_original_language=tr&sort_by=popularity.desc&first_air_date_gte=${fiveYearsAgo}&page=1`;
        
        console.log('Fetching from URL:', url); // Debug log
        
        let response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${TMDB_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          // Try fallback to direct API call if proxy fails
          console.log('Proxy failed, trying direct API call');
          const directUrl = `https://api.themoviedb.org/3/discover/tv?with_original_language=tr&sort_by=popularity.desc&first_air_date_gte=${fiveYearsAgo}&page=1`;
          response = await fetch(directUrl, {
            headers: {
              'Authorization': `Bearer ${TMDB_ACCESS_TOKEN}`,
              'Content-Type': 'application/json',
            },
          });
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        }
        
        const data = await response.json();
        console.log('API Response:', data); // Debug log

        const series = data.results.map((show: any) => ({
          id: show.id.toString(),
          title: show.name,
          rating: show.vote_average / 2, // TMDB uses a 10-point scale, we're using 5
          imageUrl: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
          summary: show.overview,
          streamingServices: [], // We don't have this information from TMDB
          releaseYear: new Date(show.first_air_date).getFullYear(),
        }));

        setTurkishSeries(series);
        setIsLoading(false);
      } catch (error: unknown) {
        console.error('Error fetching Turkish series:', error);
        if (error instanceof Error) {
          console.error('Error details:', {
            message: error.message,
            stack: error.stack
          });
        }
        setError('Failed to load Turkish series. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchTurkishSeries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Top Turkish Series</h1>
        {error && (
          <div className="text-red-500 text-center">
            {error}
          </div>
        )}
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner size={48} />
          </div>
        )}
        {!isLoading && !error && turkishSeries.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {turkishSeries.map((series) => (
              <TVSeriesCard key={series.id} {...series} />
            ))}
          </div>
        )}
        {!isLoading && !error && turkishSeries.length === 0 && (
          <div className="text-center text-gray-600">
            No Turkish series found. Please try again later.
          </div>
        )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
