import handleDataProductVariations from '~/model/product-variations/handle-product-variations';
import { publishRouter } from '~/routers';
import servicesLoop from '../helpers/services-helper';

function serviceVariations(router) {
    console.log(router);
    const [link, id] = router.query.provariations.split('&');
    const paths = publishRouter.product_detail;
    const params = { all_images: false, pid: id || nul };
    const datas = Promise.all(servicesLoop(paths, params)).then((database) => handleDataProductVariations(database));
    return datas;
}
export default serviceVariations;
