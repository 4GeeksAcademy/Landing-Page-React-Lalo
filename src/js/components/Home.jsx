import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import DataCard from "./DataCard";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<DataCard/>
			<Footer/>
		</div>
		);
};

export default Home;