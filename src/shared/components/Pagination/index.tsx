import React from 'react';
import { FC } from 'react';
import { PaginationWrapper } from './style';

interface PaginationProps {
	issuesPerPage: number;
	totalIssues: number;
	paginate: (pageNumber) => void;
	currentPage: number;
}

const Pagination: FC<PaginationProps> = ({
	issuesPerPage,
	totalIssues,
	paginate,
	currentPage
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalIssues / issuesPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<PaginationWrapper>
				{pageNumbers.map((number) => (
					<li
						key={number}
						className={`page-item ${currentPage === number ? 'active' : ''}`}
						onClick={() => paginate(number)}
					>
						<span className="page-link">{number}</span>
					</li>
				))}
			</PaginationWrapper>
		</nav>
	);
};

export default Pagination;
