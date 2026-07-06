import React from 'react'

const card = () => {
  return (
          <div className="card">
            <div className='image'>
              {/* Left Side */}
              <img
                className="cover"
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
                alt=""
              />
            </div>
            {/* Right Side */}
            <div className="content">
    
              <div className="top">
                <h2>Book Name</h2>
                <span>Author Name</span>
              </div>
    
              <div className="summary">
                <p>
                  This is a short summary of the book.
                  You can write two or three lines here.
                </p>
              </div>
    
              <div className="bottom">
                <button>
                  Rating <Star size={16}/>
                </button>
    
                <button>
                  Read <BookOpen size={16}/>
                </button>
              </div>
    
            </div>
    
          </div>
  )
}

export default card