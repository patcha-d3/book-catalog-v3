import "./App.css";

function Book({ image, price, link }) {
  return (
    <div className="card-book">
      <div className="card-book-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="img-placeholder">No image</div>
        )}
      </div>

      <div className="card-book-body">
        <div className="card-book-name">
          <h3>{title}</h3>
        </div>
        {author && <div className="card-book-authors">{author}</div>}
        {link && (
          <a
            className="link-button"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Learn more
          </a>
        )}
      </div>
    </div>
  );
}

export default Book;
