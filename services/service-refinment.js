import { httpRequest } from '~/until/http-request';
import handleDataRefinements from '~/model/refinement/handle-data-refinement';
import { publishRouter } from '~/routers';

function serviceRefinement(router) {
    const { pid, ...params } = router;
    const paths = publishRouter.refinements;
    params.refine = `cgid=${pid[1]}`;

    const result = httpRequest.get(paths, { params }).then((resRefine) => handleDataRefinements(resRefine.data, 'refinements'));
    return result;
}
export default serviceRefinement;
