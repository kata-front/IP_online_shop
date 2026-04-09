import App from "./App.tsx";
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";
import Cart from "./components/cart/cart.tsx";
import Catalog from "./components/catalog/catalog.tsx";
import Profile from "./components/profile/profile.tsx";
import Login from "./components/login/login.tsx";
import Register from "./components/register/register.tsx";
import { Outlet, createBrowserRouter } from "react-router-dom";
import cartApi from "./components/cart/cartApi.ts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>
            <Header />
            <Outlet />
            <Footer />
        </div>,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: "cart/:token",
                element: <Cart />,
                loader: async () => {
                    const token = window.location.pathname.split('/').pop()
                    if (!token) {
                        return
                    }
                    await cartApi.endpoints.getCart.initiate(token)

                    return {
                        token
                    }
                }
            },
            {
                path: "catalog",
                element: <Catalog />,
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
])
