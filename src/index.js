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
      <EventExample />
      {books.map((book) => {
        // return <Book book={book} key={book.id} />;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExample = () => {
  const handleFormInput = (e) => {
    e.preventDefault();
    console.log("handle form input");
  };
  const handleButtonClick = (e) => {
    alert("handle button click");
  };
  return (
    <section>
      <form>
        <h2>typical form</h2>
        <input
          type="text"
          name="example"
          style={{ margin: "1rem 0" }}
          onChange={handleFormInput}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const Book = (props) => {
  const { title, author, img } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <BookList />
  </div>
);
