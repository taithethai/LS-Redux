import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tickCompleted } from './actions';
import { bindActionCreators } from 'redux';

class Todo extends Component {
  render() {
    console.log(this.props.list);
    if (this.props.list === null) return (<h2>Add something to your To-Do list!</h2>);
    return (
      <ol>
        {this.props.list.map((item, i) => {
          return(
            <div key={i} >
              <li>{item.value} {item.completed} <input type="checkbox" id="completed" defaultChecked={ item.completed } onChange={ () => { tickCompleted(item); console.log('>>>>',item, item.completed); } } /> </li>
            </div>
            );
        })}
      </ol>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    list:state.theList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ tickCompleted: tickCompleted,}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);