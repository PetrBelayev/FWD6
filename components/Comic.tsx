import React from 'react';
import { Comic as ComicInterface } from '../interfaces';

const Comic: React.FC<ComicInterface> = ({ title, imageUrl, date }) => {
  return (
    <div id="comic-container">
      <h1 id="comic-title">{title}</h1>
      <img id="comic-image" src={imageUrl} alt={title} />
      <p id="comic-date">{date}</p>
    </div>
  );
};

export default Comic;
