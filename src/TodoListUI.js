import React from 'react';
import {Button, Input ,List} from 'antd';
const styles = {
    todoList: {marginLeft:'30px',marginTop:'30px'}
};
class TodoListUI extends React.Component{
    render() {
        return (
            <div className={'todo-list'} style={styles.todoList}>
                <div className={'todo-footer'}>
                    <Input placeholder={'请输入'}
                           style={{width:'300px'}}
                           value={this.props.inputValue}
                           onChange={this.props.handleInputChange}
                    />
                    <Button type={'primary'} onClick={this.props.handleSubmit}>提交</Button>
                </div>
                <div className={'todo-footer'} style={{marginTop:'15px'}}>
                    <List
                        style={{width:'300px'}}
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item,index) => (
                            <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>
                                {item}
                            </List.Item>
                        )}
                    >
                    </List>
                </div>
            </div>
        )
    }
}
export default TodoListUI;
