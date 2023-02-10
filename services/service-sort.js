import handleDataSort from '~/model/sort/handle-data-sort';
import { publishRouter, mockRoutes } from '~/routers';
import { httpRequest } from '~/until/http-request';

function serviceSort(router) {
    if (router.query.pid) {
        const { pid, sort } = router.query;

        const path = publishRouter.sort;
        const mockpath = `${mockRoutes.sort}:${'mens-clothing'}`; // use it while mock
        const params = {
            sort,
            refine: `cgid=${pid[1]}`,
        };

        return httpRequest.get(mockpath, { params }).then((database) => handleDataSort(database.data.preview.body));
    }
}
export default serviceSort;
