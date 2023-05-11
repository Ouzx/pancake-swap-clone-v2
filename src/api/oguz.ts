export const getUsedByMillions = async () => {
  return await fetch(import.meta.env.VITE_API_URL + "/usedTrusted").then(
    (res) => res.json()
  );
};
export const getFooter = async () => {
  console.log(import.meta.env.VITE_API_URL + "/footer");
  return await fetch(import.meta.env.VITE_API_URL + "/footer").then((res) =>
    res.json()
  );
};
