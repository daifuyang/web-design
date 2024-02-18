import { request } from 'src/utils/request';

export async function getPageList(params = {}) {
  return await request('/api/admin/page', params);
}

export async function getPage(id: number, params = {}) {
  return await request(`/api/admin/page/${id}`, params);
}
