const handleDataProductVariations = (dataBases) => {
    const totalData = {};
    dataBases.forEach((dataBase) => {
        const data = {};
        for (let key in dataBase.data) {
            data[`dt_${key}`] = dataBase.data[key];
        }
        if (data.dt_price) {
            totalData.data_price = data;
        } else if (data.dt_image_groups) {
            totalData.data_images = data;
        }else if(data.dt_variants){
            totalData.data_variants = data;
        }
         else {
            totalData.data_product = data;
        }
    });
    return totalData;
};
export default handleDataProductVariations;
