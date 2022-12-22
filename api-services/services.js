import * as httpRequest from '../until/http-request';
const catelogy = async (path, levels) => {
    const respon = httpRequest.get(path, {
        params: {
            levels,
        },
    });
    return respon;
};
const products = async (path, count, refine_1, refine_2) => {
    const respon = httpRequest.get(path, {
        params: {
            count,
            refine_1,
            refine_2,
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
export { catelogy, products, filterColor };
