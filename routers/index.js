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
    product_detail: {
        product: 'api/mock/variants/productDetail:25695436M',
        price: 'api/mock/variants/productDetailPrice:25695436M',
        image: 'api/mock/variants/productDetailImage:25695436M',
        variant: 'api/mock/variants/productDetailVariant:25695436M',
    },
};
export { publishRouter, mockRoutes };
