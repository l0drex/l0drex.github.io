import { Octokit } from "octokit";

const octokit = new Octokit();
const repos = await octokit.rest.repos.listForUser({username: 'l0drex'}).then(response => {
  return response.data.filter(r => !r.archived)
});

repos.forEach(r => {

})