import { httpRequest } from '~/until/http-request';
import handleDataCatelory from '~/model/catelory/handle-data-catelory';
import { publishRouter, mockRoutes } from '~/routers';
function serviceCatelory() {
    const path = publishRouter.catelory;
    const mockPaths = mockRoutes.catelory;

    const params = {
        levels: 3,
    };
    return httpRequest.get(mockPaths, { params }).then((database) => {
        return handleDataCatelory(database.data);
    });
}
export default serviceCatelory;
