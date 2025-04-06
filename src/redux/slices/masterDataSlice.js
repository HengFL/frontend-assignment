import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from "utils/service";
import alert from "utils/alert";

const sliceName = 'masterDataSlice';
const initialState = {
  masterData: {},
};

/* fetch */
export const onGetMasterdata = createAsyncThunk(sliceName + "GetMasterdata", async (request) => {
  return await service.api.post("GetMasterdata", request);
});

/* slice */
export const masterDataSlice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: {
    // onChangeNavTabs: (state, action) => {
    //   state.navTabs.active = action.payload;
    // },
    onClearAllMasterData: () => initialState,
  },
  extraReducers: {
    // #region onGetMasterdata
    [onGetMasterdata.fulfilled]: (state, action) => {
      if (action.payload?.success === true) {
        state.criteriaMasterData = action.payload.responseObject;
      }
      else {
        alert.warning(alert.getMessage(action));
      }
    },
    // #endregion
  },
});

export const {
  onClearAllMasterData,
} = masterDataSlice.actions;

export default masterDataSlice.reducer;
