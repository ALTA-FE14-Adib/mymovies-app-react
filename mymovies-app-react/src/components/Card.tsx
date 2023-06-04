import { Component } from "react";

interface CardProps {
  id: string;
  imageSrc: string;
  showDescription?: boolean;
  overview: string;
  showButton?: boolean;
  movieTitle?: string;
  releaseYear?: string;
}

class Card extends Component<CardProps> {
  render() {
    const {
      id,
      imageSrc,
      showDescription,
      overview,
      showButton = true,
      movieTitle,
      releaseYear,
    } = this.props;

    const MAX_CHARACTERS = 150;

    const truncatedOverview =
      overview.length > MAX_CHARACTERS
        ? `${overview.substring(0, MAX_CHARACTERS)}...`
        : overview;
    return (
      <div className="card card-side bg-base-100 shadow-xl m-4" id={id}>
        <figure className="sm:w-96 xl:w-60">
          <img src={imageSrc} alt="Movie" className="w-40 sm:w-96 xl:w-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movieTitle}</h2>
          <p className="text-xs">Release : {releaseYear}</p>
          {showDescription && (
            <p className="text-xs w-36">{truncatedOverview}</p>
          )}
          <div className="card-actions justify-end">
            {showButton && (
              <>
                <button className="btn btn-primary w-20 sm:w-40 xl:w-20">
                  Add to Favorite
                </button>
                <button className="btn btn-primary">Detail</button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
