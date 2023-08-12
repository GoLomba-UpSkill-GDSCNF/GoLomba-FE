import { Link } from 'react-router-dom';
import './index.css';

const Paginationcomponent = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
      {pageNumbers.length > 1 && (
        <ul className="pagination">
          {currentPage > 1 && (
            <li className="page-item">
              <Link
                to={`/search/?page=${currentPage - 1}`}
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
              >
                Prev
              </Link>
            </li>
          )}
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <Link
                to={`/search/?page=${number}`}
                className={`page-link ${currentPage === number ? 'active' : ''}`}
                onClick={() => paginate(number)}
              >
                {number}
              </Link>
            </li>
          ))}
          {currentPage < pageNumbers.length && (
            <li className="page-item">
              <Link
                to={`/search/?page=${currentPage + 1}`}
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
              >
                Next
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
    );
  };

export default Paginationcomponent;