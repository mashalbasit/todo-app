import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask } from './createReducer'

function Home() {
    const tasks = useSelector((state) => state.tasks)
    const dispatch = useDispatch()
    const handleDelete = (serialNo) => {
        dispatch(deleteTask({serialNo: serialNo}))
    }
  return (
    <div className='container'>
        <h1>TODO List</h1>
        <Link to="/create"className='btn btn-success my-3'>Create +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Tasks</th>
                    <th>Check Box</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo.serialNo}</td>
                        <td>{todo.task}</td>
                        <td>{todo.checkBox}</td>
                        <td>
                            <Link to ={`/edit/${todo.serialNo}`}className='btn btn-sm btn-primary'>Edit</Link>
                            <button onClick={() => {handleDelete(todo.serialNo)}} className='btn btn-sm btn-danger ms-2'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default Home