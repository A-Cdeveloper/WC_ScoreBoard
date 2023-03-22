export const formatResult = (result) => {
  return `${result[0]} : ${result[1]}`;
};

export const sortGames = (games) => {
  return games.sort(
    (a, b) =>
      b.finalResult.reduce((x, y) => x + y, 0) -
      a.finalResult.reduce((x, y) => x + y, 0)
  );
};
