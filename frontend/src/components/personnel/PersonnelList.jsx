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
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import { useEffect } from "react";

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

const Row = ({ team }) => {
  const { userList, teamList } = useContext(AppContext);

  const [open, setOpen] = useState(false);
  let employees = [];

  if (team && userList) {
    for (let i = 0; i < team.empIds.length; i++) {
      for (let k = 0; k < userList.length; k++) {
        if (team.empIds[i] === userList[k]._id) {
          employees.push(userList[k]);
        }
      }
    }
  }

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
          {team.teamName}
        </TableCell>
        {window.innerWidth > 500 && (
          <TableCell>
            <AvatarGroup max={4} sx={{ justifyContent: "center" }}>
              {employees.length > 0 &&
                employees.map((person) => (
                  <Avatar
                    key={person._id}
                    alt={person.firstName}
                    src={person.img}
                  />
                ))}
            </AvatarGroup>
          </TableCell>
        )}
      </TableRow>

      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                mb={2}
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
                    <TableCell align="right" sx={{ paddingRight: "20px" }}>
                      Phone
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employees.length > 0 &&
                    employees.map((person) => (
                      <TableRow key={person._id}>
                        <TableCell component="th" scope="row">
                          {person.firstName}
                        </TableCell>
                        <TableCell align="center">
                          {person.roles.User === 2001
                            ? "Software Engineer 1"
                            : "Role"}
                        </TableCell>
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

const PersonnelList = ({ mode }) => {
  const { teamList } = useContext(AppContext);
  return (
    <TableContainer sx={{ border: "0.5px solid gray" }} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead sx={{ bgcolor: "accent.primary" }}>
          <TableRow>
            <TableCell />
            <TableCell sx={{ color: "white" }}>Team</TableCell>
            {window.innerWidth > 500 && (
              <TableCell align="center" sx={{ color: "white" }}>
                Employees
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            bgcolor: mode === "dark" ? "background.dark" : "background.light",
          }}
        >
          {teamList.map((team) => (
            <Row key={team._id} team={team} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PersonnelList;
