export default function BookCard({ src, bookName, author }) {
  return (
    <div className="card-item">
      <img src={src} alt="Unbroken" width="200" height="200" />
      <div className="section">
        <span className="title">Book Name:</span>
        <span className="value">{bookName}</span>
      </div>
      <div className="section">
        <span className="title">Author:</span>
        <span className="value">{author}</span>
      </div>
    </div>
  );
}
