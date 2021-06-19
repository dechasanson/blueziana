import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const Gallery = (props) => {
	const { activePic, setActivePic } = props;

	const [newPic, setNewPic] = useState("");

	return (
		<>
			<main className="main">
				<section className="title sights">
					<h1 className="title sounds">Sights & Sounds</h1>
				</section>
				<div className="banner">
					<h2 className="intro">SOMETIMES IT'S LAID BACK. SOMETIMES IT'S WILD.</h2>
					<p className="intro">Which times were you here for?</p>
				</div>
				<Container fluid="lg">
					<Row>
						<Col lg={true} >
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120531/Blueziana%20Sights/Bar_Front_Large_symrz4.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
              </Col>
              <Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120532/Blueziana%20Sights/Beginnings_o5jvnx.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
						</Col>
            <Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120532/Blueziana%20Sights/Barflies_wk5l7f.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
						</Col>
					</Row>
          <Row>
						<Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120533/Blueziana%20Sights/Party_5_ogspsv.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
              </Col>
              <Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120532/Blueziana%20Sights/Cinco_gmcmcy.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
						</Col>
            <Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120532/Blueziana%20Sights/Cinco_laughing_swhs03.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
						</Col>
					</Row>
          <Row>
						<Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120533/Blueziana%20Sights/Party_3_m2m6iy.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
              </Col>
              <Col lg={true}> 
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120533/Blueziana%20Sights/Party_2_p69ytu.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
						</Col>
            <Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120533/Blueziana%20Sights/Party_4_evwbqx.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
						</Col>
					</Row>
          <Row>
						<Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120533/Blueziana%20Sights/Party_7_cnazeb.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
              </Col>
              <Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120533/Blueziana%20Sights/Party_6_vztbr3.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
						</Col>
            <Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120534/Blueziana%20Sights/Party_n0a1fs.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
						</Col>
					</Row>
          <Row>
						<Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120532/Blueziana%20Sights/Lady_in_a_Blue_Dress_vynjjf.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
              </Col>
              <Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120534/Blueziana%20Sights/Poppin_Dom_mo4weh.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
						</Col>
            <Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120534/Blueziana%20Sights/Poppin_Dom_2_kam4js.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
						</Col>
					</Row>
          <Row>
						<Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120534/Blueziana%20Sights/Shaking_aqlgyl.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
              </Col>
              <Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120534/Blueziana%20Sights/Roots_ndta6m.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
						</Col>
            <Col lg={true}>
							<Image
								src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624120533/Blueziana%20Sights/Hot_marg_gllqrp.jpg"
								fluid
								onClick={async (event) => {
									event.preventDefault();
									setActivePic(event.target.value);
									setNewPic(event.target.value);
									console.log("The active pic is", activePic);
									console.log("the newPic is", newPic);
								}}
							/>
						</Col>
					</Row>
				</Container>
				<div className="banner">
					<h2 className="intro">RHYTHM. BLUES. AND LOTS OF SOUL.</h2>
					<p className="intro">
						Sample some of the Blueziana's tunes from Greg's playlists. All
						songs are hand-picked and the playlists are arranged to keep mood
						just right!
					</p>
				</div>
				<section className="sounds">
					<iframe
						src="https://open.spotify.com/embed/playlist/1OteGHnTNBIFDkXj5xHKcg"
						width="25%"
						height="380"
						frameBorder="0"
						allowtransparency="true"
            allow="encrypted-media"
            title="picture"
					></iframe>
					<iframe
						src="https://open.spotify.com/embed/playlist/6rCxMiXeXGPOfgJGECHzMK?theme=0"
						width="25%"
						height="380"
						frameBorder="0"
						allowtransparency="true"
            allow="encrypted-media"
            title="picture"
					></iframe>
					<iframe
						src="https://open.spotify.com/embed/playlist/4DpudB71fjVRNkmPokwfke"
						width="25%"
						height="380"
						frameBorder="0"
						allowtransparency="true"
            allow="encrypted-media"
            title="picture"
					></iframe>
					<iframe
						src="https://open.spotify.com/embed/playlist/0JJPpMCPgjogHKIlcYOxNU?theme=0"
						width="25%"
						height="380"
						frameBorder="0"
						allowtransparency="true"
            allow="encrypted-media"
            title="picture"
					></iframe>
				</section>
			</main>
		</>
	);
};

export default Gallery;
