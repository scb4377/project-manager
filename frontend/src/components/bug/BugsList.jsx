import { DataGrid } from "@mui/x-data-grid";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { columns, mobileColumns } from "./BugsListLayout";
import { AppContext } from "../../context/Context";

const BugsList = () => {
  const { bugList, projList } = useContext(AppContext);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const initialState = window.innerWidth < 500 ? mobileColumns : columns;
  const [columnLayout, setColumnLayout] = useState(initialState);

  let tempList = bugList

  useEffect(() => {
    for (let i = 0; i < tempList.length; i++) {
      for (let k = 0; k < projList.length; k++) {
        if (tempList[i].projId === projList[k].id) {
          tempList[i].projId = projList[k].projTitle
        }
      }
    }
  }, [bugList])

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
    <DataGrid
      rows={tempList}
      columns={columnLayout}
      pageSize={rowsPerPage}
      rowsPerPageOptions={[5, 10, 20, 50]}
      onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
      disableSelectionOnClick={true}
      disableColumnSelector={true}
      columnBuffer={2}
      onRowClick={(e) => handleBugClick(e.row)}
    />
  );
};

export default BugsList;
