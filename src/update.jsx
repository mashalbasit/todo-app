import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateTask } from './createReducer'

function Update() {
    const {serialNo} = useParams()
    const tasks = useSelector((state) => state.tasks)
    const existingTasks = tasks.filter(f => f.serialNo == serialNo)
    const {task, checkBox } = existingTasks[0];
    const [utask, setTask] = useState(task)
    const [ucheckBox, setCheckBox] = useState (checkBox)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleUpdate = (event) => {
        event.preventDefault()
        dispatch(updateTask({
            serialNo: serialNo,
            task: utask,
            checkBox: ucheckBox
        }))
        navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h2>Update Task</h2>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor='task'>Task:</label>
                    <input type='text' name='task' className='form-control' placeholder='enter task' value={utask} onChange={e => setTask(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='checkBox'>CheckBox:</label>
                    <input type='text' name='checkBox' className='form-control' placeholder='enter checkBox' value={ucheckBox} onChange={e => setCheckBox(e.target.value)} />
                </div><br />
                <button className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update