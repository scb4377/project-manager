import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";

const columns = [
  {
    field: "issue",
    headerName: "Issue",
    headerClassName: "gridHeader",
    flex: 3,
  },
  {
    field: "priority",
    headerName: "Priority",
    headerClassName: "gridHeader",
    flex: 1,
    align: "center",
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "black",
            minWidth: "100px",
            textAlign: "center",
            padding: "5px 0",
            borderRadius: "5px",
            fontSize: ".8rem",
            fontWeight: "400",
            textTransform: "uppercase",
            letterSpacing: "2px",
            backgroundColor:
              cellValues.value === "4"
                ? "#ff2800"
                : cellValues.value === "3"
                ? "#ffae04"
                : cellValues.value === "2"
                ? "#eaf600"
                : cellValues.value === "1"
                ? "#55ff04"
                : "transparent",
          }}
        >
          {cellValues.value === "4"
            ? "Critical"
            : cellValues.value === "3"
            ? "Major"
            : cellValues.value === "2"
            ? "Minor"
            : cellValues.value === "1"
            ? "Low"
            : null}
        </div>
      );
    },
  },

  { field: "date", headerName: "Date", headerClassName: "gridHeader", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    headerClassName: "gridHeader",
    flex: 1,
    align: "center",
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "white",
            fontWeight: "400",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: ".8rem",
            minWidth: "100px",
            textAlign: "center",
            padding: "5px 0",
            borderRadius: "5px",
            backgroundColor:
              cellValues.value === "Open" ? "#5da56b" : "#a8382c",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
];

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

  const handleBugClick = (bug) => {
    navigate("/bugview", { state: bug });
  };

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
        columns={columns}
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
