import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { rows, columns, mobileColumns } from "./TasksLayout";

const Tasks = ({mode}) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const initialState = window.innerWidth < 500 ? mobileColumns : columns;
  const [columnLayout, setColumnLayout] = useState(initialState);

  const navigate = useNavigate();

  const handleBugClick = (bug) => {
    navigate("/bugview", { state: bug });
  };
  window.onresize = () => {
    if (window.innerWidth < 500) {
      setColumnLayout(mobileColumns);
    } else {
      setColumnLayout(columns);
    }
  };

  return (
    <Box borderRadius={2} boxShadow={5} p={2} sx={{bgcolor: mode === 'dark' ? "background.dark" : "background.default"}}>
      <Typography
        mb={2}
        variant="h5"
        fontWeight={400}
        sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
      >
        Tasks
      </Typography>
      <Typography
        mb={2}
        variant="h6"
        fontWeight={400}
        sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
      >
        Assigned
      </Typography>
      <Box height={700}>
        <DataGrid
          rows={rows}
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
    </Box>
  );
};

export default Tasks;
