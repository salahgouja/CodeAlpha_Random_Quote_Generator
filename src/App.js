// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchNewQuote();
  }, []);

  const fetchNewQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const handleTweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      quote + " - " + author
    )}`;
    window.open(tweetUrl, "_blank");
  };
  //LinkedIn does not provide a built-in mechanism to prefill the share message like Twitter does with its Tweet Intent

  const handleLinkedInShare = () => {
    const quoteEncoded = encodeURIComponent(quote);
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      window.location.href
    )}&summary=${quoteEncoded}`;
    window.open(linkedInUrl, "_blank");
  };

  return (
    <div className="App">
      <QuoteBox
        quote={quote}
        author={author}
        onNewQuote={fetchNewQuote}
        onTweet={handleTweetQuote}
        onLinkedInShare={handleLinkedInShare}
      />
    </div>
  );
};

export default App;
