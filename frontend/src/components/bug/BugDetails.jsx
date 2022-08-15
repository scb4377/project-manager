import { Avatar, styled, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/Context";

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const BugDetails = ({ bug }) => {
  const { mode } = useContext(AppContext)
  const info =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit sit voluptas qui vitae laudantium! Minus veniam dolor animi in rem aliquam quasi fugit tempora labore, explicabo magnam laboriosam doloribus vitae!";

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={400}
        align="left"
        mb={2}
        sx={{ borderBottom: "0.5px solid gray", width: "max-content",  }}
      >
        Bug Details
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "right",
            marginBottom: "16px",
            minWidth: "200px",
            maxWidth: "50%",
            gap: "10px",
          }}
        >
          <StyledDiv sx={{ flex: 4, gap: "100px", marginBottom: "8px" }}>
            <label style={{ fontWeight: "500" }}>Title:</label>
            <span>Lorem ipsum dolor sit amet consectetur aeriam, </span>
          </StyledDiv>
          <StyledDiv sx={{ flex: 1, gap: "50px", marginLeft: "auto" }}>
            <label
              style={{
                textAlign: "left",
                minWidth: "100px",
                fontWeight: "500",
              }}
            >
              Status:
            </label>
            <span style={{ minWidth: "100px" }}>{bug.status}</span>
          </StyledDiv>
          <StyledDiv sx={{ flex: 1, gap: "50px", marginLeft: "auto" }}>
            <label
              style={{
                textAlign: "left",
                minWidth: "100px",
                fontWeight: "500",
              }}
            >
              Due By:
            </label>
            <span style={{ minWidth: "100px" }}>{bug.dueBy}</span>
          </StyledDiv>
          <StyledDiv sx={{ flex: 1, gap: "50px", marginLeft: "auto" }}>
            <label
              style={{
                textAlign: "left",
                minWidth: "100px",
                fontWeight: "500",
              }}
            >
              Created:
            </label>
            <span style={{ minWidth: "100px" }}>{bug.created}</span>
          </StyledDiv>
          <StyledDiv
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: "50px",
              marginLeft: "auto",
            }}
          >
            <label
              style={{
                textAlign: "left",
                minWidth: "100px",
                fontWeight: "500",
              }}
            >
              Creator:
            </label>
            <span style={{ minWidth: "100px" }}>
              <Avatar alt="replace" src="" sx={{ marginLeft: "auto" }} />
            </span>
          </StyledDiv>
        </div>
        <div>Statistics</div>
      </div>

      <div>
        <h4
          style={{
            fontWeight: 400,
            borderBottom: "0.5px solid gray",
            width: "max-content",
            marginBottom: "8px",
          }}
        >
          Information
        </h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
          voluptates illum reprehenderit ab tenetur autem, fuga dignissimos
          ipsum harum adipisci odit enim totam perspiciatis saepe repellat
          ducimus obcaecati alias eveniet! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusantium quia enim consequuntur
          fugit! Esse qui repudiandae maxime. Temporibus consequatur illum
          tempora dolores, ea quod, soluta nemo fugit consequuntur impedit
          iusto.
        </p>
      </div>
    </div>
  );
};

export default BugDetails;
