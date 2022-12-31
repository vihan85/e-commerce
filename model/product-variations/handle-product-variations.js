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
export default handleDataProductVariations;
