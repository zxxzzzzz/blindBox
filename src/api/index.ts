import { getRandomList } from "@/util";

let isSending = false;
let dataList: any[] = [];

export function update(type: string, data: any) {
  const randomList = getRandomList();
  const timestamp = new Date().valueOf();
  const dateTime = new Date(timestamp).toLocaleString();
  const url = location.href;
  dataList.push({ data, uid: randomList.join(''), timestamp, dateTime, url, type });
  if (isSending) {
    return;
  }
  isSending = true;
  setTimeout(async () => {
    isSending = false;
    const _dataList = [...dataList];
    dataList = [];
    await fetch('/update', {
      method: 'post',
      body: JSON.stringify({ dataList: _dataList }),
      headers: {
        contentType: 'application/json',
      },
    });
  }, 3000);
}
