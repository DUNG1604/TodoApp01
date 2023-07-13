import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux'
import filtersSlice, { addTodo, selectTodoList } from '../../redux/slice/todoListSlice';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
  const dispatch = useDispatch()
  const [filterName, setFilterName] = useState('')
  const [filterPriority, setFilterPriority] = useState('Medium')
  const searchText = useSelector(state => state.filter.search)
  const priorityText = useSelector(state => state.filter.priority)
  const todoList = useSelector(state => state.todos.todoList.filter((todo) => {
    if (!priorityText.length) {
      return todo.name.includes(searchText)
    } else {
      return todo.name.includes(searchText) && priorityText.includes(todo.prioriry)
    }
  }))
  const addBtnClick = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: filterName,
      prioriry: filterPriority,
      completed: false
    }))
    setFilterName('')
    setFilterPriority('Medium')
  }
  const nameChange = (e) => {
    setFilterName(e.target.value)
  }
  const priorityChange = (value) => {
    console.log({ value })
    setFilterPriority(value)
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => (
          <Todo key={todo.id} name={todo.name} prioriry={todo.prioriry} completed={todo.completed} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input

            value={filterName}
            onChange={nameChange}
          />
          <Select
            defaultValue="Medium"
            value={filterPriority}
            onChange={priorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={addBtnClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
