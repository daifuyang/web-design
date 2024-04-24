import { request } from 'src/utils/request';

// 保存配置
export async function saveConfig(key: string, value: any) {
  return await request.post(`/api/admin/config/${key}`, { value });
}
