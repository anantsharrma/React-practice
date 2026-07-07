import React from 'react'
import { Star, BookOpen } from "lucide-react";
const Card = (
  { book }
) => {
  return (
          <div className="card">
            <div className='image'>
              {/* Left Side */}
              <img
                className="cover"
                src={book.cover}
                alt={book.title}
              />
            </div>
            {/* Right Side */}
            <div className="content">
    
              <div className="top">
                <h2 className="title">{book.title}</h2>
                <span className="author">{book.author}</span>
              </div>
    
              <div className="summary">
                <p>
                  {book.summary}
                </p>
              </div>
    
              <div className="bottom">
                <button>
                  Rating <Star size={16}/>
                </button>
    
                <button>
                  Mark as read <BookOpen size={16}/>
                </button>
              </div>
    
            </div>
    
          </div>
  )
}

export default Card