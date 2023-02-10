import { httpRequest } from '~/until/http-request';
import handleDataCatelory from '~/model/catelory/handle-data-catelory';
import { publishRouter, mockRoutes } from '~/routers';
function serviceCatelory() {
    const path = publishRouter.catelory;
    const mockPaths = `${mockRoutes.catelories}/catelories:success`;
    const params = {
        levels: 3,
        /**
     * Mock
        return httpRequest.get(mockPaths, { params }).then((database) => {
        return handleDataCatelory(database.data.preview.body);
     * Unmock
    return httpRequest.get(path, { params }).then((database) => {
        return handleDataCatelory(database.data);
    });
    });
     */

        //Mock-acctive
    };
    return httpRequest.get(mockPaths, { params }).then((database) => {
        return handleDataCatelory(database.data.preview.body);
    });
}
export default serviceCatelory;
