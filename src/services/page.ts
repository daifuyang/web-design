import { request } from 'src/utils/request';

// 获取页面列表
export async function getPageList(params = {}) {
  return await request('/api/admin/page', params);
}

// 获取页面详情
export async function getPage(id: number, params = {}) {
  return await request(`/api/admin/page/${id}`, params);
}

// 更新页面
export async function updatePage(id: number, data = {}) {
  return await request(`/api/admin/page/${id}`, {
    method: 'POST',
    data
  });
}