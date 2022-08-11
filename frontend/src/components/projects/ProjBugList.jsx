import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";
import { columns, mobileColumns } from "./ProjBugListLayout";



const rows = [
  { id: 1, issue: "Snow", status: "Open", date: 35, priority: "3" },
  { id: 2, issue: "Lannister", status: "Closed", date: 42, priority: "2" },
  { id: 3, issue: "Lannister", status: "Open", date: 45, priority: "1" },
  { id: 4, issue: "Stark", status: "Open", date: 16, priority: "4" },
  { id: 5, issue: "Targaryen", status: "Closed", date: 54, priority: "2" },
  { id: 6, issue: "Melisandre", status: "Open", date: 150, priority: "1" },
  { id: 7, issue: "Clifford", status: "Closed", date: 44, priority: "2" },
  { id: 8, issue: "Frances", status: "Open", date: 36, priority: "2" },
  { id: 9, issue: "Roxie", status: "Closed", date: 65, priority: "1" },
];

const ProjBugList = () => {
  const navigate = useNavigate();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  let initialState = window.innerHeight < 500 ? mobileColumns : columns;
  const [columnLayout, setColumnLayout] = useState(initialState)

  window.onresize = () => {
    if (window.innerWidth < 500) {
      setColumnLayout(mobileColumns);
    } else {
      setColumnLayout(columns);
    }
  };

  const handleBugClick = (bug) => {
    navigate("/bugview", { state: bug });
  };

  console.log(columnLayout)

  return (
    <Box
      sx={{
        height: 370,
        width: "100%",
        "& .gridHeader": { color: "white", bgcolor: "accent.primary" },
      }}
    >
      <DataGrid
        rows={rows}
        sx={{'&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '20px' },}}
        getRowHeight={() => 'auto'} getEstimatedRowHeight={() => 200}

        columns={columnLayout}
        pageSize={rowsPerPage}
        rowsPerPageOptions={[5, 10, 20, 50]}
        onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
        disableColumnSelector={true}
        disableSelectionOnClick={true}
        onRowClick={(e) => handleBugClick(e.row)}
      />
    </Box>
  );
};

export default ProjBugList;
