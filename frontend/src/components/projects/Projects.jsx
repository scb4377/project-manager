import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/Context";
import { columns, mobileColumns } from "./ProjectListLayout";

const rows = [
  {
    id: 1,
    projName: "Snow",
    phase: "Deployment",
    startdate: 35,
    team: "DevOps",
  },
  {
    id: 2,
    projName: "Lannister",
    phase: "Testing",
    startdate: 42,
    team: "Quality Assurance",
  },
  {
    id: 3,
    projName: "Lannister",
    phase: "Building",
    startdate: 45,
    team: "Development",
  },
  {
    id: 4,
    projName: "Stark",
    phase: "Designing",
    startdate: 16,
    team: "Design",
  },
  {
    id: 5,
    projName: "Targaryen",
    phase: "Defining",
    startdate: 54,
    team: "Defining",
  },
  {
    id: 6,
    projName: "Melisandre",
    phase: "Planning",
    startdate: 150,
    team: "Strategic",
  },
];

const Projects = () => {
  const { mode, projList } = useContext(AppContext);

  const [rowsPerPage, setRowsPerPage] = useState(10);
  let initialState = window.innerWidth < 500 ? mobileColumns : columns;
  const [columnLayout, setColumnLayout] = useState(initialState);

  const navigate = useNavigate();

  const handleProjClick = (project) => {
    navigate("/projectview", { state: project });
  };

  window.onresize = () => {
    if (window.innerHeight < 500) {
      setColumnLayout(mobileColumns);
    } else {
      setColumnLayout(columns);
    }
  };

  return (
    <Box
      p={2}
      m={2}
      mr={4}
      bgcolor={mode === "dark" ? "background.dark" : "background.default"}
      borderRadius="5px"
      gap={3}
      boxShadow={5}
      sx={{ margin: { xs: 0 }, height: "100%" }}
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
        justifyContent="space-evenly"
        flexWrap="wrap"
        flexDirection="row"
        width={500}
        maxWidth="100%"
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
      <Box
        style={{ height: 370, width: "100%" }}
        sx={{ "& .gridHeader": { color: "white", bgcolor: "accent.primary" } }}
      >
        <DataGrid
          rows={projList}
          columns={columnLayout}
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
