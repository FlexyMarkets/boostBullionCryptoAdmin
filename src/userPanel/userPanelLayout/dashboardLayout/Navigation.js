import DashboardIcon from '@mui/icons-material/Dashboard';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HelpIcon from '@mui/icons-material/Help';
import ViewCarouselOutlinedIcon from '@mui/icons-material/ViewCarouselOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';

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
        title: 'Content management',
        icon: SourceOutlinedIcon,
        children: [
            {
                title: 'Banner',
                icon: ViewCarouselOutlinedIcon,
                children: [
                    {
                        segment: '/dashboard/contentManagement/banner/addBanner',
                        title: 'Add banner',
                        icon: CircleOutlinedIcon,
                    },
                    {
                        segment: '/dashboard/contentManagement/banner/bannerList',
                        title: 'banner list',
                        icon: CircleOutlinedIcon,
                    }
                ],
            },
        ],
    },
    {
        segment: '/dashboard/transactionList',
        title: 'Transaction',
        icon: AccountBalanceIcon,
    },
    {
        segment: '/dashboard/support/myTickets',
        title: 'Tickets',
        icon: HelpIcon,
    },
    {
        title: 'Log out',
        icon: LogoutIcon
    },
]