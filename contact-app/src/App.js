import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;

  state = {
    information: [],
  }
  handleRemove = (id) =>{
    const {information} = this.state;
    this.setState({
      information : information.filter(info => info.id !== id)
    });
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      //기존에있던배열은 안건드리고 새로운걸 push한다고생각
      information: information.concat({
        //이건 name: data.name
        //phone: data.phone와 같은말임
        ...data,

        id: this.id++,
      })
    });
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList onRemove={this.handleRemove} data={this.state.information}/>
      </div>
    );
  }
}

export default App;
