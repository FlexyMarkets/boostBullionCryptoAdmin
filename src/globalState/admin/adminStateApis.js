import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminStateApis = createApi({
    reducerPath: "adminApis",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        }
    }),
    tagTypes: ["userList"],
    endpoints: (builder) => ({
        addFund: builder.mutation({
            query: (data) => ({
                url: "/transaction/deposit/usdt",
                method: "POST",
                body: data
            })
        }),
        userList: builder.query({
            query: ({ page = 1, sizePerPage = 10, search, greaterThan, lessThan, type, startDate, endDate }) => {
                const params = {};
                if (page > 0) params.page = page;
                if (sizePerPage > 0) params.sizePerPage = sizePerPage;
                if (search) params.search = search;
                if (greaterThan) params.greaterThan = greaterThan;
                if (lessThan) params.lessThan = lessThan;
                if (type) params.type = type;
                if (startDate) params.startDate = startDate;
                if (endDate) params.endDate = endDate;

                return {
                    url: "/user/list",
                    params,
                };
            },

            providesTags: (result) => {
                const data = result?.data?.docs || []
                return data.length > 0
                    ?
                    [
                        ...data.map(({ id }) => ({ type: 'userList', id })),
                        { type: 'userList', id: 'PARTIAL-LIST' },
                    ]
                    :
                    [{ type: 'userList', id: 'PARTIAL-LIST' }]
            },
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: true,
        }),
        getUserById: builder.query({
            query: ({ id }) => `/user/${id}`,
        }),
        userProfileUpdate: builder.mutation({
            query: (data) => ({
                url: "/user/update",
                method: "PUT",
                body: data
            })
        }),
        editTransaction: builder.mutation({
            query: (data) => ({
                url: "/transaction/approve-reject/withdraw",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["userList"]
        }),
        transactionList: builder.query({
            query: ({ page = 1, sizePerPage = 10, status, transactionType, fromUserId, userId, startDate, endDate }) => {
                const params = {};
                if (page > 0) params.page = page;
                if (sizePerPage > 0) params.sizePerPage = sizePerPage;
                if (status) params.status = status;
                if (transactionType) params.transactionType = transactionType;
                if (fromUserId) params.fromUserId = fromUserId;
                if (userId) params.userId = userId;
                if (startDate) params.startDate = startDate;
                if (endDate) params.endDate = endDate;

                return {
                    url: "/transaction/list",
                    params,
                };
            },

            providesTags: (result) => {
                const data = result?.data?.docs || []
                return data.length > 0
                    ?
                    [
                        ...data.map(({ id }) => ({ type: 'userList', id })),
                        { type: 'userList', id: 'PARTIAL-LIST' },
                    ]
                    :
                    [{ type: 'userList', id: 'PARTIAL-LIST' }]
            },
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: true,
        }),
        getReferralInfo: builder.query({
            query: ({ referralCode }) => {

                const params = {};
                if (referralCode) params.referralCode = referralCode;

                return {
                    url: "/user/details",
                    params,
                };

            }
        }),
        userTransactionPasswordUpdate: builder.mutation({
            query: (data) => ({
                url: "/user/change/trx/password",
                method: "PUT",
                body: data
            })
        }),
        userLoginPasswordUpdate: builder.mutation({
            query: (data) => ({
                url: "/user/change/login/password",
                method: "PUT",
                body: data
            })
        }),
        getReferralList: builder.query({
            query: ({ userId }) => {

                const params = {};
                if (userId) params.userId = userId;

                return {
                    url: "/user/referral/tree",
                    params,
                };

            }
        }),
        getDashboardData: builder.query({
            query: () => `/dashboard`,
        }),
    })
})

export const {
    useAddFundMutation,
    useEditTransactionMutation,
    useUserListQuery,
    useGetUserByIdQuery,
    useUserProfileUpdateMutation,
    useTransactionListQuery,
    useGetReferralInfoQuery,
    useUserTransactionPasswordUpdateMutation,
    useUserLoginPasswordUpdateMutation,
    useGetReferralListQuery,
    useGetDashboardDataQuery
} = adminStateApis;