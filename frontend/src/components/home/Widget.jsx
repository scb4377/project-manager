import { Box } from "@mui/material";
import {
  AreaChart,
  YAxis,
  XAxis,
  linearGradient,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import {
  KeyboardArrowUp,
  PersonOutlined,
  AccountTree,
  BugReport,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useState } from "react";

const Widget = ({ type, mode }) => {
  let data;
  let mongoData = {
    projects: 8,
  };

  switch (type) {
    case "projects":
      data = {
        title: "Projects",
        link: "See all projects",
        amt: mongoData.projects,
      };
      break;
    case "issues":
      data = {
        title: "Issues",
        link: "See all issues",
        amt: 5,
      };
      break;
    case "tasks":
      data = {
        title: "Tasks",
        link: "See all tasks",
        amt: 5,
      };
      break;
    default:
      break;
  }

  const [isHover, setIsHover] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    type === "projects" ? navigate("/projects") : type === "issues" ? navigate("/bugs") : navigate("/");
  };

  let style = isHover
    ? {
        fontSize: "12px",
        borderBottom: "1px solid transparent",
        width: "max-content",
        backgroundColor: "#2D6675",
        borderRadius: "3px",
        cursor: "pointer",
        padding: "0 2px",
        color: "white",
        transition: "0.2s all ease-in-out",
      }
    : {
        fontSize: "12px",
        borderBottom: "1px solid gray",
        width: "max-content",
        cursor: "pointer",
      };

  return (
    <Box
      justifyContent="space-between"
      flex={1}
      bgcolor={mode === "dark" ? "background.dark" : "background.light"}
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        boxShadow: 5,
        borderRadius: "5px",
        marginLeft: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <span style={{ fontWeight: "bold", fontSize: "14px", color: "gray" }}>
          {data.title}
        </span>
        <span style={{ fontSize: "28px", fontWeight: "300" }}>{data.amt}</span>
        <span
          style={style}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={handleClick}
        >
          {data.link}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <KeyboardArrowUp />
        <div>20%</div>
        {type === "projects" ? (
          <AccountTree
            sx={{
              fontSize: "30px",
              padding: "5px",
              backgroundColor: "accent.primary",
              borderRadius: "5px",
              alignSelf: "flex-end",
              color: "white",
            }}
          />
        ) : type === "issues" ? (
          <BugReport
            sx={{
              fontSize: "30px",
              padding: "5px",
              backgroundColor: "accent.primary",
              borderRadius: "5px",
              alignSelf: "flex-end",
              color: "white",
            }}
          />
        ) : (
          <BugReport
            sx={{
              fontSize: "30px",
              padding: "5px",
              backgroundColor: "accent.primary",
              borderRadius: "5px",
              alignSelf: "flex-end",
              color: "white",
            }}
          />
        )}
      </div>
    </Box>
  );
};

export default Widget;
