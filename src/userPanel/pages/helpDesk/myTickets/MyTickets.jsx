import { Container, Stack, Typography } from '@mui/material';
import TicketsTable from './ticketsTable/TicketsTable';


function MyTickets() {

  return (
    // <Container sx={{ mt: "100px" }}>
    <Stack sx={{ mt: "100px", mx: "5rem" }}>
      <Typography variant='h5' fontWeight={"700"} fontSize={"1.8rem"}>All Tickets</Typography>
      <TicketsTable />
    </Stack>
    // {/* </Container> */ }
  )
}

export default MyTickets;