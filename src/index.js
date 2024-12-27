import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  title: "Onyx Storm",
  author: "Rebecca Yarros",
  img: "images/book-1.jpg",
};

const secondBook = {
  title: "The Let Them Theory",
  author: " Mel Robbins",
  img: "https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <BookList />
  </div>
);
