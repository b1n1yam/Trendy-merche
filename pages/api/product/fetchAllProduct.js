import { PRODUCT_URI } from "../constant";

const fetchProduct$ = () => {
    return PRODUCT_URI.get(
    )
}
export default fetchProduct$;