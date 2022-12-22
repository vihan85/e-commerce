import * as services from '~/api-services/services';

export const getFeatureCatelory = async () => {
    const handleDataCatelory = (data, catelogy) => {
        const categories = [];
        if (data[catelogy]) {
            data[catelogy].forEach((element) => {
                if (element.categories) {
                    categories.push({
                        c_id: element.id,
                        c_name: element.name,
                        c_catelories: handleDataCatelory(element, 'categories'),
                    });
                } else {
                    categories.push({
                        c_id: element.id,
                        c_name: element.name,
                    });
                }
            });
        }
        return categories;
    };
    const result = services.catelogy('categories', '3').then((resCatelogy) => handleDataCatelory(resCatelogy.data, 'categories'));
    return result;
};
export const getFeatureProductshow = async (router) => {
    const routerId = router.router.query;
    const query = {
        color: routerId.refine,
    };
    const handleData = (baseData, type, mainData) => {
        if (Array.isArray(baseData.hits)) {
            baseData.hits.forEach((element) => {
                mainData.push({
                    p_id: element.product_id,
                    [type.key]: element[type.value],
                });
            });
        }
    };
    if (routerId.refine) {
        const resProduct = services.products(
            'productList/represented_products',
            '12',
            `cgid=${routerId.pid}`,
            `c_refinementColor=${query.color}`
        );
        const resPrice = services.products('productList/prices', '12', `cgid=${routerId.pid}`, `c_refinementColor=${query.color}`);
        const resImg = services.products('productList/images', '12', `cgid=${routerId.pid}`, `c_refinementColor=${query.color}`);
        return Promise.all([resProduct, resPrice, resImg]).then((res) => {
            if (res) {
                const [resProduct, resPrice, resImg] = res;
                const dataProduct = {
                    dataProduct: [],
                    dataPrice: [],
                    dataImg: [],
                };
                handleData(resProduct.data, { key: 'p_name', value: 'product_name' }, dataProduct.dataProduct);
                handleData(resPrice.data, { key: 'p_price', value: 'price' }, dataProduct.dataPrice);
                handleData(resImg.data, { key: 'p_image', value: 'image' }, dataProduct.dataImg);
                return dataProduct;
            }
        });
    } else {
        const resProduct = services.products('productList', '12', `cgid=${routerId.pid}`);
        const resPrice = services.products('productList/prices', '12', `cgid=${routerId.pid}`);
        const resImg = services.products('productList/images', '12', `cgid=${routerId.pid}`);
        return Promise.all([resProduct, resPrice, resImg]).then((res) => {
            if (res) {
                const [resProduct, resPrice, resImg] = res;
                const dataProduct = {
                    dataProduct: [],
                    dataPrice: [],
                    dataImg: [],
                };
                handleData(resProduct.data, { key: 'p_name', value: 'product_name' }, dataProduct.dataProduct);
                handleData(resPrice.data, { key: 'p_price', value: 'price' }, dataProduct.dataPrice);
                handleData(resImg.data, { key: 'p_image', value: 'image' }, dataProduct.dataImg);
                return dataProduct;
            }
        });
    }
};
export const getRefinements = async (routerId) => {
    const handleDataRefinements = (data, refinement) => {
        const refinements = [];
        if (data[refinement]) {
            data[refinement].forEach((element) => {
                if (element.values) {
                    refinements.push({
                        re_id: element.attribute_id ? element.attribute_id : element.value,
                        re_label: element.label,
                        re_values: handleDataRefinements(element, 'values'),
                    });
                } else {
                    refinements.push({
                        re_label: element.label,
                        re_value: element.value,
                        re_count: element.hit_count,
                    });
                }
            });
        }
        return refinements;
    };
    const result = services
        .products('productList', '12', `cgid=${routerId}`)
        .then((resRefine) => handleDataRefinements(resRefine.data, 'refinements'));
    return result;
};
