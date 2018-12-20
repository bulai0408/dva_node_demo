import request from '../utils/request';

export function addUser() {
  return request('/addUser');
}
