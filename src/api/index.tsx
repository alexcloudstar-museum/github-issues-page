import axios, { AxiosResponse } from 'axios';

export const url = 'https://api.github.com';

export const githubToken = process.env.REACT_APP_GITHUB_API_TOKEN;

export const fetchIssues = async (): Promise<AxiosResponse<any>> => {
  return await axios.get(
    `${url}/search/issues?q={facebook}&per_page=100&page_number=1`,
    {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    }
  );
};

export const getIssues = async () => {
  const issues = await fetchIssues();

  return await issues.data.items;
};

export const fetchIssueReadme = async (urlIssue: any) => {
  return await axios.get(`${urlIssue}/readme`);
};

export const renderIssueReadme = async (urlReadme: any) => {
  return await axios.get(urlReadme);
};

export const getComments = async (urlComments: any) => {
  return await axios.get(urlComments);
};
