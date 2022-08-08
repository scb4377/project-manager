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
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const data = [
  { name: "Test Project", created: "06-07-2020", sdlc: 'Planning', team: ['A', ['Andrew', "Robert", "Amy"]] },
  { name: "Update", created: "03-07-2020", sdlc: 'Defining', team: ['B', ['Andrew', "Robert", "Amy"]] },
  { name: "Possible test", created: "02-07-2020", sdlc: 'Designing', team: ['C', ['Andrew', "Robert", "Amy"]] },
  { name: "Impossible", created: "01-07-2020", sdlc: 'Building', team: ['D', ['Andrew', "Robert", "Amy"]] },
  { name: "Turning", created: "05-07-2020", sdlc: 'Testing', team: ['E', ['Andrew', "Robert", "Amy"]] },
  { name: "Deployed", created: "05-01-2020", sdlc: 'Deployment', team: ['F', ['Andrew', "Robert", "Amy"]] },
];

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;

  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const sortedRowInformation = (rowArray, comparator) => {
  const stabilizedRowArray = rowArray.map((el, i) => [el, i]);
  stabilizedRowArray.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  return stabilizedRowArray.map((el) => el[0]);
};

const Projects = ({mode}) => {
  const [direction, setDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const navigate = useNavigate()

  const handleProjClick = (project) => {
    navigate('/projectview', {state:project})
  }

  const handleRequestSort = (e, prop) => {
    const isAscending = valueToOrderBy === prop && direction === "asc";
    setValueToOrderBy(prop);
    setDirection(isAscending ? "desc" : "asc");
  };

  const createSortHandler = (prop) => (e) => {
    handleRequestSort(e, prop);
  };

  const handlePageChange = (e, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (e) => {
    console.log(e.target.value)
    setRowsPerPage(parseInt(e.target.value), 10)
    setPage(0)
  }

  return (
    <Box p={2} m={2} mr={4} bgcolor={mode === 'dark' ? "background.dark" : "background.light"}  borderRadius="5px" gap={3} boxShadow={5}>
      <Typography mb={2} fontWeight={400} variant="h6">
        Projects
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell key="name">
                <TableSortLabel
                  active={valueToOrderBy === "name"}
                  direction={valueToOrderBy === "name" ? direction : "asc"}
                  onClick={createSortHandler("name")}
                >
                  Name
                </TableSortLabel>
              </TableCell>

              <TableCell key="created">
                <TableSortLabel
                  active={valueToOrderBy === "created"}
                  direction={valueToOrderBy === "created" ? direction : "desc"}
                  onClick={createSortHandler("created")}
                >
                  Created
                </TableSortLabel>
              </TableCell>

              <TableCell key="sdlc">
                <TableSortLabel
                  active={valueToOrderBy === "sdlc"}
                  direction={valueToOrderBy === "sdlc" ? direction : "desc"}
                  onClick={createSortHandler("sdlc")}
                >
                  Phase
                </TableSortLabel>
              </TableCell>

              <TableCell key="team"  sx={{textAlign: 'center'}}>
                <TableSortLabel
                  active={valueToOrderBy === "team"}
                  direction={valueToOrderBy === "team" ? direction : "desc"}
                  onClick={createSortHandler("team")}
                >
                  Team
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedRowInformation(
              data,
              getComparator(direction, valueToOrderBy)
            ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((project, i) => (
              <TableRow onClick={() => handleProjClick(project)} key={i} sx={{cursor: 'pointer', ":hover": {backgroundColor: mode === 'dark' ? 'background.dark' : 'lightgray'}}} >
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.created}</TableCell>
                <TableCell>{project.sdlc}</TableCell>
                <TableCell align="left">
                  <div></div>
                    {project.team[0]}
                    
                    {/* <AvatarGroup max={4}>
                        {project.team[1].map((person, i) => (
                            <Avatar key={i} alt={person} src="" />
                        ))}
                    </AvatarGroup> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={ e => handleChangeRowsPerPage(e)}
       />
    </Box>
  );
};

export default Projects;
