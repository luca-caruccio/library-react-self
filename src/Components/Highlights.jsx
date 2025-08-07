import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from "./ui/Highlight";
  

const Highlights = () => {
  return (
    <section id='highlights'>
        <div className="container">
            <div className="row">
                <h2 className='section__title'>
                    Why Choose <span className='purple'>Library</span>
                </h2>
                <div className="highlight__wrapper">
                    <Highlight 
                        icon={<FontAwesomeIcon icon="bolt"/>} 
                        title="Easy & Quick" 
                        para="Get instant access to your online purchases!"
                        />
                    <Highlight 
                        icon={<FontAwesomeIcon icon="book-open"/>} 
                        title="12,000+ books Available Instantly" 
                        para="Books from all your favorite Categories Available"
                        />
                    <Highlight 
                        icon={<FontAwesomeIcon icon="tags"/>} 
                        title="Budget Friendly" 
                        para="Find Popular and Trending Titles for as little as $9.99!"
                        />
                    
                  
                </div>
            </div>
        </div>
    </section>
  );
};


export default Highlights;