import * as services from '~/api-services/services';

export const getFeatureCatelory = async () => {
    const handleDataCatelory = (data, catelogy, array) => {
        const categories = [];
        if (data[catelogy]) {
            data[catelogy].forEach((element) => {
                if (element.categories) {
                    categories.push({
                        c_id: element.id,
                        c_name: element.name,
                        c_catelories: handleDataCatelory(element, 'categories'),
                    });
                } else {
                    categories.push({
                        c_id: element.id,
                        c_name: element.name,
                    });
                }
            });
        }
        return categories;
    };

    const result = await services.catelogy('categories', '3').then((resCatelogy) => {
        return handleDataCatelory(resCatelogy.data, 'categories');
    });

    return result;
};
