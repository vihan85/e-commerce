import { httpRequest } from '~/until/http-request';
import handleDataSearch from '../model/handle-data-search';
import servicesLoop from '../helpers/services-helper';

import { publishRouter } from '../routers';
function serviceSearch(q) {
    const paths = { product: publishRouter.product_list.product, images: publishRouter.product_list.image };
    const params = {
        count: '3',
        q,
    };
    const result = Promise.all(servicesLoop(paths, params)).then((dataBase) => handleDataSearch(dataBase));
    return result;
}
export default serviceSearch;
