import { TableRow, TableHead, TableCell } from '@mui/material';
import { withdrawalAmountCRYPTOforIndiansTableHeadData } from './withdrawalAmountCRYPTOforIndiansTableHeadData';

function WithdrawalAmountCRYPTOforIndiansTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          withdrawalAmountCRYPTOforIndiansTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default WithdrawalAmountCRYPTOforIndiansTableHead;