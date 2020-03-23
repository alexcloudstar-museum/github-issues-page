import axios from "axios";

const url = "https://api.github.com";
const githubToken = `21eaf5a2c1a78bf4f8cc15c567e4a6c525f6d930`;

export const fetchIssues = async () => {
  return await axios.get(
    `${url}/search/issues?q={facebook}&per_page=100&page_number=1`,
    {
      headers: {
        Authorization: `token ${githubToken}`
      }
    }
  );
};

export const getIssues = async () => {
  const issues = await fetchIssues();

  return await issues.data.items;
};

export const fetchIssueReadme = async urlIssue => {
  return await axios.get(`${urlIssue}/readme`);
};

export const renderIssueReadme = async urlReadme => {
  return await axios.get(urlReadme);
};

export const getComments = async urlComments => {
  return await axios.get(urlComments)
}