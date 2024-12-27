import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    title: "Onyx Storm",
    author: "Rebecca Yarros",
    img: "images/book-1.jpg",
    id: 1,
  },
  {
    title: "The Let Them Theory",
    author: " Mel Robbins",
    img: "https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { title, author, img, id } = book;
        return <Book img={img} title={title} author={author} key={id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { title, author, img, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <BookList />
  </div>
);
