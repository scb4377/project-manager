import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";
import { columns, mobileColumns } from "./ProjBugListLayout";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import { useEffect } from "react";

const ProjBugList = ({ state }) => {
  const { bugList } = useContext(AppContext);

  const navigate = useNavigate();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filteredList, setFilteredList] = useState(bugList);
  let initialState = window.innerHeight < 500 ? mobileColumns : columns;
  const [columnLayout, setColumnLayout] = useState(initialState);

  window.onresize = () => {
    if (window.innerWidth < 500) {
      setColumnLayout(mobileColumns);
    } else {
      setColumnLayout(columns);
    }
  };

  const setList = async () => {
    let temp = await bugList.filter((bug) => bug.projId === state._id)
    setFilteredList(temp)
  }

  useEffect(() => {
    setList()
  }, [bugList, state]);

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
      {console.log(filteredList)}
      {state !== null && filteredList.length > 0 ? (
        <DataGrid
          rows={filteredList}
          sx={{
            "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
              py: "20px",
            },
          }}
          getRowHeight={() => "auto"}
          getEstimatedRowHeight={() => 200}
          columns={columnLayout}
          pageSize={rowsPerPage}
          rowsPerPageOptions={[5, 10, 20, 50]}
          onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
          disableColumnSelector={true}
          disableSelectionOnClick={true}
          onRowClick={(e) => handleBugClick(e.row)}
        />
      ) : (
        <div>No bugs for this project</div>
      )}
    </Box>
  );
};

export default ProjBugList;
