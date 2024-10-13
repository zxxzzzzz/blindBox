export function getRandomList() {
  const randomListStr = window.localStorage.getItem('randomList');
  let randomList: number[] = randomListStr ? JSON.parse(randomListStr).slice(0, 10) : [];
  if (!randomList?.length) {
    randomList = new Array(10).fill(0).map(() => Math.round(Math.random() * 1000));
    window.localStorage.setItem('randomList', JSON.stringify(randomList));
  }
  return randomList;
}

export function delay(n: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n);
    }, n);
  });
}
