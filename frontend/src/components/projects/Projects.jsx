import {
  Avatar,
  AvatarGroup,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    field: "name",
    headerName: "Name",
    flex: 2,
    headerClassName: 'gridHeader'
  },
  { field: "startdate", headerName: "Start Date", flex: 1, headerClassName: 'gridHeader' },
  { field: "phase", headerName: "Phase", flex: 1, headerClassName: 'gridHeader' },
  { field: "team", headerName: "Team", flex: 1, headerClassName: 'gridHeader' },
];

const rows = [
  { id: 1, name: "Snow", phase: "Deployment", startdate: 35, team: "DevOps" },
  {
    id: 2,
    name: "Lannister",
    phase: "Testing",
    startdate: 42,
    team: "Quality Assurance",
  },
  {
    id: 3,
    name: "Lannister",
    phase: "Building",
    startdate: 45,
    team: "Development",
  },
  { id: 4, name: "Stark", phase: "Designing", startdate: 16, team: "Design" },
  {
    id: 5,
    name: "Targaryen",
    phase: "Defining",
    startdate: 54,
    team: "Defining",
  },
  {
    id: 6,
    name: "Melisandre",
    phase: "Planning",
    startdate: 150,
    team: "Strategic",
  },
];

const Projects = ({ mode }) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const navigate = useNavigate();

  const handleProjClick = (project) => {
    navigate("/projectview", { state: project });
  };

  return (
    <Box
      p={2}
      m={2}
      mr={4}
      bgcolor={mode === "dark" ? "background.dark" : "background.light"}
      borderRadius="5px"
      gap={3}
      boxShadow={5}
    >
      <Typography
        mb={2}
        fontWeight={400}
        variant="h5"
        // color={"accent.primary"}
        sx={{ borderBottom: "0.5px solid gray", width: "max-content" }}
      >
        Projects
      </Typography>
      <Box
        mb={2}
        p={0}
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        width={500}
      >
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>{rows.length}</span>
          <label>Projects</label>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>4</span>
          <label>Defining</label>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>3</span>
          <label>Planning</label>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>32</span>
          <label>Desigining</label>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>32</span>
          <label>Building</label>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>32</span>
          <label>Testing</label>
        </span>
      </Box>
      <Box style={{ height: 370, width: "100%" }} sx={{"& .gridHeader": { color: 'white', bgcolor: 'accent.primary'}}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={rowsPerPage}
          rowsPerPageOptions={[5, 10, 20, 50]}
          onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
          disableColumnSelector={true}
          disableSelectionOnClick={true}
          onRowClick={(e) => handleProjClick(e.row)}
        />
      </Box>
    </Box>
  );
};

export default Projects;
