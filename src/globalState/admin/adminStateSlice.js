import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    role: localStorage.getItem("role") || null,
    selectedReferralCode: localStorage.getItem("selectedReferralCode") || null,
};

const adminStateSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload
            localStorage.setItem("role", action.payload)
        },
        setSelectedReferralCode: (state, action) => {
            localStorage.setItem("selectedReferralCode", action.payload)
            state.selectedReferralCode = action.payload
        },
    }
});

export const { setRole, setSelectedReferralCode } = adminStateSlice.actions;
export default adminStateSlice.reducer;