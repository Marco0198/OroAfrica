//import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  
  { field: 'Groups', headerName: 'Groups', width: 183 },
  { field: 'Trade', headerName: 'Trade', width: 180 },
  {
    field: 'Retail',
    headerName: 'Retail',
    width: 180 
  },
  {
    field: 'Discount',
    headerName: 'Discount',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 170,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  }

 
];

const rows = [
  { id: 1, Trade: 'Snow', Groups: 'Jon', Discount: 35 ,Retail:'0'},
  { id: 2, Trade: 'Snow', Groups: 'Jon', Discount: 35 ,Retail:'0'},
  { id: 3, Trade: 'Snow', Groups: 'Jon', Discount: 35 ,Retail:'0'},
  { id: 4, Trade: 'Snow', Groups: 'Jon', Discount: 35 ,Retail:'0'},
  { id: 5, Trade: 'Snow', Groups: 'Jon', Discount: 35 ,Retail:'0'},
  { id: 6, Trade: 'Snow', Groups: 'Jon', Discount: 35 ,Retail:'0'},
  { id: 7, Trade: 'Snow', Groups: 'Jon', Discount: 35 ,Retail:'0'},
  { id: 8, Trade: 'Snow', Groups: 'Jon', Discount: 35 ,Retail:'0'},
  { id: 9, Trade: 'Snow', Groups: 'Jon', Discount: 35 ,Retail:'0'},
  { id: 10, Trade: 'Snow', Groups: 'Jon', Discount: 35 ,Retail:'0'},

];

export default function DataTable() {
  return (
    <div style={{ height: 635, width:'100%',marginTop:'20px',backgroundColor:'white'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[1]}
        checkboxSelection
      />
    </div>
  );
}