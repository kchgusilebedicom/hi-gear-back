import Typograf from 'typograf';
export const makePath = (article: number) => {
  let id = 1;
  return () => {
    return `images/articles${article}-img${id++}`;
  };
};

console.log(Typograf);
const tp = new Typograf({ locale: ['ru', 'en-US'] });

export const html = (template: Parameters<typeof String.raw>[0]) => {
  const string = `${template.raw}`;

  // console.log(string);
  const out = tp.execute(string);
  // console.log(out);
  return out;
};
