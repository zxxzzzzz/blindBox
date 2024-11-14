import { getRandomList } from "@/util";


export async function update(type: string, data: any) {
  const randomList = getRandomList();
  const timestamp = new Date().valueOf();
  const dateTime = new Date(timestamp).toLocaleString();
  const url = location.href;
  let error:Error|undefined = void 0
  for (const _index of [0,1,2]) {
    try {
      const res = await fetch('/update', {
        method: 'post',
        body: JSON.stringify({ dataList: [{ data, uid: randomList.join(''), timestamp, dateTime, url, type }] }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return res
    } catch (_error) {
      error = _error as Error
    }
  }
  throw error
}
