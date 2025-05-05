import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductsBycategories } from "../APIS/List";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const data = await fetchAllProducts();
    return data;
});

export const getallbyCategory = createAsyncThunk('products/getallbyCategory', async (categoryId)=>{
    const data = fetchProductsBycategories(categoryId);
    return data;
})

const initialState = {
    items: [],
    related: [],
    loading: false,
    error: null,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFilteredProducts(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Error fetching Products';
            });
    },
});

export const {setFilteredProducts} = productsSlice.actions;
export default productsSlice.reducer;