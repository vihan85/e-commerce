function hendleDataSearch(database) {
    const reliableDataHits = {
        images: [],
        products: [],
    };
    database.forEach((data) => {
        if (data.data.preview.body.hits) {
            data.data.preview.body.hits.forEach((items) => {
                const item = {};
                for (let key in items) {
                    item[`se_${key}`] = items[key];
                }
                if (item.se_image) {
                    reliableDataHits.images.push(item);
                } else {
                    reliableDataHits.products.push(item);
                }

            });
        }
    });
    reliableDataHits.images.forEach((image) => {
        const idPro = reliableDataHits.products.find((product) => product.se_product_id === image.se_product_id);
        if (image.se_product_id === idPro.se_product_id) {
            idPro.se_image = image.se_image;
        }
    });
    return reliableDataHits.products;
}
export default hendleDataSearch;
