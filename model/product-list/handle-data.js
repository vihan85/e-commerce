/**
 *handleDataProductList=> handle item after that push into main data
 * @param {Object} baseData => root data product/image/price
 * @param {Object} type => key & value to define new data
 * @param {array} mainData =>new data product/image/price
 */
const handleDataProductList = (baseData, type, mainData) => {
    if (Array.isArray(baseData.hits)) {
        baseData.hits.forEach((element) => {
            mainData.push({
                p_id: element.product_id,
                [type.key]: element[type.value],
            });
        });
    }
}
export default handleDataProductList