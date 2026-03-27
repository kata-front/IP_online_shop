import {baseApi} from "../../redux/baseApi.ts";
import {type RegResponce, type Register} from "../../utils/types.ts";

export const registerApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<RegResponce, Register>({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
        })
    })
})