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
import { KeyboardArrowUp, PersonOutlined } from "@mui/icons-material";

const Widget = ({ type, mode }) => {
  let data;
  let mongoData = {
    projects: 8
  }

  switch(type){
    case "projects":
      data={
        title: "Projects",
        link: "See all projects",
        icon: "",
        amt: mongoData.projects
      };
      break;
    case "priority":
      data={
        title: "Priority",
        link: "See all tickets",
        icon: "",
      };
      break;
    case "tasks":
      data={
        title: "Tasks",
        link: "See all tasks",
        icon: "",
        amt: 5
      }
      break;
    default:
      break;
  }
  
  return (
    <Box
      justifyContent="space-between"
      flex={1}
      bgcolor={mode === 'dark' ? "background.dark" : "background.light"} 
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        boxShadow: 5,
        borderRadius: "5px",
        marginLeft: '0'
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
          style={{
            fontSize: "12px",
            borderBottom: "1px solid gray",
            width: "max-content",
          }}
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
        <PersonOutlined
          sx={{
            fontSize: "18px",
            padding: "5px",
            backgroundColor: "skyblue",
            borderRadius: "5px",
            alignSelf: "flex-end",
          }}
        />
      </div>
    </Box>
  );
};

export default Widget;
