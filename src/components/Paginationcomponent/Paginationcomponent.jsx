import './index.css';

const Paginationcomponent = ({ itemsPerPage, currentPage, paginate, totalItems, totalPages }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      {totalPages > 1 && (
        <ul className="pagination">
          {currentPage > 1 && (
            <li className="page-item">
              <button
                onClick={() => paginate(currentPage - 1)}
                className="page-link"
              >
                Prev
              </button>
            </li>
          )}
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <button
                onClick={() => paginate(number)}
                className={`page-link ${currentPage === number ? 'active' : ''}`}
              >
                {number}
              </button>
            </li>
          ))}
          {currentPage < totalPages && (
            <li className="page-item">
              <button
                onClick={() => paginate(currentPage + 1)}
                className="page-link"
              >
                Next
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Paginationcomponent;
