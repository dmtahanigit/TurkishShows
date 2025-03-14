import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Powered by</span>
            <a 
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="TMDB Logo"
                className="h-5"
              />
            </a>
          </div>
          <p className="text-xs text-gray-500 text-center">
            This product uses the TMDB API but is not endorsed or certified by TMDB
          </p>
        </div>
      </div>
    </footer>
  );
};
