export const rows = [
  {
    id: 1,
    project: "test for spacing to see how",
    issue: "Snow",
    status: "Open",
    date: 35,
    priority: "4",
  },
  {
    id: 2,
    project: "test",
    issue: "Lannister",
    status: "Closed",
    date: 42,
    priority: "4",
  },
  {
    id: 3,
    project: "test",
    issue: "Lannister",
    status: "Open",
    date: 45,
    priority: "4",
  },
  {
    id: 4,
    project: "test",
    issue: "Stark",
    status: "Open",
    date: 16,
    priority: "4",
  },
  {
    id: 5,
    project: "test",
    issue: "Targaryen",
    status: "Closed",
    date: 54,
    priority: "4",
  },
  {
    id: 6,
    project: "test",
    issue: "Melisandre",
    status: "Open",
    date: 150,
    priority: "4",
  },
  {
    id: 7,
    project: "test",
    issue: "Clifford",
    status: "Closed",
    date: 44,
    priority: "4",
  },
  {
    id: 8,
    project: "test",
    issue: "Frances",
    status: "Open",
    date: 36,
    priority: "4",
  },
  {
    id: 9,
    project: "test",
    issue: "Roxie",
    status: "Closed",
    date: 65,
    priority: "4",
  },
  {
    id: 10,
    project: "test",
    issue: "Roxie",
    status: "Closed",
    date: 65,
    priority: "4",
  },
  {
    id: 11,
    project: "test",
    issue: "Roxie",
    status: "Closed",
    date: 65,
    priority: "4",
  },
];

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
