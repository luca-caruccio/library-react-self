import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom";
import Rating from '../Components/ui/Rating';
import Price from '../Components/ui/Price';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Book from '../Components/ui/book';

const BookInfo = ({ books }) => {
    const { id } =  useParams();
    const book = books.find(book => +book.id === +id);
  return (
   <div id="books__body">
    <main id="books__main">
        <div className="books__container">
            <div className="row">
                <div className="book__selected--top">
                    <Link to="/books" className="book__link">
                    <FontAwesomeIcon icon="arrow-left" />
                    </Link>
                    <Link to="/books" className="book__link"><h2 className='book__selected--title--top'>Books</h2>
                    </Link>
                </div>
                <div className="book__selected">
                    <figure className="book__selected--figure">
                        <img src={book.url} />
                    </figure>
                    <div className="book__selected--description">
                       <h2 className="book__selected--title">{book.title}</h2>
                       <Rating rating={book.rating} />
                       <div className="book__selected--price">
                        <Price originalPrice={ book.originalPrice } salePrice={ book.salePrice }/>
                       </div>
                       <div className="book__summary">
                        <div className="book__summary--title">
                            Summary
                        </div>
                        <h3 className="book_summary--para">
                            Lorem ipsum dolor sit amet consectetur apisicing elit. 
                            Delectus omnis a, laudantium sed sit, neque rem maiores 
                            vero aspernatur cumque debitis quam vitae deleniti, eum 
                            labore. Neque veritatis ab cumque eum ratione esse, ex 
                            alias, eius excepturi, temporibus maxime autem.
                        </h3>
                        <h3 className="book_summary--para">
                            Lorem ipsum dolor sit amet consectetur apisicing elit. 
                            Delectus omnis a, laudantium sed sit, neque rem maiores 
                            vero aspernatur cumque debitis quam vitae deleniti, eum 
                            labore. Neque veritatis ab cumque eum ratione esse, ex 
                            alias, eius excepturi, temporibus maxime autem.
                        </h3>
                       </div>
                       <button className='btn'>
                        Add to Cart
                       </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="books__container">
            <div className="row">
                <div className="book__selected--top">
                    <h2 className="book__selected--title--top">
                        Recommended Books
                    </h2>
                </div>
                <div className="books">
                {
                    books.filter(book => book.rating === 5 && +book.id !== +id)
                    .slice(0,4)
                    .map(book => <Book book={book} key={book.id} />)
                }
                </div>
            </div>
        </div>
    </main>
   </div>
  )
}

export default BookInfo;