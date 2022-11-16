import { useState } from "react";
import Carousel, { autoplayPlugin, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import LandBox from "./components/landbox";
import DefaultIcon from "../../assets/png/DefaultIcon.png";
import Divider from "../../assets/png/Divider.png";
import LogoSenai from "../../assets/png/logosenai.png";
import Footer from "../../assets/png/footer.png";
import Landing12 from "../../assets/png/landing12.png";
import Landing2 from "../../assets/png/landing2.png";
import "./home.scss";

export function Home() {
	return (
		<div className="containerA">
			<LandBox
				align="firstTextL"
				title1='"NÃO SEJA UM'
				title2=" PATO"
				title3='."'
				subtext="~Mestre Facundes"
				image={Landing12}
			/>
			<LandBox
				align="firstTextR"
				title1='"SOBRE'
				title2=" NÓS"
				title3='."'
				subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				image={Landing2}
			/>
			<LandBox
				align="firstTextL"
				title1='"NOSSA'
				title2=" EQUIPE"
				title3='."'
				subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				image={null}
			/>
			<div className='carousel'>
				<Carousel

					plugins={[
						"infinite",
						{
							resolve: autoplayPlugin,
							options: {
								interval: 2000,
							}
						},
						{
							resolve: slidesToShowPlugin,
							options: {
								numberOfSlides: 4,
							}
						},
					]}
					animationSpeed={1000}
				>
					<img width="70%" src={DefaultIcon} />
					<img width="70%" src={DefaultIcon} />
					<img width="70%" src={DefaultIcon} />
					<img width="70%" src={DefaultIcon} />
				</Carousel>
			</div>
			<img width="100%" src={Divider} alt='' />
			<div className='apoio'>
				<h1 className='textApoio'>NOSSOS <span className='orangeText'>APOIADORES</span></h1>
				<div className='apoioContainer'>
					<img className='senai' src={LogoSenai} alt='' />
					<img className='apoioCircle' src={DefaultIcon} alt='' />
					<img className='apoioCircle' src={DefaultIcon} alt='' />
					<img className='apoioCircle' src={DefaultIcon} alt='' />
				</div>
			</div>
			<div className='rodape'>
				<span >
					<strong>Entre em contato: </strong>
					<br />
                    pato@email.com
				</span>
				<div>
					<img width="100%" src={Footer} alt='' />
				</div>
			</div>
		</div>
		
	);
}


