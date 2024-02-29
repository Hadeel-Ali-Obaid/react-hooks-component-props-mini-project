import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderMinutesToRead = () => {
    const coffeeCups = Math.ceil(minutes / 5);
    const bentoBoxes = Math.ceil(minutes / 10);
    const coffeeCupEmojis = [];
    const bentoBoxEmojis = [];

    if (minutes < 30) {
      for (let i = 0; i < coffeeCups; i++) {
        coffeeCupEmojis.push("☕️");
      }
      return (
        <span>
          {coffeeCupEmojis}
          {` ${minutes} min read`}
        </span>
      );
    } else {
      for (let i = 0; i < bentoBoxes; i++) {
        bentoBoxEmojis.push("🍱");
      }
      return (
        <span>
          {bentoBoxEmojis}
          {` ${minutes} min read`}
        </span>
      );
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} {renderMinutesToRead()}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;