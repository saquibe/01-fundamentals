import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    title: "Onyx Storm",
    author: "Rebecca Yarros",
    img: "images/book-1.jpg",
  },
  {
    title: "The Let Them Theory",
    author: " Mel Robbins",
    img: "https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg",
  },
];

const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});

const BookList = () => {
  // return <section className="booklist">{newNames}</section>;
  return (
    <section className="booklist">
      {names.map((name) => {
        return <h1>{name}</h1>;
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
