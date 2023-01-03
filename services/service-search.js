import { httpRequest } from '~/until/http-request';
import handleDataProductList from '../model/product-list/handle-data';
import servicesLoop from '../helpers/services-helper';

import { publishRouter } from '../routers';
function serviceSearch(q) {
    const paths = { product: publishRouter.product_list.product, images: publishRouter.product_list.image };
    const params = {
        count: '4',
        q,
    };
    const result = Promise.all(servicesLoop(paths, params)).then(res=> console.log(res));
    return result;
}
export default serviceSearch;
