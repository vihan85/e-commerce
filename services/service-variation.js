import handleDataProductVariations from '~/model/product-variations/handle-product-variations';
import { publishRouter } from '~/routers';
import servicesLoop from '../helpers/services-helper';

function serviceVariations(router) {
    const [link, id] = router.query.provariations.split('&');
    const paths = publishRouter.product_detail;
    const params = { all_images: false, pid: id || nul };
    const datas = Promise.all(servicesLoop(paths, params)).then((database) => {
        if (database[0].status === 200) {
            return handleDataProductVariations(database, 'dt');
        }
    });
    return datas;
}
export default serviceVariations;
