import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Home.css'
import Todo from './Todo'
import InputTodo from './InputTodo'

const propTypes = {
  todos: React.PropTypes.array,
  addTodo: React.PropTypes.func,
  removeTodo: React.PropTypes.func
}

export default class Home extends Component {
  render() {
    console.log(this.props.removeTodo)
    const self = this
    return (
      <div>
        <div className={styles.container}>
          <img alt="daruma!" className={styles.daruma} src="static/img/daruma.png" />
          <InputTodo add={this.props.addTodo} />
          {
            this.props.todos.map(todo =>
              <Todo closeTodo={self.props.removeTodo} todo={todo} />)
          }
        </div>
      </div>
    )
  }
}

Home.propTypes = propTypes
