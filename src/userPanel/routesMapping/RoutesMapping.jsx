import { lazy } from "react";
// import EditTransaction from "../pages/transaction/EditTransaction";
const TransactionList = lazy(() => import("../pages/transaction/TransactionList"));
const EditUser = lazy(() => import("../pages/userManagement/editUser/EditUser"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const UserList = lazy(() => import("../pages/userManagement/UserList"));
const MyTickets = lazy(() => import("../pages/helpDesk/myTickets/MyTickets"));
const ShowTicket = lazy(() => import("../pages/helpDesk/showTicket/ShowTicket"));
const AddBanner = lazy(() => import("../pages/contentManagement/banner/addBanner/AddBanner"));
const BannerList = lazy(() => import("../pages/contentManagement/banner/bannerList/BannerList"));


export const routing = [
    { path: "", element: <Dashboard /> },
    { path: "userManagement/userList", element: <UserList /> },
    { path: "userManagement/editUser/:id", element: <EditUser /> },
    { path: "transactionList", element: <TransactionList /> },
    { path: "support/myTickets", element: <MyTickets /> },
    { path: "support/showTicket", element: <ShowTicket /> },
    { path: "contentManagement/banner/addBanner", element: <AddBanner /> },
    { path: "contentManagement/banner/bannerList", element: <BannerList /> }
    // { path: "transactionList/edit/:id", element: <EditTransaction /> },
]