import { Container, Typography } from '@mui/material';
import TicketsTable from './ticketsTable/TicketsTable';


function MyTickets() {

  return (
    <Container sx={{ mt: "100px" }}>
      <Typography variant='h5' fontWeight={"700"} fontSize={"1.8rem"}>All Tickets</Typography>
      <TicketsTable />
    </Container>
  )
}

export default MyTickets;