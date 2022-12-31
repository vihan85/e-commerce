import { httpRequest } from '../until/http-request';
import handleDataRefinements from '~/model/refinement/handle-data-refinement';

function serviceRefinement(router) {
    const { pid, ...params } = router;
    const paths = 'productList';
    params.refine = `cgid=${pid[1]}`;

    const result = httpRequest.get(paths, { params }).then((resRefine) => handleDataRefinements(resRefine.data, 'refinements'));
    return result;
}
export default serviceRefinement;
