import React, { useRef, useState, useEffect } from 'react'

import editIcon from '../../../assets/edit.png'
import deleteIcon from '../../../assets/remove.png'
import done from '../../../assets/tick.png'

import { updateTodo, deleteTodo } from '../../../redux/action'
import { useDispatch } from 'react-redux'

import './Todo.css'

const Todo = ({ data }) => {

    const dispatch = useDispatch()

    const rand = useRef('rotateRight')

    const [isEdit, setIsEdit] = useState(false)

    const [title, setTitle] = useState(data.title)
    const [description, setDesc] = useState(data.description)
    const [color, setColor] = useState(data.color)
    const [touchedTitle, setTouchedTitle] = useState(false)
    const [touchedDesc, setTouchedDesc] = useState(false)

    useEffect(() => {
        let r = Math.floor(Math.random() * 100)
        let n = Math.floor(Math.random() * 10)
        rand.current = Math.floor(Math.random() * r) / n > 5 ? 'rotateRight' : 'rotateLeft'
    }, [isEdit])

    const update = () => {
        dispatch(updateTodo({ color, title, description }, data._id))
        setIsEdit(!isEdit)
    }
    return (
        <div className={['Todo', rand.current].join(' ')} >
            <div style={{ width: '100%', height: '100%', backgroundColor: color, padding: '10px' }}>
                <div className='Header'>
                    <div className='Title'>
                        {
                            isEdit
                                ? <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    type='text'
                                    onBlur={() => {
                                        setTouchedTitle(true)
                                    }}
                                    onFocus={() => {
                                        setTouchedTitle(false)
                                    }}
                                    placeholder='Enter title'
                                    style={{ width: '200px', height: '20px' }} />
                                : <p style={{ fontSize: '30px' }}><b>{title}</b></p>}
                        {title === "" && touchedTitle ? <p style={{ margin: 0, padding: 0, fontSize: '10px', color: 'red' }}>Please Enter title</p> : null}
                    </div>
                    <div className='IconsCont'>
                        {
                            isEdit
                                ? <img src={done} alt='' width='40%' height='80%'
                                    onClick={(title !== "" && description !== "") ? update : console.log('isEmpty')} />
                                : <img src={editIcon} alt='' width='40%' height='80%' onClick={() => setIsEdit(!isEdit)} />}

                        <img src={deleteIcon} alt='' width='40%' height='80%' onClick={() => dispatch(deleteTodo(data._id))} />
                    </div>
                </div>
                <div className='Desc'>
                    {
                        isEdit
                            ? <input
                                value={description}
                                onChange={(e) => setDesc(e.target.value)}
                                style={{ width: '200px', height: '20px', marginTop: '40px' }}
                                type='text'
                                onBlur={() => {
                                    setTouchedDesc(true)
                                }}
                                onFocus={() => {
                                    setTouchedDesc(false)
                                }}
                                placeholder='Enter description' />
                            : <p style={{ padding: 15 }}>{description}</p>}
                    {description === "" && touchedDesc ? <p style={{ fontSize: '10px', color: 'red' }}>Please enter description</p> : null}
                    {
                        isEdit
                            ? <input
                                value={color}
                                type='color'
                                style={{ marginLeft: '5px' }}
                                onChange={(e) => setColor(e.target.value)} />
                            : null}
                </div>
            </div>
        </div>
    )
}

export default Todo