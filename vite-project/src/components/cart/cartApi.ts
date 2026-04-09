import {baseApi} from "../../redux/baseApi.ts";

const cartApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCart: builder.query<void, string>({
            query: (token) => ({
                url: `/getCart/${token}`,
                method: 'GET'
            })
        })
    })
})

export default cartApi