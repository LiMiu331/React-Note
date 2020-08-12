import React from 'react';
import {Button, Input ,List} from 'antd';
const styles = {
    todoList: {marginLeft:'30px',marginTop:'30px'}
};
const TodoListUI = (props)=> {
    return (
        <div className={'todo-list'} style={styles.todoList}>
            <div className={'todo-footer'}>
                <Input placeholder={'请输入'}
                       style={{width:'300px'}}
                       value={props.inputValue}
                       onChange={props.handleInputChange}
                />
                <Button type={'primary'} onClick={props.handleSubmit}>提交</Button>
            </div>
            <div className={'todo-footer'} style={{marginTop:'15px'}}>
                <List
                    style={{width:'300px'}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (
                        <List.Item onClick={(index) => {props.handleItemDelete(index)}}>
                            {item}
                        </List.Item>
                    )}
                >
                </List>
            </div>
        </div>
    )
}
export default TodoListUI;
