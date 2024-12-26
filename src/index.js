import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src="../images/book-1.jpg" alt="book" />;
const Title = () => <h2>Onyx Storm</h2>;
const Author = () => <h4>Rebecca Yarros</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <BookList />
  </div>
);
