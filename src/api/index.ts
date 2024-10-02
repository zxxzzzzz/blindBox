let isSending = false;
const dataList: any[] = [];

export function update(type: string, data: any) {
  const randomListStr = window.localStorage.getItem('randomList');
  let randomList: number[] = randomListStr ? JSON.parse(randomListStr) : [];
  if (!randomList?.length || randomList?.length < 100) {
    randomList = [
      ...(randomList || []),
      ...new Array(100 - (randomList?.length || 0)).fill(0).map(() => Math.round(Math.random() * 1000)),
    ];
    window.localStorage.setItem('randomList', JSON.stringify(randomList));
  }
  const timestamp = new Date().valueOf();
  const dateTime = new Date(timestamp).toLocaleString();
  const url = location.href;
  if (isSending) {
    dataList.push({ data, uid: randomList.join(''), timestamp, dateTime, url, type });
    return;
  }
  isSending = true;
  setTimeout(() => {
    isSending = false;
    return fetch('/update', {
      method: 'post',
      body: JSON.stringify({ dataList }),
      headers: {
        contentType: 'application/json',
      },
    });
  }, 3000);
}
