import { httpRequest } from '~/until/http-request';
import handleDataCatelory from '~/model/catelory/handle-data-catelory';
import { publishRouter } from '~/routers';
function serviceCatelory() {
    const path = publishRouter.catelory;
    const params = {
        levels: 3,
    };
    return httpRequest.get(path, { params }).then((database) => {
        return handleDataCatelory(database.data);
    });
}
export default serviceCatelory;
