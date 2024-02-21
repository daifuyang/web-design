export function getSearchParams(name: string) {
  const parsedUrl = new URL(window.location.href);
  const pararm = parsedUrl.searchParams.get(name);
  return pararm;
}

export function redirect(query: any) {
  const url = window.location.href;
  // 从URL中解析出参数
  let params = new URLSearchParams();
  var parts = url.split('?');
  if (parts.length > 1) {
    params = new URLSearchParams(parts[1]);
  }
  for (let key in query) {
    if (query.hasOwnProperty(key)) { // 确保遍历的是对象自身的属性
        params.set(`${key}`, query[key]);
    }
  }

  window.location.href = `${window.location.origin}?${params.toString()}`;
}
