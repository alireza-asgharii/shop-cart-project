const spliter = (value) => {
  const splited = value.split(" ");
  const newTitle = `${splited[0]} ${splited[1]}`;
  return newTitle;
};

export { spliter };
