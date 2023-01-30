export const dogsService = async (url: string) => {
  const response = await fetch(url);

  return response.ok ? response.json() : response;
};
