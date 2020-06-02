import React,{Component} from 'react';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			languages : [
				{name: "Java", votes: 0},
				{name: "Python", votes: 0},
				{name: "Php", votes: 0},
				{name: "Go", votes: 0}
      ],
			operand1:'',
			sc:0
		}
	}
  parameter=(e)=>{
    this.setState({
     operand1: e.target.value
    });
  }
	vote (i) {
			this.setState({
				sc:1
			})
		let newLanguages = [...this.state.languages];
		newLanguages[i].votes++;
		// function swap(array, i, j) {
		// 	var temp = array[i];
		// 	array[i] = array[j];
		// 	array[j] = temp;
		// }
    this.setState({languages: newLanguages});
		
	}

	render(){
		return(
			<div>
				<h1 style={{"marginTop":"0",color:"black",fontSize:"35px"}}>Vote for your Favourite</h1>
				<br />
				<div style={{justifyContent:"center",alignItems:"center",display:"flex",paddingLeft:"5px",paddingRight:"5px"}}>
				<div className="languages">
					{
						this.state.languages.map((lang, i) => 
							<div key={i} className="language">
								<div className="voteCount">
									{lang.votes}
								</div>
								<div className="languageName">
									{lang.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Click Here</button>
							</div>
						)
					}
				</div>
				</div>
		</div>
		);
	}
}
export default App;