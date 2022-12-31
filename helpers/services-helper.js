import { httpRequest } from '../until/http-request';

/**
 *
 * @param {function} serviceProductList => loop services call API with another path
 * @param {Object} params => all parameters
 * @returns {Promise} =>arrayPromise (path:product, path:price, path:image)
 *
 */
const servicesLoop = (object, params) => {
    const arrPromise = [];
    for (let key in object) {
        arrPromise.push(httpRequest.get(object[key], { params }));
    }
    return arrPromise;
};
export default servicesLoop;
