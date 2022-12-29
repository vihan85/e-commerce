import * as httpRequest from '../until/http-request';

const sort = async (path, refine_1, refine_2, refine_3) => {
    return httpRequest.get(path, {
        params: {
            refine_1,
            refine_2,
            refine_3,
        },
    });
};
const catelogy = async (path, levels) => {
    const respon = httpRequest.get(path, {
        params: {
            levels,
        },
    });
    return respon;
};
const products = async (path, count, refine_1 = undefined, sort, refine_2 = undefined, refine_3 = undefined) => {
    const respon = httpRequest.get(path, {
        params: {
            count,
            sort,
            refine_1,
            refine_2,
            refine_3,
        },
    });
    return respon;
};
const filterColor = async (path, refine_1, refine_2) => {
    const respon = httpRequest.get(path, {
        params: {
            refine_1,
            refine_2,
        },
    });
    return respon;
};
const productVariations = async (path, refine_1) => {
    const respon = httpRequest.get(path, {
        params: { refine_1 },
    });
    return respon;
};
export { catelogy, products, filterColor, productVariations, sort };
