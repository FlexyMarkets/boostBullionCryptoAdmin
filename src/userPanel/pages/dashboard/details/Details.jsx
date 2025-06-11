import { Typography, Container, Stack, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { useSelector } from "react-redux";
import PaymentsIcon from '@mui/icons-material/Payments';
import { useGetDashboardDataQuery } from "../../../../globalState/admin/adminStateApis";

function Details() {

    const { activeTheme } = useSelector(state => state.themeMode)

    const { data, isLoading } = useGetDashboardDataQuery()

    const dashboardData = data?.data?.[0]

    const income = {
        "Main balance": dashboardData?.totalBUSDBalance,
        "Package balance": dashboardData?.PACKAGEBalance,
        "Affliate balance": dashboardData?.AFFLIATEBalance,
        "Trade balance": dashboardData?.totalTRADEBalance,
        "Withdrawal balance": dashboardData?.totalWithdrawalBalance,
        "Total staked balance": dashboardData?.totalStakedBalance,
        "Total reward balance": dashboardData?.totalRewardBalance,
        "Staking reward balance": dashboardData?.totalStakingRewardBalance,
        "Rank bonus balance": dashboardData?.totalRankBonusBalance,
        "Total removed staked balance": dashboardData?.totalRemovedStakedBalance,
        "Total internal transfer balance": dashboardData?.totalInternalTransferBalance,
        "Total unlock reward balance": dashboardData?.totalUnlockRewardBalnce,
        "Total referral reward balance": dashboardData?.totalReferralRewardBalance,
    }

    return (
        <Stack>
            <Container>
                <Grid container spacing={2} size={12}>
                    {
                        Object.entries(income).map(([keys, values]) => (
                            <Grid
                                item
                                size={{ xs: 6, sm: 4, md: 3 }}
                                key={keys}
                                sx={{
                                    bgcolor: activeTheme === "dark" ? "#272727" : "#e9e6e6",
                                    p: "1rem",
                                    borderRadius: "1rem",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}
                            >
                                <Stack>
                                    <Typography variant="body2" color="textSecondary">
                                        {keys}
                                    </Typography>
                                    <Typography variant="h6" fontWeight="bold">
                                        {isLoading ? <Skeleton width={200} height={30} /> : values || 0}
                                    </Typography>
                                </Stack>
                                <PaymentsIcon />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Stack>
    );
};

export default Details;