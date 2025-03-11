import React from 'react';
import { TVSeriesCard } from '@/components/TVSeriesCard';
import { Footer } from '@/components/Footer';
import { Series } from '@/types/series';

const TMDB_API_KEY = 'be669d8e5e5f8baa1d24613bc61f4171';

export async function getStaticProps() {
  try {
    const fiveYearsAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 5)).toISOString().split('T')[0];
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&with_original_language=tr&sort_by=popularity.desc&first_air_date_gte=${fiveYearsAgo}&page=1`
    );

    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status}`);
    }

    const data = await response.json();
    const series = data.results.map((show: any) => ({
      id: show.id.toString(),
      title: show.name,
      rating: show.vote_average / 2,
      imageUrl: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
      summary: show.overview,
      streamingServices: [],
      releaseYear: new Date(show.first_air_date).getFullYear(),
    }));

    return {
      props: {
        turkishSeries: series,
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching Turkish series:', error);
    return {
      props: {
        turkishSeries: [],
      },
    };
  }
}

interface HomeProps {
  turkishSeries: Series[];
}

export default function Home({ turkishSeries }: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Top Turkish Series</h1>
          {turkishSeries.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {turkishSeries.map((series) => (
                <TVSeriesCard key={series.id} {...series} />
              ))}
            </div>
          ) : (
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
