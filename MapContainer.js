import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			location: {lat: 20.9736199, lng: 105.8407837},
			position:[],
			count: 0,
			isRun: false,
			timeout: null
		}

		this.getLocation = this.getLocation.bind(this);
		this.timerLocation = this.timerLocation.bind(this);
	}

	getLocation(){
		if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition((position) => {
	    	this.state.position.push({lat: position.coords.latitude, lng: position.coords.longitude})
	    	this.setState({})
	    });
	  }
	}

	timerLocation(){
		this.getLocation();
		this.state.timeout = setTimeout(() => this.timerLocation(), 1000)
	}

	render(){
	  const mapStyles = {
	    width: '100%',
	    height: '100%',
	  };
	  const isRun = false;
	  
	  return (
	  	<div>
		  	<div>
		  		<p>GG map</p>
		  		<button onClick={() => {
		  			  if (navigator.geolocation) {
						    navigator.geolocation.getCurrentPosition((position) => {
						    	this.state.position.push({lat: position.coords.latitude, lng: position.coords.longitude})
						    	this.setState({})
						    });
						  }
		  		}}>Get Location</button>
		  		<button onClick={this.timerLocation}>Start</button>
		  		<button onClick={() => {clearTimeout(this.state.timeout)}}>Stop</button>
		  		<button onClick={() => this.setState({position:[]})}>Clear</button>
		  		<button onClick={() => {
		  			var input = document.getElementById("statePosition");
		  			input.value = JSON.stringify(this.state.position);
		  		}}>State</button>
		  		<button onClick={() => {
		  			var input = document.getElementById("statePosition");
		  			this.state.position = JSON.parse(input.value);
		  			this.setState({});
		  		}}>Convert</button>
		  	</div>
		  	<div>
		  		<textarea style={{width:"100%", height:"100px"}} id="statePosition"></textarea>
		  	</div>
		    <div>
			    <Map
			      google={this.props.google}
			      zoom={16}
			      style={mapStyles}
			      initialCenter={{ lat: this.state.location, lng: this.state.location}}>
			      {
			      	this.state.position.map((e,i) =>
			      		<Marker key={i} position={e} />
			      	)
			      }
			    </Map>
			  </div>
		  </div>
	  );
	}
}

//AIzaSyB_mPJMkZNbERCRoGkAYdIEpVzOW-LFWfY

export default GoogleApiWrapper({
  apiKey: "AIzaSyB_mPJMkZNbERCRoGkAYdIEpVzOW-LFWfY"
})(MapContainer)