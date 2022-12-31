import { httpRequest } from '~/until/http-request';
import handleDataCatelory from '~/model/catelory/handle-data-catelory';
function serviceCatelory() {
    const path = 'categories';
    const params = {
        levels: 3,
    };
    return httpRequest.get(path, { params }).then((database) => {
        return handleDataCatelory(database.data);
    });
}
export default serviceCatelory;
