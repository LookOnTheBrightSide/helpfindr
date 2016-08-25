import React from 'react'
import ReactDOM from 'react-dom'
//entry point
let mountPoint = document.getElementById('root');

// navigation
let Navigation = React.createClass({
	render: function(){
		return (
				<header className ="top">
					<a className ="top__logo logo" href="#"><img src="logo.svg" /></a>
						<nav className ="top__navigation navigation">
							<ul className ="top__navigation__list">
								<li className ="top__navigation__list__link top__navigation__list__link--active"><a href="#">About</a></li>
								<li className ="top__navigation__list__link"><a href="#">Contact</a></li>
								<li className ="top__navigation__list__link"><a href="#">FAQ</a></li>
								<li className ="top__navigation__list__link"><a href="#">Sign In</a></li>
								<li className ="top__navigation__list__link"><a href="#">Register</a></li>
							</ul>
						</nav>
				</header>
			)
	}
});

// main section
let MainSection = React.createClass({
	render: function(){
		return (
				<main className ="main">
					<section className ="hero">
						<h1 className ="hero__welcome">A <span className ="highlight">free</span> jobs board for students</h1>
						<p className ="hero__phrase">
							We'll help you get that nixer!
						</p>
						<a href="#" className ="hero__action">Join</a>
					</section>
					<section className ="steps">
						<h1 className ="steps__heading center_heading">Get started in a few easy steps!</h1>
						<div className ="steps__details">
							<div className ="steps__details__student">
								<h3 className ="steps__details__student__heading center_heading">Students</h3>
								<ol className ="steps__details__student__list">
									<li className ="first">Tell us in which area you live</li>
									<li className ="second">Browse jobs in that area</li>
									<li className ="third">Apply for the ones you like</li>
									<li className ="fourth">Wait to hear back</li>
									<li className ="fifth">Profit!</li>
								</ol>
							</div>
							<div className ="steps__details__employer">
								<h3 className ="steps__details__employer__heading center_heading">Employers</h3>
								<ol className ="steps__details__employer__list">
									<li className ="first">Tell us where the work will be done</li>
									<li className ="second">Add your job offering</li>
									<li className ="third">Wait to hear from applicants</li>
									<li className ="fourth">Choose a person to do the job</li>
									<li className ="fifth">Sorted!</li>
								</ol>
							</div>
						</div>
					</section>
				</main>
			)
	}
});

let App = React.createClass({
	render: function(){
		return (
				<div>
					<Navigation />
					<MainSection />
				</div>
			)
	}
});



ReactDOM.render(<App />, mountPoint);