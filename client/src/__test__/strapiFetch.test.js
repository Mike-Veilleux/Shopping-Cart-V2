import { describe, expect, vi, it } from "vitest";
import useDataStore from "../store/__mock__/useDataStore";

const returnData = [
    { name: "Apples", country: "Italy", cost: 3, instock: 10 },
    { name: "Oranges", country: "Spain", cost: 4, instock: 3 },
    { name: "Beans", country: "USA", cost: 2, instock: 5 },
    { name: "Cabbages", country: "USA", cost: 1, instock: 8 },
]



describe("#useDataStore", () => {
    it("Shoult return object from mock", () => {
        const getSpy = vi.spyOn(useDataStore, 'restockProducts')
        expect(getSpy).toBe(returnData)
    })
})