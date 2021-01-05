import React, {Component} from 'react';  
class Alert extends Component {  
  render(){  
    return (  
        <div className={"alert alert-" + this.props.type}>
        <h4>{this.props.header}</h4>
        <p>{this.props.children}</p>
      </div>
    );  
  }  
}
export default Alert;  
