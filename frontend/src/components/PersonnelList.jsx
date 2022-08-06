import {
    Avatar,
    AvatarGroup,
    Box,
    Collapse,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
  import { useState } from "react";

const data = [
    {
      team: [
        "A",
        [
          {
              id: 1,
              name: "Andrew Garfield",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 2,
              name: "Robert",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 3,
              name: "Amy",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 4,
              name: "John",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 5,
              name: "Albert",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
        ],
      ],
    },
    {
      team: [
        "B",
        [
          {
              id: 1,
              name: "Andrew Garfield",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 2,
              name: "Robert",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 3,
              name: "Amy",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 4,
              name: "John",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 5,
              name: "Albert",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
        ],
      ],
    },
    {
      team: [
        "C",
        [
          {
              id: 1,
              name: "Andrew Garfield",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 2,
              name: "Robert",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 3,
              name: "Amy",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 4,
              name: "John",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 5,
              name: "Albert",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
        ],
      ],
    },
    {
      team: [
        "D",
        [
          {
              id: 1,
              name: "Andrew Garfield",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 2,
              name: "Robert",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 3,
              name: "Amy",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 4,
              name: "John",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 5,
              name: "Albert",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
        ],
      ],
    },
    {
      team: [
        "E",
        [
          {
            id: 1,
            name: "Andrew Garfield",
            role: "Software Engineer l",
            phone: "(706)-949-0000",
          },
          {
            id: 2,
            name: "Robert",
            role: "Software Engineer l",
            phone: "(706)-949-0000",
          },
          {
            id: 3,
            name: "Amy",
            role: "Software Engineer l",
            phone: "(706)-949-0000",
          },
          {
            id: 4,
            name: "John",
            role: "Software Engineer l",
            phone: "(706)-949-0000",
          },
          {
            id: 5,
            name: "Albert",
            role: "Software Engineer l",
            phone: "(706)-949-0000",
          },
        ],
      ],
    },
    {
      team: [
        "F",
        [
          {
              id: 1,
              name: "Andrew Garfield",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 2,
              name: "Robert",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 3,
              name: "Amy",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 4,
              name: "John",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
            {
              id: 5,
              name: "Albert",
              role: "Software Engineer l",
              phone: "(706)-949-0000",
            },
        ],
      ],
    },
  ];
  
  const Row = ({ row }) => {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.team[0]}
          </TableCell>
          <TableCell>
            <AvatarGroup max={4} sx={{justifyContent: 'center'}}>
              {row.team[1].map((person) => (
                <Avatar key={person.id} alt={person.name} src="" />
              ))}
            </AvatarGroup>
          </TableCell>
        </TableRow>
  
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography
                  variant="h6"
                  fontWeight={400}
                  gutterBottom
                  component="div"
                >
                  Team Members
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="center">Role</TableCell>
                      <TableCell align="right" sx={{paddingRight: '20px'}}>Phone</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.team[1].map((person) => (
                      <TableRow key={person.id}>
                        <TableCell component="th" scope="row">
                          {person.name}
                        </TableCell>
                        <TableCell align="center">{person.role}</TableCell>
                        <TableCell align="right">{person.phone}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  };

const PersonnelList = () => {
  return (
    <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Name</TableCell>
                <TableCell align="center">Employees</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((team, i) => (
                <Row key={i} row={team} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  )
}

export default PersonnelList