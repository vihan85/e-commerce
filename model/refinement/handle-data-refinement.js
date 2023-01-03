/**
 *
 * @param {Object} data
 * @param {*} refinement
 * @returns
 */
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
export default handleDataRefinements