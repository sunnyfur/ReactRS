export const getAnimes = async (controller: AbortController) => {
  try {
    const data = await fetch('https://api.jikan.moe/v4/top/anime', { signal: controller.signal })
      .then((res) => res.json())
      .then((res) => res.data);
    return data;
  } catch (err) {
    if ((<Error>err).name != 'AbortError') throw err;
  }
};
export const getAnime = async (searchText: string, controller: AbortController) => {
  try {
    const data = await fetch(`https://api.jikan.moe/v4/anime?letter=${searchText}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((res) => res.data);
    return data;
  } catch (err) {
    if ((<Error>err).name != 'AbortError') throw err;
  }
};

export const getFullAnime = async (id: number) => {
  try {
    const data = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((res) => res.json())
      .then((res) => res.data);
    return data;
  } catch (err) {
    if ((<Error>err).name != 'AbortError') throw err;
  }
};
