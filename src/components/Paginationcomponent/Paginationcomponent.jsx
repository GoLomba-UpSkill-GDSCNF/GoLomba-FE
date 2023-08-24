import { Link, useLocation } from 'react-router-dom';
import './index.css';

const Paginationcomponent = ({ itemsPerPage, currentPage, paginate, totalItems }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const location = useLocation();

  return (
    <nav>
      {totalPages > 1 && (
        <ul className="pagination">
          {currentPage > 1 && (
            <li className="page-item">
              <Link
                to={{ pathname: location.pathname, search: `?page=${currentPage - 1}` }}
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
                to={{ pathname: location.pathname, search: `?page=${number}` }}
                className={`page-link ${currentPage === number ? 'active' : ''}`}
                onClick={() => paginate(number)}
              >
                {number}
              </Link>
            </li>
          ))}
          {currentPage < totalPages && (
            <li className="page-item">
              <Link
                to={{ pathname: location.pathname, search: `?page=${currentPage + 1}` }}
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
