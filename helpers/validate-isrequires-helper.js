/**
 * checkIsRequired: check validate is reqiured
 * @param {Object} valueValadate get from API body
 * @param {Object} type 
 */
function checkIsRequired(valueValadate, type) {
    for (let key in valueValadate) {
        if (valueValadate[key] === '') {
            type.error[key] = 'Please fill out this field.';
        }
    }
}
export default checkIsRequired