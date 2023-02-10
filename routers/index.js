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
        product: 'api/mock/variants/represented_products',
        price: 'api/mock/variants/prices',
        image: 'api/mock/variants/images',
    },
    catelories: 'api/mock/variants',
    refinements: 'api/mock/variants/represented_products',
    sort: 'api/mock/variants/represented_products',
};
export { publishRouter, mockRoutes };
