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
const Title = () => {
  const title = "Onyx Storm";
  return (
    <>
      {/* <h2>Onyx Storm</h2>; */}
      <h2>{title}</h2>;
    </>
  );
};

const Author = () => {
  const author = "Rebecca Yarros";
  return (
    <>
      {/* <h4>Rebecca Yarros</h4>; */}
      <h4>{author}</h4>;{/* <p>{let x = 9}</p> */}
      <p>{7 + 7}</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <BookList />
  </div>
);
