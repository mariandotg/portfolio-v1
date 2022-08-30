const splitString = (string: string, splitter: string) => {
  const splittedArray = string.split(splitter);

  return splittedArray.reduce<{ text: string; id: number }[]>(
    (prev, curr, index) => [...prev, { text: curr, id: index + 1 }],
    []
  );
};

export default splitString;
