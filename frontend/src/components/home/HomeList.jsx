import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../context/Context";
import { columns, mobileColumns } from "./HomeListLayout";

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
  const { bugList } = useContext(AppContext)

  const navigate = useNavigate();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  let initialState = window.innerHeight < 500 ? mobileColumns : columns;
  const [columnLayout, setColumnLayout] = useState(initialState);

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

  return (
    <Box
      height={400}
      sx={{ "& .gridHeader": { color: "white", bgcolor: "accent.primary" } }}
    >
      <DataGrid
        rows={bugList}
        columns={columnLayout}
        pageSize={rowsPerPage}
        rowsPerPageOptions={[5, 10, 20, 50]}
        onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
        disableSelectionOnClick={true}
        disableColumnSelector={true}
        columnBuffer={2}
        onRowClick={(e) => handleBugClick(e.row)}
      />
    </Box>
  );
};

export default HomeList;
