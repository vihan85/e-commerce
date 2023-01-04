import servicesLoop from '../helpers/services-helper';
import handleDataProductList from '../model/product-list/handle-data';
import { publishRouter } from '~/routers';

/**
 * serviceProductList get product list
 * @param {Object} router get from useRouter().query
 * @returns {promise} with data has handled
 */
const serviceProductList = async (router, count) => {
    if (router.query.pid !== undefined) {
        const paths = publishRouter.product_list;
        const { pid, ...params } = router.query;
        const currentIndex = pid.length - 1;
        // add param refine into object router
        params.refine = `cgid=${pid[currentIndex]}`;
        params.count = count;
        //call API
        const datas = Promise.all(servicesLoop(paths, params)).then((res) => {
            //handle data
            if (res) {
                const [resProduct, resPrice, resImg] = res;
                console.log(res)
                if (resProduct.status === 200) {
                    const dataProduct = {
                        dataProduct: [],
                        dataPrice: [],
                        dataImg: [],
                        pro_total: resProduct.data.total,
                    };
                    handleDataProductList(resProduct.data, { key: 'p_name', value: 'product_name' }, dataProduct.dataProduct);
                    handleDataProductList(resPrice.data, { key: 'p_price', value: 'price' }, dataProduct.dataPrice);
                    handleDataProductList(resImg.data, { key: 'p_image', value: 'image' }, dataProduct.dataImg);
                    return dataProduct;
                }
            }
        });
        return datas;
    }
};
export default serviceProductList;
