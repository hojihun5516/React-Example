import React from 'react'
import PropTypes from 'prop-types'

class PhoneInfo extends React.Component {
  handleRemove =() =>{
    const {info, onRemove} = this.props;
    onRemove(info.id);
  }
  render () {

    const { name, phone}=this.props.info;

    const style={
      border:'1px solid black',
      padding: '9px',
      margin : '9px',
    };
    return(
      <div style={style}>
      <div>{name}</div>

      <div>{phone}</div>

      <div onClick={this.handleRemove}>삭제</div>
      </div>
    );
  }
}

export default PhoneInfo;
