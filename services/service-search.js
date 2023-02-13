import { httpRequest } from '~/until/http-request';
import handleDataSearch from '../model/handle-data-search';
import servicesLoop from '../helpers/services-helper';

import { publishRouter,mockRoutes } from '../routers';
function serviceSearch(q) {
    const paths = { product: publishRouter.product_list.product, images: publishRouter.product_list.image };
    const mockPaths = { // use when mock
        product: `${mockRoutes.product_list.product}:${'vest'}`,
        images: `${mockRoutes.product_list.image}:${'vest'}`,
    };
    const params = {
        count: '3',
        q,
    };
    const result = Promise.all(servicesLoop(mockPaths, params)).then((dataBase) => handleDataSearch(dataBase));
    return result;
}
export default serviceSearch;
