import React from 'react'
import './users.scss'
import DataTable from '../../components/dataTable/dataTable'

const Users=()=> {
  return (
    <div className='users'>
      <div className="info">
        <button>Add New User</button>
      </div>

      <DataTable />
    </div>
  )
}

export default Users