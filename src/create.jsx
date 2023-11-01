import React, { useState } from 'react'
import { addTask } from './createReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Create() {
    const [task, setTask] = useState('')
    const [checkBox, setCheckBox] = useState ('')
    const tasks = useSelector((state) => state.tasks)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTask({serialNo: tasks[tasks.length - 1 ].serialNo + 1, task:task, checkBox:checkBox}))
        navigate('/')
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='task'>Task:</label>
                    <input type='text' name='task' className='form-control' placeholder='enter task' onChange = {e => setTask(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='checkBox'>CheckBox:</label>
                    <input type='text' name='checkBox' className='form-control' placeholder='enter checkBox' onChange = {e => setCheckBox(e.target.value)}/>
                </div><br />
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create