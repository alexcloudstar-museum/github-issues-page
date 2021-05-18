import React from 'react';
import { FC } from 'react';
import ReactMarkDown from 'react-markdown';
import { MarkdownWrapper } from './style';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

interface IMarkdown {
	body: string;
}

const Markdown: FC<IMarkdown> = ({ body }) => {
	const history = useHistory();

	const onClick = () => history.push('/');

	if (!body) history.push('/');

	return (
		<MarkdownWrapper>
			{!body ? (
				<>
					<h4>This repository have no body</h4>
					<Button variant="contained" onClick={onClick}>
						Go back
					</Button>
				</>
			) : (
				<>
					<h5 style={{ fontSize: '1.5rem' }}>MD of the repository:</h5>
					<Button variant="contained" onClick={onClick}>
						Go back
					</Button>
					<ReactMarkDown>{body}</ReactMarkDown>
				</>
			)}
		</MarkdownWrapper>
	);
};

export default Markdown;
