import type {Product} from "../types.ts";
import {useMemo} from "react";

export const useSport = (
    products: Product[],
    activeCategories: string[]
) => {
    const sortedProducts = useMemo(() => {
        if (!products) return []

        let result = products
        if (activeCategories.length > 0) {
            result = result.filter(product => activeCategories.includes(product.category))
        }
        return result
    }, [products, activeCategories])

    return sortedProducts
}

export const useSortedAndSearch = (
    products: Product[],
    activeCategories: string[],
    searchQuery: string,
) => {
    const sortedProducts = useSport(products, activeCategories)

    return useMemo(() => {
        if (!searchQuery) return sortedProducts

        return sortedProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [sortedProducts, searchQuery])
}