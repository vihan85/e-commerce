// router use while logout
const publishRouter = {
    product_list: {
        product: 'productList/represented_products',
        price: 'productList/prices',
        image: 'productList/images',
    },
    catelory: 'categories',
    refinements: 'productList',
    sort: `productList/represented_products`,
    product_detail: {
        product: 'productDetail',
        price: 'productDetail/prices',
        image: 'productDetail/images',
        variant: 'productDetail/variations',
    },
};
const mockRoutes = {
    product_list: {
        product: 'api/productList/:womens',
        price: 'api/prices/:womens',
        image: 'api/images/:womens',
    },
    catelory: 'api/categories',
    refinements: 'api/productList/:womens',
    sort: `api/represented`,
};
export { publishRouter, mockRoutes };
