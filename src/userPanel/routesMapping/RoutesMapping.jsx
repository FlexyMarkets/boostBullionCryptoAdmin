import { lazy } from "react";
// import EditTransaction from "../pages/transaction/EditTransaction";
const TransactionList = lazy(() => import("../pages/transaction/TransactionList"));
const EditUser = lazy(() => import("../pages/userManagement/editUser/EditUser"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const UserList = lazy(() => import("../pages/userManagement/UserList"));
const MyTickets = lazy(() => import("../pages/helpDesk/myTickets/MyTickets"));
const ShowTicket = lazy(() => import("../pages/helpDesk/showTicket/ShowTicket"));


export const routing = [
    { path: "", element: <Dashboard /> },
    { path: "userManagement/userList", element: <UserList /> },
    { path: "userManagement/editUser/:id", element: <EditUser /> },
    { path: "transactionList", element: <TransactionList /> },
    { path: "support/myTickets", element: <MyTickets /> },
    { path: "support/showTicket", element: <ShowTicket /> },
    // { path: "transactionList/edit/:id", element: <EditTransaction /> },
]