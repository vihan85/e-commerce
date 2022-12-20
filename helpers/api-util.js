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
export const getFeatureProductshow = async (routerId) => {
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

    const resProduct = services.products('productList', '12', `cgid=${routerId}`);
    const resPrice = services.products('productList/prices', '12', `cgid=${routerId}`);
    const resImg = services.products('productList/images', '12', `cgid=${routerId}`);

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
export const getRefinements = async (routerId) => {
    const handleDataRefinements = (data, refinement) => {
        const refinements = [];
        if (data[refinement]) {
            data[refinement].forEach((element) => {
                if (element.values && element.attribute_id === 'cgid') {
                    refinements.push({
                        re_id: element.attribute_id,
                        re_label: element.label,
                        re_values: handleDataRefinements(element, 'values'),
                    });
                } else if (element.values && element.attribute_id === 'c_refinementColor') {
                    refinements.push({
                        re_id: element.attribute_id,
                        re_label: element.label,
                        re_values: handleDataRefinements(element, 'values'),
                    });
                } else {
                    refinements.push({
                        re_idpresentation: element.presentation_id,
                        re_label: element.label,
                        re_value: element.value,
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
