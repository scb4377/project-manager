export const columns = [
  {
    field: "projTitle",
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
            color: "white",
            minWidth: "73px",
            textAlign: "center",
            fontSize: ".8rem",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "2px",
            padding: "5px 0",
            borderRadius: "5px",
            color:
            cellValues.value === 4
            ? "#ff2800"
            : cellValues.value === 3
            ? "#ffae04"
            : cellValues.value === 2
            ? "#a0a500"
            : cellValues.value === 1
            ? "#006a13"
            : "transparent",
          }}
        >
          {cellValues.value === 4
            ? "Critical"
            : cellValues.value === 3
            ? "Major"
            : cellValues.value === 2
            ? "Minor"
            : cellValues.value === 1
            ? "Low"
            : null}
        </div>
      );
    },
  },
];

export const mobileColumns = [
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
    flex: 2,
    align: "center",
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "white",
            minWidth: "73px",
            textAlign: "center",
            fontSize: ".8rem",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "2px",
            padding: "5px 0",
            borderRadius: "5px",
            color:
            cellValues.value === 4
            ? "#ff2800"
            : cellValues.value === 3
            ? "#ffae04"
            : cellValues.value === 2
            ? "#a0a500"
            : cellValues.value === 1
            ? "#006a13"
            : "transparent",
          }}
        >
          {cellValues.value === 4
            ? "Critical"
            : cellValues.value === 3
            ? "Major"
            : cellValues.value === 2
            ? "Minor"
            : cellValues.value === 1
            ? "Low"
            : null}
        </div>
      );
    },
  },
];
