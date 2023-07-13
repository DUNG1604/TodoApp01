import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePriority, updateSearch, updateStatus } from '../../redux/slice/filterSlice';
const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch()
  const [search, setSearch] = useState()
  const [status, setStatus] = useState()
  const [prioriry, setPriority] = useState([])
  const searchChange = (e) => {
    setSearch(e.target.value)
    dispatch(updateSearch(e.target.value))
  }
  const statusChange = (e) => {
    setStatus(e.target.value)
    dispatch(updateStatus(e.target.value))
  }
  const priorityChange = (value) => {
    setPriority(value)
    dispatch(updatePriority(value))
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text'
          value={search}
          onChange={searchChange}
        />
      </Col>
      {/* <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={statusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col> */}
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={prioriry}
          onChange={priorityChange}
        >
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
      </Col>
    </Row>
  );
}
