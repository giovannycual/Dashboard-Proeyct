import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import "./dataTable.scss"

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, status: false },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, status: true },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, status: true },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, status: true },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, status: true },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, status: true },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: true },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status: true },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: true },
];

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: "avatar", headerName: "Avatar", with: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />
        }
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: "status", headerName: "Status", with: 100, type: 'boolean'
    },
    {
        field:"actions",headerName:"Actions",with:100,
        render:(params) =>{
            return <div className='actions'>
                <div className='view'>View</div>
                <div className='delete'>Delete</div>
            </div>
            },
    }
];

const DataTable = () => {
    return (
        <div className='dataTable'>
            <DataGrid
                className='dataGrid'
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                slots={{
                    toolbar: GridToolbar,
                }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    )
}

export default DataTable