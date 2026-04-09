import {baseApi} from "../../redux/baseApi.ts";
import {type RegResponce, type Register} from "../../utils/types.ts";

export const registerApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        register: build.mutation<RegResponce, Register>({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
        })
    })
})