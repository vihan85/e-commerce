import { httpRequest } from '../until/http-request';

/**
 *
 * @param {function} serviceProductList => loop services call API with another path
 * @param {Object} params => all parameters
 * @param {Object} paths => all routers
 * @returns {Promise} =>arrayPromise (path:product, path:price, path:image)
 *
 */
const servicesLoop = (paths, params) => {
    const arrPromise = [];
    for (let key in paths) {
        arrPromise.push(httpRequest.get(paths[key], { params }));
    }
    return arrPromise;
};
export default servicesLoop;
