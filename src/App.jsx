import { useState } from 'react';
import './App.css';
import QuoteBox from './assets/QuoteBox';
import db from "./db/quotes.json";

const arrayColors = ["#00c6ab", "#c8ad8d", "#f86f6f", "#6aa3b4", "##6aa3b4", "#1e91ed", "#525558", "#0c181c", "#ff9a3e", "#5c5e36", "#1d3d33"];
// otra
const arrayfonts = [100, 900]

const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const randomIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[randomIndex];
};

function App() {
  const [quote, setQuote] = useState(getRandom(db));
  const [color, setColor] = useState(getRandom(arrayColors));
  // otra
  const [fonts, setFonts] = useState(getRandom(arrayfonts));


  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
    // otra
    setFonts(getRandom(arrayfonts))
  }


  return (
    <div className='App' style={{ backgroundColor: color, fontFamily: fonts }} >
      {/* <div style={{ fontFamily:fonts}}> */}

      <QuoteBox
        quote={quote}
        newQuote={newQuote}
        color={color}
      />
    </div>
    // </div>

  );
}

export default App;
