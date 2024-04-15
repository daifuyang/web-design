import { request } from 'src/utils/request';

// 获取页面列表
export async function getPageList(params = {}) {
  return await request.get('/api/admin/page', {params});
}

// 获取页面详情
export async function getPage(id: string| number, params = {}) {
  return await request.get(`/api/admin/page/${id}`, {params});
}

// 新增空白页面
export async function addPage(data = {}) {
  return await request.post(`/api/admin/page/`,data);
}

// 更新页面
export async function updatePage(id: number | string, data = {}) {
  return await request.put(`/api/admin/page/${id}`, data);
}
