import React, {Component} from 'react';  
import './App.css';
import Alert from './Components/Alert';
import Media from './Components/Media';
  
class App extends Component {  
  render(){  
    return (  
      <div className="container border-0 text-center mt-4 mb-4">
        <h3 className="border border-3 mt-3 mb-3 bg-warning p-2">Ez Pz</h3>
        <div className="alert alert-info mb-4">  
          <h3 className="text-danger">Ini Project Pertama React JS</h3>  
          <p>Belajar React JS itu mudah</p>  
          <button className="mr-1 btn btn-success">Setuju</button>  
          <button className="btn btn-info">Iya Dong</button>  
        </div>
        <h3 className="border border-3 mt-3 mb-3 bg-warning p-2">Alert</h3>
        <Alert type="danger" header="Fatal Error">  
          Ini adalah alert dengan tipe danger  
        </Alert>  
        <Alert type="success" header="Berhasil">  
          Ini adalah alert dengan tipe success  
        </Alert>  
        <Alert type="warning" header="Warning">  
          Ini adalah alert dengan tipe warning  
        </Alert>  
        <h3 className="border border-5 mt-3 mb-3 bg-warning p-2">Media</h3>
        <Media image="reactjs.png" title="React JS">  
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
          scelerisque ante sollicitudin. Cras purus odio, vestibulum  
          in vulputate at, tempus viverra turpis  
        </Media>  
        <Media image="angular.png" title="Angular JS"> 
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
          scelerisque ante sollicitudin. Cras purus odio, vestibulum  
          in vulputate at, tempus viverra turpis  
        </Media>
        <h3 className="border border-3 mt-3 mb-3 bg-warning p-2">State And Props</h3>
        <Alert type={this.state.type} header={this.state.header}>  
          {this.state.content}  
        </Alert>
        <hr />  
        <h4 className="bg-primary p-3">Alert Control</h4>  
        <b className="text-left mb-3">Tipe Alert</b>
        <select className="form-control" name="type" value={this.state.type}  
          onChange={this.changeTypeAlert}>  
          <option value="success">Success</option>  
          <option value="warning">Warning</option>  
          <option value="danger">Danger</option>  
          <option value="info">Info</option>
        </select>
        <b className="text-left mb-3">Header Alert</b>  
        <input  
          type="text" name="header" className="form-control" value={this.state.header}  
          onChange={this.changeHeaderAlert} />  
        <b className="text-left mb-3">Content Alert</b>  
        <input  
          type="text" name="content" className="form-control" value={this.state.content}  
          onChange={this.changeContentAlert} />
      </div>  
    );  
  }
  constructor(){
    super();  
    this.state = {  
      type: "danger",  
      header: "Fatal Error",  
      content: "ini content dari alert"  
    }  
  }
  // fungsi untuk mengubah tipe  
    changeTypeAlert = (event) =>{  
  	  this.setState({type: event.target.value});  
  	}  
  	// fungsi untuk mengubah header  
  	changeHeaderAlert = (event) => {  
  	  this.setState({header: event.target.value});  
  	}  
  	// fungsi untuk mengubah content  
  	changeContentAlert = (event) => {  
  	  this.setState({content: event.target.value});  
  	}  


}
export default App;
