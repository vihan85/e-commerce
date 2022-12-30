// import serviceProductList from '~/api-services/service-product-list';
// import servicesLoop from '../helpers/services-loop-helper';
// /**
//  * getDataProductList => get data produceList (product, price, image)
//  * API: /productList/represented_products?cgid=womens-clothing&refine_1=cgid=womens-clothing
//  * @param {Object} router => get from useRouter().query
//  * @return {promise} => contain data (product, price, image)
//  */
// function getDataProductList(router) {
//     if (router.router.query.pid !== undefined) {
//         const { pid, ...params } = router.router.query;
//         params.refine_1 = `cgid=${pid[1]}`;
//         const paths = {
//             product: 'productList/represented_products',
//             price: 'productList/prices',
//             image: 'productList/images',
//         };
//         const datas = servicesLoop(serviceProductList, paths, params).then((res) => {
//             console.log(res);
//         });

//         return datas;
//     }
// }
// export default getDataProductList;
