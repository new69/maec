import request from './request.service';

/**
 * Sets the Requests
 */
const api = new request();

/**
 * Create the lead
 *
 * @param {Object} data - the body post data
 * @param {Object} [query] - the queries params
 *
 * @return Promise
 */
const create = (data, query={}) => {
  return api.post('campaign/lead', data, query);
}

export const leadService = {
  create
}
