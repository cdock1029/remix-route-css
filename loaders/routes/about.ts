module.exports = () => {
  return new Promise((res) => {
    const data = Array(5)
      .fill("")
      .map((_, i) => ({ id: i, data: `Item ${i}` }));
    setTimeout(() => res(data), 1);
  });
};
