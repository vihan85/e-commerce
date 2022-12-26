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
                        c_headerbanner: element.c_slotBannerImage,
                        c_parent_tree: element.parent_category_tree,
                    });
                } else {
                    categories.push({
                        c_id: element.id,
                        c_name: element.name,
                        c_headerbanner: element.c_slotBannerImage,
                        c_parent_tree: element.parent_category_tree,
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
    if (routerId.pid !== undefined) {
        const currentId = routerId.pid[routerId.pid.length-1];

        const rePrice = 'refine-price';
        const query = {
            color: routerId.refine,
            price: routerId[rePrice],
        };

        const handleCallApi = (refine_1, refine_2, refine_3) => {
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
            const resProduct = services.products('productList/represented_products', '12', refine_1, refine_2, refine_3);
            const resPrice = services.products('productList/prices', '12', refine_1, refine_2, refine_3);
            const resImg = services.products('productList/images', '12', refine_1, refine_2, refine_3);
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
        };

        if (routerId.refine && routerId[rePrice]) {
            return handleCallApi(`cgid=${currentId}`, `c_refinementColor=${query.color}`, `price=${query.price}`);
        } else if (routerId.refine) {
            return handleCallApi(`cgid=${currentId}`, `c_refinementColor=${query.color}`);
        } else if (routerId[rePrice]) {
            return handleCallApi(`cgid=${currentId}`, `price=${query.price}`);
        } else {
            return handleCallApi(`cgid=${currentId}`);
        }
    }
};
export const getRefinements = async (routerId) => {
    const currentId = routerId[routerId.length-1];
    const handleDataRefinements = (data, refinement) => {
        const refinements = [];
        if (data[refinement]) {
            data[refinement].forEach((element) => {
                if (element.values) {
                    refinements.push({
                        re_id: element.attribute_id ? element.attribute_id : element.value,
                        re_label: element.label,
                        re_values: handleDataRefinements(element, 'values'),
                        re_count: element.hit_count,
                    });
                } else {
                    refinements.push({
                        re_label: element.label,
                        re_value: element.value,
                        re_count: element.hit_count,
                        re_id: element.value,
                    });
                }
            });
        }
        return refinements;
    };

    const result = services
        .products('productList', '12', `cgid=${currentId}`)
        .then((resRefine) => handleDataRefinements(resRefine.data, 'refinements'));
    return result;
};
