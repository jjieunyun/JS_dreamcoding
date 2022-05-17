
import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits'
import Navbar from './components/navbar';


//🍎jsx는 자바스크립트의 로직을 구현한다
//🌳{...}을 이용해서 비즈니스 로직을 화면에 출력해줄 수있다.

class App extends Component {
  state = {
    habits : [
        { id : 1, name : 'Reading', count : 0},
        { id : 2, name : 'Running', count : 0},
        { id : 3, name : 'coding', count : 0},
        { id : 4, name : 'working', count : 0}
    ],
};
    //이벤트함수
    handleInlreament = (habit)=> {

      const habits = [...this.state.habits];
      const index = habits.indexOf(habit)
      habits[index].count++;
      //⭐key는 habits이고 value는 로컬변수의 habits임! -> 동일하다면 하나로 생략가능함
      this.setState({habits : habits})
  }

  handleDereament = (habit)=> {
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit)
      const count = habits[index].count -1;
      habits[index].count = count < 0 ? 0 : count;
      this.setState({ habits })
  }

  handleDelete = (habit)=> {
      //console.log(`${habit.id}`)
      const paramId = habit.id;
      //🌳엘리쌤 답안
      //const habits = this.state.habits.filter(item => item.id !== paramId)
      //this.setState({habits})
      const index = this.state.habits.findIndex(habit => habit.id === paramId);
      this.state.habits.splice(index,1);
      this.setState({
          habits : this.state.habits
      })
  }

  handleAdd = (name)=> {
    const habits = [...this.state.habits, {id : Date.now(), name, count : 0}];
    this.setState({habits});
  }
  
  render() {
    return (
      <>
        <Navbar 
          totalCount={this.state.habits.filter(item=> item.count >0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleInlreament}
          onDecrement={this.handleDereament}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
        />
      </>
    );
  }
}

export default App;
