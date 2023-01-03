const handleDataProductVariations = (dataBases, keyCustom) => {
    const totalData = {};
    dataBases.forEach((dataBase) => {
        const data = {};
        for (let key in dataBase.data) {
            data[`${keyCustom}_${key}`] = dataBase.data[key];
        }
        if (data[`${keyCustom}_price`]) {
            totalData.data_price = data;
        } else if (data[`${keyCustom}_image_groups`]) {
            totalData.data_images = data;
        } else if (data[`${keyCustom}_variants`]) {
            totalData.data_variants = data;
        } else {
            totalData.data_product = data;
        }
    });
    return totalData;
};
export default handleDataProductVariations;
