import React from "react";
import BookCard from "../components/BookCard";
import { useParams } from "react-router-dom";

export default function Category({ books }) {
  const params = useParams();

  const filterBookData = books.filter(
    (a) => a.section.toLowerCase() === params.category.toLowerCase()
  );

  return (
    <>
      {filterBookData.length > 0 && (
        <div>
          <h2 className="category-title">{params.category}</h2>

          <div className="card-list">
            {filterBookData.map((book) => (
              <BookCard
                src={book.src}
                bookName={book.bookName}
                author={book.author}
              />
            ))}
          </div>
        </div>
      )}
      {filterBookData.length === 0 && (
        <div className="alert-text">DATA NOT FOUND</div>
      )}
    </>
  );
}
