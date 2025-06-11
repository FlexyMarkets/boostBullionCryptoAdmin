import Details from './details/Details'
import { Container, Stack, Typography } from '@mui/material'
import ForexCrossRatesWidget from './forexCrossRatesWidget/ForexCrossRatesWidget.jsx'
import TopTenTransactionHistory from './topTenTransactionHistory/TopTenTransactionHistory.jsx'

function Dashboard() {
    return (
        <Stack mt={"100px"}>
            <Container>
                <Typography variant="h4" fontWeight="bold" gutterBottom>Dashboard</Typography>
            </Container>
            <Details />
            <TopTenTransactionHistory />
            <ForexCrossRatesWidget />
        </Stack>
    )
}

export default Dashboard