const API_URL = process.env.REACT_APP_API_URL;

export const fetchPuzzles = async () => {
  const response = await fetch(`${API_URL}/game/puzzles`, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  return response;
};
