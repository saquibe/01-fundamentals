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
      >
        <p>
          lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
        </p>
        <button>click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
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
