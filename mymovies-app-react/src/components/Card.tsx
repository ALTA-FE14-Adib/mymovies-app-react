import React, { useState } from "react";

interface CardProps {
  id: string;
  imageSrc: string;
  showDescription?: boolean;
  overview?: string;
  showButton?: boolean;
  movieTitle?: string;
  releaseYear?: string;
  onNavigate?: () => void;
}

const Card: React.FC<CardProps> = ({
  id,
  imageSrc,
  showDescription,
  overview,
  showButton = true,
  movieTitle,
  releaseYear,
  onNavigate,
}) => {
  const MAX_CHARACTERS = 90;
  const MAX_TITLE_LENGTH = 14;

  const [truncatedOverview] = useState<string>(() => {
    if (overview && overview.length > MAX_CHARACTERS) {
      return `${overview.substring(0, MAX_CHARACTERS)}...`;
    }
    return overview || "";
  });

  const [truncatedTitle] = useState<string>(() => {
    if (movieTitle && movieTitle.length > MAX_TITLE_LENGTH) {
      return `${movieTitle.substring(0, MAX_TITLE_LENGTH)}...`;
    }
    return movieTitle || "";
  });

  const handleDetailClick = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl m-4" id={id}>
      <figure>
        <img src={imageSrc} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{truncatedTitle}</h2>
        <p className="text-xs">Release : {releaseYear || "Unknown"}</p>
        {showDescription && <p className="text-xs w-36">{truncatedOverview}</p>}
        <div className="card-actions justify-end">
          {showButton && (
            <>
              <button className="btn btn-secondary w-20 sm:w-40 xl:w-16">
                Add to Favorite
              </button>
              <button
                className="btn btn-primary xl:w-14"
                onClick={handleDetailClick}
              >
                Detail
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
