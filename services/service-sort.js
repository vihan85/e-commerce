import handleDataSort from '~/model/sort/handle-data-sort';
import { publishRouter } from '~/routers';
import { httpRequest } from '~/until/http-request';

function serviceSort(router) {
    if (router.query.pid) {
        const { pid, sort } = router.query;
        const path = publishRouter.sort;
        const params = {
            sort,
            refine: `cgid=${pid[1]}`,
        };
        return httpRequest.get(path, { params }).then((database) => handleDataSort(database.data));
    }
}
export default serviceSort;
