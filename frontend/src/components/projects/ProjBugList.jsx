import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "issue", headerName: "Issue", flex: 3 },
    { field: "date", headerName: "Date", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      align: "center",
      renderCell: (cellValues) => {
        return <div style={{ color: 'white', minWidth: '100px', textAlign: 'center', padding: '5px 0', borderRadius: '5px', backgroundColor: cellValues.value === 'Open' ? '#5da56b' : '#a8382c' }}>{cellValues.value}</div>;
      },
    },
    {
      field: "priority",
      headerName: "Priority",
      flex: 1,
      align: "center",
    },
  ];

const rows = [
  { id: 1, issue: "Snow", status: "Open", date: 35 },
  { id: 2, issue: "Lannister", status: "Closed", date: 42 },
  { id: 3, issue: "Lannister", status: "Open", date: 45 },
  { id: 4, issue: "Stark", status: "Open", date: 16 },
  { id: 5, issue: "Targaryen", status: "Closed", date: 54 },
  { id: 6, issue: "Melisandre", status: "Open", date: 150 },
  { id: 7, issue: "Clifford", status: "Closed", date: 44 },
  { id: 8, issue: "Frances", status: "Open", date: 36 },
  { id: 9, issue: "Roxie", status: "Closed", date: 65 },
];

const ProjBugList = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <div style={{ height: 370, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={rowsPerPage}
        rowsPerPageOptions={[5, 10, 20, 50]}
        onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
      />
    </div>
  );
};

export default ProjBugList;
