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


export const getDataProductVariations = async (link) => {
    const handleDataProductVariations = (data) => {
        const dataProductVariations = {
            promas_list: data.hits,
            promas_selected_refinements: data.selected_refinements,
            promas_toltal: data.total,
        };
        const proList = [];
        dataProductVariations.promas_list.forEach((element) => {
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
