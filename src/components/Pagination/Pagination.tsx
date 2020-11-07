import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  list-style-type: none;
  margin: 40px 0 0 0;

  li {
    display: inline-block;
    margin: 0 5px;
    border: 1px solid #f1f1f1;
    background-color: #f1f1f1;
    padding: 3px 10px;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }

    &.active {
      background-color: #eb4034 !important;

      a {
        color: #fff;
      }
    }
  }
`;

const Pagination: React.FC<PaginationProps> = ({
  issuesPerPage,
  totalIssues,
  paginate,
  currentPage,
}: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalIssues / issuesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <PaginationWrapper>
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? 'active' : ''}`}
            onClick={() => paginate(number)}
          >
            <span className='page-link'>{number}</span>
          </li>
        ))}
      </PaginationWrapper>
    </nav>
  );
};

export default Pagination;
