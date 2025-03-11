import type { NextApiRequest, NextApiResponse } from 'next';

const TMDB_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTY2OWQ4ZTVlNWY4YmFhMWQyNDYxM2JjNjFmNDE3MSIsInN1YiI6IjY1ZWU1ZjE4YzE1YjU1MDE3YmVhODc4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qqXP2VmRrVYVIW9JFh1TBtZQJqHj_sLSBQEGXAHVFtY';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const fiveYearsAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 5)).toISOString().split('T')[0];
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?with_original_language=tr&sort_by=popularity.desc&first_air_date_gte=${fiveYearsAgo}&page=1`,
      {
        headers: {
          'Authorization': `Bearer ${TMDB_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching from TMDB:', error);
    res.status(500).json({ message: 'Failed to fetch data from TMDB' });
  }
}
