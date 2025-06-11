import DashboardIcon from '@mui/icons-material/Dashboard';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export const NAVIGATION = [
    {
        segment: '/dashboard',
        title: 'Dashboard',
        icon: DashboardIcon,
    },
    {
        title: 'User management',
        icon: SettingsOutlinedIcon,
        children: [
            {
                segment: '/dashboard/userManagement/userList',
                title: 'User list',
                icon: CircleOutlinedIcon,
            }
        ],
    },
    {
        segment: '/dashboard/transactionList',
        title: 'Transaction',
        icon: AccountBalanceIcon,
    },
    {
        title: 'Log out',
        icon: LogoutIcon
    },
]