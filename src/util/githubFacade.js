const url = 'https://api.github.com/repos/samchencode/v1';
let cache = null;

const xhr = async () => {
  const response = await fetch(url);
  const json = await response.json();
  cache = json;
  return json;
};

const accessStars = (data) => data.stargazers_count;
const accessForks = (data) => data.forks_count;

export default {
  async getStars() {
    if (cache) return accessStars(cache);
    const data = await xhr();
    return accessStars(data);
  },
  async getForks() {
    if (cache) return accessForks(cache);
    const data = await xhr();
    return accessForks(data);
  },
};
