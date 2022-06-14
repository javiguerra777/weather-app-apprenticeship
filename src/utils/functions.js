const convertUnix = (unix) => {
  const date = new Date(unix * 1000);
  return date.toLocaleDateString('en-US');
};

export default convertUnix;
