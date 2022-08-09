import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useNavigate } from "react-router";

const columns = [
  { field: "project", headerName: "Project", flex: 2 },
  { field: "issue", headerName: "Issue", flex: 3 },
  {
    field: "priority",
    headerName: "Priority",
    flex: 1,
    align: "center",
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "black",
            minWidth: "100px",
            textAlign: "center",
            fontSize: ".8rem",
            fontWeight: "400",
            textTransform: "uppercase",
            letterSpacing: "2px",
            padding: "5px 0",
            borderRadius: "5px",
            backgroundColor:
              cellValues.value === "4"
                ? "#ff2800"
                : cellValues.value === "3"
                ? "#E18B16"
                : cellValues.value === "2"
                ? "#F1E04A"
                : cellValues.value === "1"
                ? "#72B5BE"
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
  { field: "date", headerName: "Date", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    align: "center",
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "white",
            minWidth: "100px",
            fontSize: ".8rem",
            fontWeight: "400",
            textTransform: "uppercase",
            letterSpacing: "2px",
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
  {
    id: 1,
    project: "test for spacing to see how",
    issue: "Snow",
    status: "Open",
    date: 35,
    priority: "4",
  },
  {
    id: 2,
    project: "test",
    issue: "Lannister",
    status: "Closed",
    date: 42,
    priority: "4",
  },
  {
    id: 3,
    project: "test",
    issue: "Lannister",
    status: "Open",
    date: 45,
    priority: "4",
  },
  {
    id: 4,
    project: "test",
    issue: "Stark",
    status: "Open",
    date: 16,
    priority: "4",
  },
  {
    id: 5,
    project: "test",
    issue: "Targaryen",
    status: "Closed",
    date: 54,
    priority: "4",
  },
  {
    id: 6,
    project: "test",
    issue: "Melisandre",
    status: "Open",
    date: 150,
    priority: "4",
  },
  {
    id: 7,
    project: "test",
    issue: "Clifford",
    status: "Closed",
    date: 44,
    priority: "4",
  },
  {
    id: 8,
    project: "test",
    issue: "Frances",
    status: "Open",
    date: 36,
    priority: "4",
  },
  {
    id: 9,
    project: "test",
    issue: "Roxie",
    status: "Closed",
    date: 65,
    priority: "4",
  },
  {
    id: 10,
    project: "test",
    issue: "Roxie",
    status: "Closed",
    date: 65,
    priority: "4",
  },
  {
    id: 11,
    project: "test",
    issue: "Roxie",
    status: "Closed",
    date: 65,
    priority: "4",
  },
];

const HomeList = () => {
  const navigate = useNavigate();
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleBugClick = (bug) => {
    navigate("/bugview", { state: bug });
  };

  return (
    <Box height={400}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={rowsPerPage}
        rowsPerPageOptions={[5, 10, 20, 50]}
        onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
        disableSelectionOnClick={true}
        disableColumnSelector={true}
        onRowClick={(e) => handleBugClick(e.row)}
      />
    </Box>
  );
};

export default HomeList;
