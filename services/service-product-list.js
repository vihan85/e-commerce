import servicesLoop from '../helpers/services-helper';
import mockservicesLoop from '../helpers/mock-helper';
import handleDataProductList from '../model/product-list/handle-data';
import { publishRouter } from '~/routers';
import { mockRoutes } from '../routers';

/**
 * serviceProductList get product list
 * @param {Object} router get from useRouter().query
 * @returns {promise} with data has handled
 */
const serviceProductList = async (router, count) => {
    if (router.query.pid !== undefined) {
        const { pid, ...params } = router.query;
        const currentIndex = pid.length - 1;
        const paths = publishRouter.product_list;
        const mockPaths = {
            product: `${mockRoutes.product_list.product}:${pid[currentIndex]}`,
            price: `${mockRoutes.product_list.price}:${pid[currentIndex]}`,
            image: `${mockRoutes.product_list.image}:${pid[currentIndex]}`,
        };
        // add param refine into object router
        params.refine = `cgid=${pid[currentIndex]}`;
        params.count = count;
        /*
        Mock
        - servicesLoop(mockPaths, params,pid[currentIndex])
        UnMock
        - servicesLoop(paths, params)
        */

        const datas = Promise.all(servicesLoop(mockPaths, params)).then((res) => {
            //handle data
            if (res) {
                const [resProduct, resPrice, resImg] = res;
                if (resProduct.status === 200) {
                    const dataProduct = {
                        dataProduct: [],
                        dataPrice: [],
                        dataImg: [],
                        pro_total: resProduct.data.preview.body.total,
                    };
                    handleDataProductList(resProduct.data.preview.body, { key: 'p_name', value: 'product_name' }, dataProduct.dataProduct);
                    handleDataProductList(resPrice.data.preview.body, { key: 'p_price', value: 'price' }, dataProduct.dataPrice);
                    handleDataProductList(resImg.data.preview.body, { key: 'p_image', value: 'image' }, dataProduct.dataImg);
                    return dataProduct;
                }
            }
        });
        return datas;
    }
};
export default serviceProductList;
