import { Link } from 'react-router-dom';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <Link
              to={`/?page=${number}`} // Ubah URL sesuai halaman yang dipilih
              className="page-link"
              onClick={() => paginate(number)}
            >
              {number}
            </Link>
          </li>
        ))}
        </ul>
      </nav>
    );
  };

export default Pagination;