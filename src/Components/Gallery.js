import React from "react";

const Gallery = () => {
	return (
		<>
			<main className="container">
				<section className="title sights">
					<h1 className="title sounds">Sights & Sounds</h1>
				</section>
        <div className="intro">
          <h2>SOMETIMES IT'S LAID BACK. SOMETIMES IT'S WILD.</h2>
          <p>Which ones were you here for?</p>
        </div>
				<div className="intro">
					<h2>
						RHYTHM. BLUES. AND LOTS OF SOUL.
            </h2>
          <p>Sample some of the Blueziana's tunes from Greg's playlists.
						All songs are hand-picked and the playlists are arranged to keep
						mood just right!
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
					></iframe>
					<iframe
						src="https://open.spotify.com/embed/playlist/6rCxMiXeXGPOfgJGECHzMK?theme=0"
						width="25%"
						height="380"
						frameBorder="0"
						allowtransparency="true"
						allow="encrypted-media"
					></iframe>
					<iframe
						src="https://open.spotify.com/embed/playlist/4DpudB71fjVRNkmPokwfke"
						width="25%"
						height="380"
						frameBorder="0"
						allowtransparency="true"
						allow="encrypted-media"
					></iframe>
					<iframe
						src="https://open.spotify.com/embed/playlist/0JJPpMCPgjogHKIlcYOxNU?theme=0"
						width="25%"
						height="380"
						frameBorder="0"
						allowtransparency="true"
						allow="encrypted-media"
					></iframe>
				</section>
			</main>
		</>
	);
};

export default Gallery;
