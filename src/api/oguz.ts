export const getUsedByMillions = async () => {
  return await fetch(import.meta.env.VITE_API_URL + "/usedTrusted").then(
    (res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    }
  );
};
export const getFooter = async () => {
  return await fetch(import.meta.env.VITE_API_URL + "/footer").then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  });
};
