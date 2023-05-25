import { Component } from "react";

interface CardProps {
  imageSrc: string;
  showDescription?: boolean;
  showButton?: boolean;
}

export default class Card extends Component<CardProps> {
  render() {
    const { imageSrc, showDescription, showButton = true } = this.props;
    return (
      <div className="card card-side bg-base-100 shadow-xl m-4">
        <figure className="sm:w-96 xl:w-60">
          <img src={imageSrc} alt="Movie" className="w-40 sm:w-96 xl:w-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Spider-Man No Way Home</h2>
          <h6>movie</h6>
          <p>Release : 2021</p>
          {showDescription && <p>This is the movie description.</p>}
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
