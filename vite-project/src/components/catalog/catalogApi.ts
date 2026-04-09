import {baseApi} from "../../redux/baseApi.ts";
import {type Product} from "../../utils/types.ts";

const catalogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => '/products'
        }),
        intoCart: builder.mutation<{
            ok: boolean;
            product: Product;
        }, {productId: number, token: string}>({
            query: ({token, productId}) => ({
                url: `/add/${token}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({productId})
            })
        })
    })
})

export const { useGetProductsQuery, useIntoCartMutation } = catalogApi