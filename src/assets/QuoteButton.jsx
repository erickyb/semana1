import React from 'react'


const QuoteButton = ({ newQuote, color }) => {
    return (
        <div>
            <button className='quotebox__button' onClick={newQuote} style={{ backgroundColor: color }}>
                <i className='bx bx-chevron-right'></i>
            </button>
        </div>
    )
}

export default QuoteButton
