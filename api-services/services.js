import * as httpRequest from '../until/http-request';

const catelogy = async (path, levels) => {
    const respon = httpRequest.get(path, {
        params: {
            levels,
        },
    });
    return respon;
};
const products = async (path, count, refine_1) => {
    const respon = httpRequest.get(path, {
        params: {
            count,
            refine_1,
        },
    });
    return respon;
};
export { catelogy, products };
