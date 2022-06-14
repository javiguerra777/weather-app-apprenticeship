// eslint-disable-next-line import/prefer-default-export
export const convertUnix = (unix) => {
  const date = new Date(unix * 1000);
  return date.toLocaleDateString('en-US');
};
