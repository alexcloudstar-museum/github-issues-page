import React, { FC, useState } from 'react';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { Issues, Pagination } from 'src/shared/components';
import Header from '../components/Header';
import { ContentWrapper } from '../style';

const Content: FC = (): JSX.Element => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [issuesPerPage] = useState<number>(10);

	const issues = useTypedSelector(({ issues }) =>
		issues.data?.map((issue) => issue)
	);

	// get current issues
	const indexOfLastIssue = currentPage * issuesPerPage;
	const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
	const currentIssues =
		issues && issues.slice(indexOfFirstIssue, indexOfLastIssue);

	// change page
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	return (
		<>
			<ContentWrapper>
				<Header />
				{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
				{/*  @ts-ignore*/}
				<Issues issues={currentIssues} />
			</ContentWrapper>
			<Pagination
				issuesPerPage={issuesPerPage}
				totalIssues={issues.length}
				paginate={paginate}
				currentPage={currentPage}
			/>
		</>
	);
};

export default Content;
