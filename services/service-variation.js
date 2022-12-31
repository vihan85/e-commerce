import { httpRequest } from '~/until/http-request';
import handleDataProductVariations from '~/model/product-variations/handle-product-variations';
import { publishRouter } from '~/routers';

function serviceVariations(link) {
    const path = publishRouter.variations;
    const params = { refine: `cgid=${link}` };
    return httpRequest.get(path, { params }).then((database) => handleDataProductVariations(database.data));
}
export default serviceVariations;
