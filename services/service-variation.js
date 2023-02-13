import handleDataProductVariations from '~/model/product-variations/handle-product-variations';
import { publishRouter, mockRoutes } from '~/routers';
import servicesLoop from '../helpers/services-helper';

function serviceVariations(router) {
    const [link, id] = router.query.provariations.split('&');
    const paths = publishRouter.product_detail;
    const mockPaths = mockRoutes.product_detail;
    const params = { all_images: false, pid: id || nul };
    const datas = Promise.all(servicesLoop(mockPaths, params)).then((database) => {
        if (database[0].status === 200) {
            console.log(database);
            return handleDataProductVariations(database, 'dt');
        }
    });
    return datas;
}
export default serviceVariations;
