import React from 'react';
import {Button, Input ,List} from 'antd';
import store from "./store";
import {getAddItemAction, getDeleteItemAction, getInputChangeAction} from './store/actionCreators'
const styles = {
    todoList: {marginLeft:'30px',marginTop:'30px'}
};
class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <div className={'todo-list'} style={styles.todoList}>
                <div className={'todo-footer'}>
                    <Input placeholder={'请输入'}
                           style={{width:'300px'}}
                           value={this.state.inputValue}
                           onChange={this.handleInputChange}
                    />
                    <Button type={'primary'} onClick={this.handleSubmit}>提交</Button>
                </div>
                <div className={'todo-footer'} style={{marginTop:'15px'}}>
                    <List
                        style={{width:'300px'}}
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index) => (
                            <List.Item onClick={this.handleItemDelete.bind(this,index)}>
                                {item}
                            </List.Item>
                        )}
                    >
                    </List>
                </div>
            </div>
        )
    }
    handleInputChange(e){
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }
    handleSubmit(){
        const action = getAddItemAction()
        store.dispatch(action);
    }
    handleItemDelete(index){
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState());
    }
}

export default TodoList;
