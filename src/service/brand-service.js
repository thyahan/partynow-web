import {baseUrl} from './config';
import * as baseService from './base-service';

const url = `${baseUrl}/brands/`

export const find = () => {
  return baseService.find(url);
}

export const findById = id => {
  return baseService.findById(url, id);
}

export const create = data => {
  return baseService.create(url, data);
}

export const patch = (id, data) => {
  return baseService.patch(url, id, data);
}