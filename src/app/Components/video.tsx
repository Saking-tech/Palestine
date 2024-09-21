"use client"
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const LiberationVideo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Live Palestina",
      date: "2023-06-15",
      source: "Liberation News",
      url: "https://www.youtube.com/embed/VWfR9B1jZmw",
    },
    {
      id: 2,
      title: "Breaking Chains",
      date: "2023-06-10",
      source: "Freedom Channel",
      url: "https://www.youtube.com/embed/VWfR9B1jZmw"
    },
    {
      id: 3,
      title: "Voices of the Liberated",
      date: "2023-06-05",
      source: "People's Media",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "The Revolution Continues",
      date: "2023-05-30",
      source: "Liberation News",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 5,
      title: "Freedom's Call",
      date: "2023-05-25",
      source: "Freedom Channel",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 6,
      title: "Unshackled Dreams",
      date: "2023-05-20",
      source: "People's Media",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 7,
      title: "The Liberation Movement",
      date: "2023-05-15",
      source: "Liberation News",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 8,
      title: "Breaking Barriers",
      date: "2023-05-10",
      source: "Freedom Channel",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 9,
      title: "The People United",
      date: "2023-05-05",
      source: "People's Media",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - (showMore ? 9 : 3) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - (showMore ? 9 : 3) ? 0 : prevIndex + 1
    );
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
    setCurrentIndex(0);
  };

  const visibleVideos = showMore
    ? videos.slice(currentIndex, currentIndex + 9)
    : videos.slice(currentIndex, currentIndex + 3);

  return (
    <section className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-white mb-8">Liberation Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleVideos.map((video) => (
            <div key={video.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={video.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  title={video.title}
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                <p className="text-gray-400 mb-1">Date: {video.date}</p>
                <p className="text-gray-400">Source: {video.source}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Previous videos"
          >
            <FaChevronLeft className="mr-2" /> Previous
          </button>
          <button
            onClick={handleShowMore}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Next videos"
          >
            Next <FaChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiberationVideo;
