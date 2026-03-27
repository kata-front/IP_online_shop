import {baseApi} from "../../redux/baseApi.ts";
import {type Login, type LoginResponce} from "../../utils/types.ts";

const loginApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<LoginResponce, Login>({
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

export default loginApi