export const makePath = (article: number) => {
  let id = 1;
  return () => {
    return `images/articles${article}-img${id++}`;
  };
};
