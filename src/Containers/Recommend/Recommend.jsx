import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './recommend.css';

const Recommend = () => {
  const [recommendation, setRecommendation] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRecommendation = async () => {
      try {
        const response = await axios.get('/apis/recommend/');
        setRecommendation(response.data.recommend);
        setIsLoading(false);
      } catch (error) {
        console.error("There was an issue retrieving the data:", error);
        setIsLoading(false);
      }
    };

    getRecommendation();
  }, []);

  return (
    <div className="recommendation-container">
      <h1>Recommended Psychiatrist</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{recommendation}</p>
      )}
    </div>
  );
};

export default Recommend;
