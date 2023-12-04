import React, {useEffect, useState} from "react";
function Home ({seconds})
{

	return (<div className="clock">
		<div className="calendar">
		<i className="far fa-clock"></i>
		</div>
		<div className="one">{Math.floor(seconds / 100000) % 10}</div>
		<div className="two">{Math.floor(seconds / 10000) % 10}</div>
		<div className="three">{Math.floor(seconds / 1000) % 10}</div>
		<div className="four">{Math.floor(seconds / 100) % 10}</div>
		<div className="five">{Math.floor(seconds / 10) % 10}</div>
		<div className="six">{Math.floor(seconds / 1) % 10}</div>
		
	</div>);
}
export default Home
