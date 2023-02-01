import { httpRequest } from '~/until/http-request';
import handleDataRefinements from '~/model/refinement/handle-data-refinement';
import { publishRouter, mockRoutes } from '~/routers';

function serviceRefinement(router) {
    const { pid, ...params } = router;
    const paths = publishRouter.refinements;
    const mockPaths = mockRoutes.refinements;

    params.refine = `cgid=${pid[1]}`;

    const result = httpRequest.get(mockPaths, { params }).then((resRefine) => handleDataRefinements(resRefine.data, 'refinements'));
    return result;
}
export default serviceRefinement;
