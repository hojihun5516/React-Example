import React,{Fragment} from 'react'


class PhoneInfo extends React.Component {

  state={
    editing :false,
    name : '',
    phone : '',
  }

  handleRemove =() =>{
    const {info, onRemove} = this.props;
    onRemove(info.id);
  }


  handleToggleEdit=()=>{
//Tre->false로갈때
//onUpdate
//false->True로갈때
//name과 phone값(info)을 state에넣어야한다
const {info, onUpdate} =this.props;
if(this.state.editing){
  onUpdate(info.id,{
    name: this.state.name,
    phone: this.state.phone,
  });
}else{
  this.setState({
    name : info.name,
    phone: info.phone,
  });
}
    this.setState({
      editing : !this.state.editing,

    })
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render () {

    const { name, phone}=this.props.info;
    const {editing} = this.state;
    const style={
      border:'1px solid black',
      padding: '9px',
      margin : '9px',
    };

    console.log(name);

    return(
      <div style={style}>
      {
        editing ? (
          <Fragment>
          <div><input
            name="name"
            value ={this.state.name}
            onChange={this.handleChange}></input></div>
          <div><input
            name="phone"
              value = {this.state.phone}
             onChange={this.handleChange}></input></div>
          </Fragment>
        ) :(
          <Fragment>
          <div>{name}</div>
          <div>{phone}</div>
          </Fragment>
        )
      }
      <button onClick={this.handleRemove}>삭제</button>
      <button onClick={this.handleToggleEdit}>
        {editing ?'적용':'수정'}      </button>
      </div>
    );
  }
}

export default PhoneInfo;
