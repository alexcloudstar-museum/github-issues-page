/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';

export const url = 'https://api.github.com';

export const githubToken = process.env.REACT_APP_GITHUB_API_TOKEN;

export const fetchIssues = async (
	keyword: string
): Promise<AxiosResponse<any>> => {
	return await axios.get(
		`${url}/search/issues?q={${keyword}}&per_page=100&page_number=1`,
		{
			headers: {
				Authorization: `token ${githubToken}`
			}
		}
	);
};

export const getIssues = async (keyword: string) => {
	const issues = await fetchIssues(keyword);

	return await issues.data.items;
};

export const getIssuePromise = async (
	id: number,
	keyword: string
): Promise<any> => {
	const issues = await getIssues(keyword);

	return issues.find((issue: any) => issue.id === id * 1);
};

export const fetchIssueReadme = async (urlIssue: string) => {
	return await axios.get(`${urlIssue}/readme`);
};

export const renderIssueReadme = async (urlReadme: string) => {
	return await axios.get(urlReadme);
};

export const getComments = async (urlComments: string) => {
	return await axios.get(urlComments);
};
