/**
 *
 * @param {Object} dataBase get form API
 * @returns {Array} data had handled
 */
function handleDataCatelory(dataBase) {
    const dataCategories = [];
    if (dataBase['categories']) {
        dataBase['categories'].forEach((element) => {
            if (element.categories) {
                dataCategories.push({
                    c_id: element.id,
                    c_name: element.name,
                    c_catelories: handleDataCatelory(element, 'categories'),
                    c_headerbanner: element.c_slotBannerImage?element.c_slotBannerImage:null,
                    c_parent_tree: element.parent_category_tree,
                });
            } else {
                dataCategories.push({
                    c_id: element.id,
                    c_name: element.name,
                    c_headerbanner: element.c_slotBannerImage?element.c_slotBannerImage:null,
                    c_parent_tree: element.parent_category_tree,
                });
            }
        });
    }

    return dataCategories;
}
export default handleDataCatelory;
