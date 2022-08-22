import {
  Box,
  createTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from "@mui/material";
import { useEffect, useState } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/projects/Projects";
import Personnel from "./components/personnel/Personnel";
import Settings from "./components/settings/Settings";
import BugView from "./components/bug/BugView";
import ProjectView from "./components/projects/ProjectView";
import Profile from "./components/profile/Profile";
import MobileSpeedDial from "./components/sidebar/MobileSpeedDial";
import Bugs from "./components/bug/Bugs";
import Tasks from "./components/tasks/Tasks";
import Login from "./components/login/Login";
import { AppContext } from "./context/Context";
import { getBugs, getProjects, getTeams, getUsers } from "./context/BugContext";

function App() {
  const [mode, setMode] = useState("light");
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");
  const [userList, setUserList] = useState([]);
  const [bugList, setBugList] = useState([]);
  const [projList, setProjList] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [assigned, setAssigned] = useState([]);

  const formatDate = (date) => {
    let temp = new Date(date);
    let str = temp.toString();

    let newDate = str.split(/\s\d{2}[:]/gi)[0];

    return newDate;
  };

  const pullBugs = async () => {
    let bugs = await getBugs();
    setBugList(bugs);

    let projects = await getProjects();
    projects.forEach((proj) => (proj.createdAt = formatDate(proj.createdAt)));
    setProjList(projects);

    let teams = await getTeams();
    setTeamList(teams);

    let users = await getUsers();
    setUserList(users);
  };

  useEffect(() => {
    if (auth) {
      pullBugs();
      
      
    }

    // if (user && bugList && bugList.length > 0) {
    //   let temp = bugList.filter((bug) => console.log(bug));
    //   setAssigned(temp);

    //   setTaskList(user.tasks);
    // }
  }, [auth]);

  const theme = createTheme({
    root: {
      "&.MuiDataGrid-columnHeaders": {
        color: "#2D6675",
      },
    },
    palette: {
      mode: mode,
      primary: {
        main: "#2D6675",
      },
      background: {
        dark: "rgba(255,255,255,.05)",
        gray: "lightgray",
        offWhite: "#f3f3f3",
      },
      textInput: {
        dark: "#FFF",
      },
      accent: {
        primary: "#2D6675",
        hover: "#3F8698",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider
        value={{
          mode,
          setMode,
          auth,
          setAuth,
          bugList,
          taskList,
          setTaskList,
          projList,
          teamList,
          userList,
          formatDate,
          user,
          setUser,
          pullBugs,
          assigned,
          setAssigned,
        }}
      >
        {!auth ? (
          <Login />
        ) : (
          <Paper
            sx={{ height: { xs: "100%", sm: "100%" }, overflowY: "scroll" }}
          >
            <Box sx={{ maxHeight: "100vh" }}>
              <Router>
                <Navbar />
                <Box
                  flexDirection="row"
                  spacing={2}
                  justifyContent="space-between"
                  sx={{
                    display: "flex",
                    height: "100%",
                    minHeight: { xs: "calc(100vh - 56px)", sm: "100%" },
                  }}
                >
                  <Box>
                    <Sidebar style={{ height: "calc(100vh - 70px)" }} />
                  </Box>
                  <MobileSpeedDial />
                  <Box
                    sx={{
                      overflowY: "scroll",
                      width: "100%",
                      minHeight: { xs: "100%", sm: "max-content" },
                      maxHeight: { sm: "calc(100vh - 65px)" },
                      bgcolor:
                        mode === "dark"
                          ? "background.primary"
                          : "background.offWhite",
                    }}
                  >
                    <Box
                      flex={11}
                      maxWidth="1100px"
                      p={2}
                      sx={{
                        width: "100%",
                        margin: "auto",
                        height: { xs: "100%", sm: "max-content" },
                      }}
                    >
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/personnel" element={<Personnel />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/bugview" element={<BugView />} />
                        <Route path="/projectview" element={<ProjectView />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/bugs" element={<Bugs />} />
                        <Route path="/tasks" element={<Tasks />} />
                      </Routes>
                    </Box>
                  </Box>
                </Box>
              </Router>
            </Box>
          </Paper>
        )}
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
