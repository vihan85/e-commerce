const handleDataProductVariations = (dataBases, keyCustom) => {
    const totalData = {};
    dataBases.forEach((dataBase) => {
        const data = {};
        for (let key in dataBase.data.preview.body) {
            data[`${keyCustom}_${key}`] = dataBase.data.preview.body[key];
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
    console.log(totalData);
    return totalData;
};
export default handleDataProductVariations;
