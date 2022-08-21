export const columns = [
    {
      field: "projTitle",
      headerName: "Project",
      flex: 2,
      headerClassName: 'gridHeader'
    },
    { field: "createdAt", headerName: "Start Date", flex: 1, headerClassName: 'gridHeader' },
    { field: "stage", headerName: "Stage", flex: 1, headerClassName: 'gridHeader' },
    { field: "teamName", headerName: "Team", flex: 1, headerClassName: 'gridHeader' },
  ];

  export const mobileColumns = [
    {
      field: "projTitle",
      headerName: "Project",
      flex: 2,
      headerClassName: 'gridHeader'
    },
    { field: "stage", headerName: "Stage", flex: 1, headerClassName: 'gridHeader' },
  ];