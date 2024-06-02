import React from 'react';

const QuoteBox = ({ quote, author, onNewQuote, onTweet, onLinkedInShare }) => {
  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card" style={{ borderRadius: '15px' }}>
              <div className="card-body p-5">

                <figure className="text-center mb-0">
                  <blockquote className="blockquote">
                    <p className="pb-3">
                      <i className="fas fa-quote-left fa-xs text-primary"></i>
                      <span className="lead font-italic">{quote}</span>
                      <i className="fas fa-quote-right fa-xs text-primary"></i>
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer mb-0">
                    {author}
                  </figcaption>
                </figure>

                <div className="text-center mt-4">
                  <button className="btn btn-primary mx-2" onClick={onNewQuote}>New Quote</button>
                  <button className="btn btn-info mx-2" onClick={onTweet}>Tweet Quote</button>
                  <button className="btn btn-secondary mx-2" onClick={onLinkedInShare}>Share on LinkedIn</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBox;
