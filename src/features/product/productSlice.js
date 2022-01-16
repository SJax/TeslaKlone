import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products:
        [ "Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panels"]
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {}
})

export const selectProduct = state => state.product.products

export default productSlice.reducer