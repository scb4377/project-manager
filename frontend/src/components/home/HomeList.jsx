import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

const columns = [
  { id: "bug", label: "Bug", minWidth: 170 },
  { id: "created", label: "Created", minWidth: 100 },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
  },
  {
    id: "dueBy",
    label: "Due by",
    minWidth: 170,
    align: "right",
  },
  {
    id: "assignees",
    label: "Assignees",
    minWidth: 170,
    align: "right",
  },
];

function createData(id, bug, created, status, dueBy, assignees) {
  return { id, bug, created, status, dueBy, assignees };
}

const rows = [
  createData(1, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
  createData(2, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
  createData(3, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
  createData(4, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
  createData(5, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
  createData(6, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
  createData(7, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
  createData(8, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
  createData(9, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
  createData(10, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
  createData(11, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
  createData(12, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
  createData(13, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
  createData(14, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
  createData(15, "Test Bug", "4-7-2020", "closed", "4-7-2020"),
];

const HomeList = () => {
  const navigate = useNavigate()

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleBugClick = (bug) => {
    navigate('/bugview', {state: bug})
  };

  return (
    <>
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={i}
                    sx={{ cursor: "pointer" }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          onClick={()=>handleBugClick(row)}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default HomeList;
