import { request } from 'src/utils/request';
export async function currentUser() {
    return await request('/api/currentUser');
}