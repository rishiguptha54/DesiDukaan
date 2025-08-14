// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   isLoading: false,
//   featureImageList: [],
// };

// export const getFeatureImages = createAsyncThunk(
//   "/order/getFeatureImages",
//   async () => {
//     const response = await axios.get(
//       `http://localhost:5000/api/common/feature/get`
//     );

//     return response.data;
//   }
// );

// export const addFeatureImage = createAsyncThunk(
//   "/order/addFeatureImage",
//   async (image) => {
//     const response = await axios.post(
//       `http://localhost:5000/api/common/feature/add`,
//       { image }
//     );

//     return response.data;
//   }
// );

// const commonSlice = createSlice({
//   name: "commonSlice",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getFeatureImages.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getFeatureImages.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.featureImageList = action.payload.data;
//       })
//       .addCase(getFeatureImages.rejected, (state) => {
//         state.isLoading = false;
//         state.featureImageList = [];
//       });
//   },
// });

// export default commonSlice.reducer;




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Auto-detect API URL based on environment
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://desidukaan.onrender.com/api");

const initialState = {
  isLoading: false,
  featureImageList: [],
};

export const getFeatureImages = createAsyncThunk(
  "/order/getFeatureImages",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/common/feature/get`);
    return response.data;
  }
);

export const addFeatureImage = createAsyncThunk(
  "/order/addFeatureImage",
  async (image) => {
    const response = await axios.post(`${API_BASE_URL}/common/feature/add`, {
      image,
    });
    return response.data;
  }
);

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeatureImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeatureImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList = action.payload.data;
      })
      .addCase(getFeatureImages.rejected, (state) => {
        state.isLoading = false;
        state.featureImageList = [];
      });
  },
});

export default commonSlice.reducer;
