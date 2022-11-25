import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import { Form, Input, TextArea, Stepper, Switch, DatePicker, Selector, Button, Slider, Toast } from 'antd-mobile'

export default function List(props) {
  const nameList = props.nameList
  const details = props.detail
  const save = (obj) => {
    console.log(obj, 'obj')
    Toast.show({ icon: 'success', content: '数据提交成功！' })
    // 向父组件传值，send是父组件方法
    props.send(obj)
  }
  useEffect(() => {
    console.log(details, 'details')
  }, [details])
  return (
    <div>
      <ul>
        {
          nameList && nameList.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <Form layout='horizontal' onFinish={save}
        initialValues={details}
        footer={
          <Button block type='submit' color='primary' size='middle'>
            提交
          </Button>
        }>
        <Form.Item name='names' label='姓名' rules={[{ required: true, message: '姓名不能为空' }]}>
          <Input placeholder='请输入姓名' clearable />
        </Form.Item>
        <Form.Item name='address' label='地址' help='详情地址'>
          <TextArea placeholder='请输入地址' maxLength={100} rows={2} showCount clearable />
        </Form.Item>
        <Form.Item name='amount' label='数量' childElementPosition='right'>
          <Stepper />
        </Form.Item>
        <Form.Item name='delivery' label='送货上门' childElementPosition='right'>
          <Switch />
        </Form.Item>
        <Form.Item name='birthday' label='生日' trigger='onConfirm' onClick={(e, datePickerRef) => { datePickerRef.current?.open() }}>
          <DatePicker>
            {
              value => value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期'
            }
          </DatePicker>
        </Form.Item>
        <Form.Item name='favoriteFruits' label='喜爱的水果'>
          <Selector columns={3} multiple options={[
            { label: '苹果', value: 'apple' },
            { label: '橘子', value: 'orange' },
            { label: '香蕉', value: 'banana' }
          ]} />
        </Form.Item>
        <Form.Item name='slider' label='滑块选择'>
          <Slider ticks step={10} />
        </Form.Item>
      </Form>
    </div>
  )
}
