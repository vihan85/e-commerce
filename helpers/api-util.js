import * as services from '~/api-services/services';

export const getSort = async () => {
    const handleData = (data) => {
        const re_sorting_options = [];
        data.sorting_options.forEach((element) => {
            re_sorting_options.push({
                re_id: element.id,
                re_label: element.label,
            });
        });
        return re_sorting_options;
    };
    const result = services
        .sort(`productList/represented_products`, `sort=product-name-ascending`, `refine_1=cgid=womens`)
        .then((res) => handleData(res.data));
    return result;
};

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
export const getFeatureProductshow = async (router, count) => {
    const routerId = router.router.query;
    if (routerId.pid !== undefined) {
        const currentId = routerId.pid[routerId.pid.length - 1];

        const rePrice = 'refine-price';
        const query = {
            color: routerId.refine,
            price: routerId[rePrice],
            sort: routerId.sort,
        };

        const handleCallApi = (path, refine_1, refine_2, refine_3, sort) => {
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
            const resProduct = services.products(path.product, count, refine_1, sort, refine_2, refine_3);
            const resPrice = services.products(path.price, count, refine_1, sort, refine_2, refine_3);
            const resImg = services.products(path.image, count, refine_1, sort, refine_2, refine_3);
            return Promise.all([resProduct, resPrice, resImg]).then((res) => {
                if (res) {
                    const [resProduct, resPrice, resImg] = res;
                    const dataProduct = {
                        dataProduct: [],
                        pro_total: resProduct.data.total,
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
            return handleCallApi(
                {
                    product: 'productList/represented_products',
                    price: 'productList/prices',
                    image: 'productList/images',
                },
                `cgid=${currentId}`,
                `c_refinementColor=${query.color}`,
                `price=${query.price}`,
                query.sort
            );
        } else if (routerId.refine) {
            return handleCallApi(
                {
                    product: 'productList/represented_products',
                    price: 'productList/prices',
                    image: 'productList/images',
                },
                `cgid=${currentId}`,
                `c_refinementColor=${query.color}`,
                undefined,
                query.sort
            );
        } else if (routerId[rePrice]) {
            return handleCallApi(
                {
                    product: 'productList/represented_products',
                    price: 'productList/prices',
                    image: 'productList/images',
                },
                `cgid=${currentId}`,
                `price=${query.price}`,
                undefined,
                query.sort
            );
        } else if (routerId.sort) {
            return handleCallApi(
                {
                    product: 'productList/represented_products',
                    price: 'productList/prices',
                    image: 'productList/images',
                },
                `cgid=${currentId}`,
                undefined,
                undefined,
                query.sort
            );
        } else {
            return handleCallApi(
                {
                    product: 'productList/represented_products',
                    price: 'productList/prices',
                    image: 'productList/images',
                },
                `cgid=${currentId}`,
                undefined,
                undefined,
                query.sort
            );
        }
    }
};
export const getRefinements = async (routerId) => {
    const currentId = routerId[routerId.length - 1];
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
export const getDataProductVariations = async (link) => {
    const handleDataProductVariations = (data) => {
        const dataProductVariations = {
            promas_list: data.hits,
            promas_selected_refinements: data.selected_refinements,
            promas_toltal: data.total,
        };
        const proList = [];
        const proMasterList = dataProductVariations.promas_list.forEach((element) => {
            proList.push({
                promas_hit_type: element.hit_type,
                promas_product_id: element.product_id,
                promas_product_name: element.product_name,
                promas_represented_product: element.represented_product,
                promas_variation_attributes: element.variation_attributes,
            });
            return proList;
        });
        return proList;
    };
    return services.productVariations('productList/variations', `cgid=${link}`).then((res) => handleDataProductVariations(res.data));
};
