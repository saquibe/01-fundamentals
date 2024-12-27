import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const title = "Onyx Storm";
const author = "Rebecca Yarros";
const img = "images/book-1.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
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
