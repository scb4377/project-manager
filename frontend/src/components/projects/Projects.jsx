import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/Context";
import { columns, mobileColumns } from "./ProjectListLayout";

const Projects = () => {
  const { mode, projList, teamList } = useContext(AppContext);
  const [data, setData] = useState({})

  let tempList = projList
  
  useEffect(() => {
    // Changes team id to team name
    // Need to work on date 
    for (let i = 0; i < tempList.length; i++) {
      let date = new Date(tempList[i].createdAt)
      tempList[i].createdAt = date.toString().split('2022 ')
      
      for (let k = 0; k < teamList.length; k++) {
        if (tempList[i].team === teamList[k]._id) {
          tempList[i].team = teamList[k].teamName
        }
      }
    }

    let defining = 0
    let planning = 0
    let designing = 0
    let building = 0
    let testing = 0

    projList.forEach(proj => {
      if (proj.stage === "Defining") {
        defining += 1
      } else if (proj.stage === "Planning") {
        planning += 1
      }
       else if (proj.stage === "Designing") {
        designing += 1
      }
       else if (proj.stage === "Building") {
        building += 1
      }
       else if (proj.stage === "Testing") {
        testing += 1
      }
    })

    setData({
      defining,
      planning,
      designing,
      building,
      testing
    })

  }, [projList])

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
          <span style={{ fontWeight: "bold" }}>{projList.length}</span>
          <label>Projects</label>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>{data.defining}</span>
          <label>Defining</label>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>{data.planning}</span>
          <label>Planning</label>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>{data.designing}</span>
          <label>Desigining</label>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>{data.building}</span>
          <label>Building</label>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>{data.testing}</span>
          <label>Testing</label>
        </span>
      </Box>
      <Box
        style={{ height: 370, width: "100%" }}
        sx={{ "& .gridHeader": { color: "white", bgcolor: "accent.primary" } }}
      >
        <DataGrid
          rows={tempList}
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
