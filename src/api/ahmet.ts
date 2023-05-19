export const getCake = async () => {
    return await fetch(import.meta.env.VITE_API_URL + "/cake").then(
      (res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      }
    );
  };
  export const getStartInSeconds = async () => {
    return await fetch(import.meta.env.VITE_API_URL + "/startInSeconds").then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    });
  };
