import './App.css';
import React, { useEffect, useState } from 'react';
import { quotes } from './quotes-data';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  function getQuote() {
    const max = quotes.length - 1;
    const min = 0;
    const randomId = Math.floor(Math.random() * (max-min+1) + min);
    
    setQuote(quotes[randomId]);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div id="quote-machine" className= "text-center">
      <h1 id="title" className="text-dark">Random Quote Machine</h1>
      <div id="quote-box" className="container-fluid">
        <div id="quote-display">
          <h2 id="text">{quote.quote}</h2>
          <h3 id="author"><i>- {quote.author}</i></h3>
        </div>
        
        <button 
          id="new-quote"
          className='btn btn-success'
          onClick={getQuote} 
        >New Quote</button>
        <br />
        <a 
          href="twitter.com/intent/tweet" 
          id="tweet-quote"
          target="_blank"
        >Tweet This Quote</a>
      </div>
    </div>
  );
};

export default App;
