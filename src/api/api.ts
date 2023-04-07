export const getAnimes = async () => {
  const data = await fetch('https://api.jikan.moe/v4/top/anime')
    .then((res) => res.json())
    .then((res) => console.log(res.data));
  return data;
};
export const getAnime = async (searchText: string) => {
  const data = await fetch(`https://api.jikan.moe/v4/anime?letter=${searchText}`)
    .then((res) => res.json())
    .then((res) => res.data);
  return data;
};
