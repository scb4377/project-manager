export const columns = [
  {
    field: "project",
    headerName: "Project",
    headerClassName: "gridHeader",
    flex: 2,
  },
  {
    field: "issue",
    headerName: "Issue",
    headerClassName: "gridHeader",
    flex: 3,
  },
  {
    field: "priority",
    headerName: "Priority",
    headerClassName: "gridHeader",
    flex: 1,
    align: "center",
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "black",
            minWidth: "100px",
            textAlign: "center",
            fontSize: ".8rem",
            fontWeight: "400",
            textTransform: "uppercase",
            letterSpacing: "2px",
            padding: "5px 0",
            borderRadius: "5px",
            backgroundColor:
              cellValues.value === "4"
                ? "#ff2800"
                : cellValues.value === "3"
                ? "#E18B16"
                : cellValues.value === "2"
                ? "#F1E04A"
                : cellValues.value === "1"
                ? "#72B5BE"
                : "transparent",
          }}
        >
          {cellValues.value === "4"
            ? "Critical"
            : cellValues.value === "3"
            ? "Major"
            : cellValues.value === "2"
            ? "Minor"
            : cellValues.value === "1"
            ? "Low"
            : null}
        </div>
      );
    },
  },
];

export const mobileColumns = [
  {
    field: "project",
    headerName: "Project",
    headerClassName: "gridHeader",

  },
  {
    field: "priority",
    headerName: "Priority",
    headerClassName: "gridHeader",
    align: "center",
    flex: 2,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "black",
            minWidth: "100px",
            textAlign: "center",
            fontSize: ".8rem",
            fontWeight: "400",
            textTransform: "uppercase",
            letterSpacing: "2px",
            padding: "5px 0",
            borderRadius: "5px",
            backgroundColor:
              cellValues.value === "4"
                ? "#ff2800"
                : cellValues.value === "3"
                ? "#E18B16"
                : cellValues.value === "2"
                ? "#F1E04A"
                : cellValues.value === "1"
                ? "#72B5BE"
                : "transparent",
          }}
        >
          {cellValues.value === "4"
            ? "Critical"
            : cellValues.value === "3"
            ? "Major"
            : cellValues.value === "2"
            ? "Minor"
            : cellValues.value === "1"
            ? "Low"
            : null}
        </div>
      );
    },
  },
];
