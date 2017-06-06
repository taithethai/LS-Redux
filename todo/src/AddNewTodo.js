import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addNewItem} from './actions'; // TODO write function for adding object
import { bindActionCreators } from 'redux';

class AddNewTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Put a new task here',
    }
    this.updateInputValue = this.updateInputValue.bind(this);
  }
  updateInputValue(e) {
    this.setState({value: e.target.value
    });
  } 
  render() {
    return(
      <form action="">
        New To Do: <input type="text" name={this.state.value} onChange={this.updateInputValue} /> <input type="button" onClick={ () => {this.props.addNewItem({value: this.state.value, key: this.props.list.length, completed: false}); console.log({value: this.state.value, key: this.props.list.length, completed: false})} }/> <br/>
      </form>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    list:state.theList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addNewItem: addNewItem,}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTodo);

// console.log('>>>>',this.state.value, this.props.list.length)
