import React from 'react'
import QuoteButton from './QuoteButton'



const QuoteBox = ({ quote, newQuote, color, fonts }) => {
    // eliminar fonts
    return (
        <div className='quotebox' style={{ color: color, fontFamily: fonts }}>
            <p className='quotebox__quote' >{quote.quote}</p>
            <h3 className='quotebox__author' style={{ fontFamily: fonts }}>{quote.author}</h3>
            <i className='quotebox__icon bx bxs-quote-left'></i>
            <QuoteButton color={color} newQuote={newQuote} />
        </div>
    )
}

export default QuoteBox
