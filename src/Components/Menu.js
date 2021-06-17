import React, { useState } from "react";

const Menu = () => {
	const { activeTab, setActiveTab } = useState("bourbon");

	function openLiquor(liquorName) {
		// Declare all variables
		var i, tabcontent, tablinks;

		// Get all elements with class="tabcontent" and hide them
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}

		// Get all elements with class="tablinks" and remove the class "active"
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace("active", "");
		}

		// Show the current tab, and add an "active" class to the button that opened the tab
		document.getElementById(liquorName).style.display = "block";
	}

	function defaultOpen() {
		document.getElementById("defaultOpen").click();
	}

	return (
		<>
			<main className="container" id="menu">
				<div className="title menuTitle">
            <h1 className="title">Pick Your Poison</h1>
				</div>

				{/* Tab links */}
				<div className="tab">
					<button
						className="tablinks"
						id="defaultOpen"
						onClick={(event) => {
							openLiquor("Bourbon");
							event.currentTarget.className += "active";
						}}
					>
						Bourbon & Whiskey
					</button>
					<button
						className="tablinks"
						onClick={(event) => {
							openLiquor("Gin");
							event.currentTarget.className += "active";
						}}
					>
						Gin
					</button>
					<button
						className="tablinks"
						onClick={(event) => {
							openLiquor("Vodka");
							event.currentTarget.className += "active";
						}}
					>
						Vodka
					</button>
					<button
						className="tablinks"
						onClick={(event) => {
							openLiquor("Tequila");
							event.currentTarget.className += "active";
						}}
					>
						Tequila & Rum
					</button>
					<button
						className="tablinks"
						onClick={(event) => {
							openLiquor("Beer");
							event.currentTarget.className += "active";
						}}
					>
						Beer, Wine, & Bubbly
					</button>
					<button
						className="tablinks"
						onClick={(event) => {
							openLiquor("Other");
							event.currentTarget.className += "active";
						}}
					>
						Mules & Other Libations
					</button>
				</div>

				{/* <!-- Tab content --> */}

				<div id="Bourbon" className="tabcontent">
					<h2>Bourbon and Whiskey</h2>
					<div className="drinkItem">
						<p>SAZERAC</p>
						<p>rye whiskey, bitters, herbsaint, orange garnish</p>
					</div>
					<div className="drinkItem">
						<p>OLD FASHIONED</p>
						<p>bourbon, bitters, maraschino cherry, sugar, orange garnish</p>
					</div>
					<div className="drinkItem">
						<p>BACON OLD FASHIONED</p>
						<p>bacon bourbon, bitters, sugar</p>
					</div>
					<div className="drinkItem">
						<p>MANHATTAN</p>
						<p>bourbon, bitters, sweet vermouth, maraschino cherry</p>
					</div>
					<div className="drinkItem">
						<p>WHISKEY SOUR</p>
						<p>whiskey, lemon, sugar</p>
					</div>
					<div className="drinkItem">
						<p>MINT JULEP</p>
						<p>bourbon, fresh mint, sugar</p>
					</div>
					<div className="drinkItem">
						<p>BRAMBLE ON</p>
						<p>bourbon, lemon, sugar, chambord or blackberry brandy</p>
					</div>
					<div className="drinkItem">
						<p>PEANUT BUTTER CUP</p>
						<p>peanut butter whiskey, chocolate liqueur</p>
					</div>
					<div className="drinkItem">
						<p>BOURBONTINI</p>
						<p>bourbon, grenadine, lime</p>
					</div>
					<div className="drinkItem">
						<p>VACATIONED RUSSIAN</p>
						<p>bourbon, kahlua, irish cream</p>
					</div>
					<div className="drinkItem">
						<p>RED SNAPPER</p>
						<p>blended whiskey, cranberry juice, sugar</p>
					</div>
					<div className="drinkItem">
						<p>IRISH COFFEE</p>
						<p>irish whiskey, coffee, whipped cream</p>
					</div>
				</div>

				<div id="Gin" className="tabcontent">
					<h2>Gin</h2>
					<div className="drinkItem">
						<p>LADY IN A BLUE DRESS</p>
						<p>gin, creme de violette, lemon, blue curacao</p>
					</div>
					<div className="drinkItem">
						<p>WHITE LADY</p>
						<p>
							gin, creme de violette, lemon, blue curacao; optional: egg white
						</p>
					</div>
					<div className="drinkItem">
						<p>ORANGE SLICE</p>
						<p>gin, elderflower liqueur, lime</p>
					</div>
					<div className="drinkItem">
						<p>ORANGE LAZARUS</p>
						<p>gin, elderflower liqueur, aperol, orange, lemon</p>
					</div>
					<div className="drinkItem">
						<p>CASCAIS</p>
						<p>gin, soda water or lemon-lime soda, seasonal fruit, sugar</p>
					</div>
					<div className="drinkItem">
						<p>BENNETT</p>
						<p>gin, angostura bitters, sugar</p>
					</div>
					<div className="drinkItem">
						<p>JALAPENO LEMON DROP</p>
						<p>gin or vodka, lime, jalapeno, sugar</p>
					</div>
					<div className="drinkItem">
						<p>THIN MINT</p>
						<p>gin, creme de menthe, chocolate liqueur</p>
					</div>
					<div className="drinkItem">
						<p>GREYHOUND</p>
						<p>gin or vodka, pink grapefruit, sugar</p>
					</div>
					<div className="drinkItem">
						<p>MARTINI</p>
						<p>gin or vodka, vermouth, olive, onion</p>
					</div>
				</div>

				<div id="Vodka" className="tabcontent">
					<h2>Vodka</h2>
					<div className="drinkItem">
						<p>LONG ISLAND ICED TEA</p>
						<p>vodka, white rum, gin, tequila, lemon</p>
					</div>
					<div className="drinkItem">
						<p>BLOODY MARY</p>
						<p>vodka, zing zang, lemon, tobasco, worcestershire</p>
					</div>
					<div className="drinkItem">
						<p>MARTINI</p>
						<p>vodka or gin, vermouth, olive, onion</p>
					</div>
					<div className="drinkItem">
						<p>PEPPERMINT MARTINI</p>
						<p>vodka, peppermint schnapps, sugar</p>
					</div>
					<div className="drinkItem">
						<p>ESPRESSO MARTINI</p>
						<p>vodka, coffee liqueur, cream, coffee</p>
					</div>
					<div className="drinkItem">
						<p>CUCUMBER MARTINI</p>
						<p>cucumber vodka, sugar</p>
					</div>
					<div className="drinkItem">
						<p>CHOCOLATE MARTINI</p>
						<p>vodka, creme de cacao, chocolate liqueur</p>
					</div>
					<div className="drinkItem">
						<p>WHITE RUSSIAN</p>
						<p>vodka, kahlua, milk</p>
					</div>
					<div className="drinkItem">
						<p>COSMOPOLITAN</p>
						<p>vodka, cranberry, lime</p>
					</div>
					<div className="drinkItem">
						<p>OLD-TIME CUCUMBER FIZZ</p>
						<p>vodka, st. germain, cucumber, lemon, sugar, club soda</p>
					</div>
					<div className="drinkItem">
						<p>GREYHOUND</p>
						<p>vodka or gin, pink grapefruit, sugar</p>
					</div>
					<div className="drinkItem">
						<p>JALAPENO LEMON DROP</p>
						<p>vodka or gin, lime, jalapeno, sugar</p>
					</div>
				</div>
				<div id="Tequila" className="tabcontent">
					<h2>Tequila</h2>
					<div className="drinkItem">
						<p>PALOMA</p>
						<p>tequila, grapefruit soda, sugar</p>
					</div>
					<div className="drinkItem">
						<p>TEQUILA SUNRISE</p>
						<p>tequila, orange juice, maraschino cherry, orange garnish</p>
					</div>
					<div className="drinkItem">
						<p>MARGARITA</p>
						<p>tequila, lime, cointreau</p>
					</div>
					<div className="drinkItem">
						<p>TEXAS TWO-STEP</p>
						<p>tequila, orange juice</p>
					</div>
					<div className="drinkItem">
						<p>MEXICAN CRAWL</p>
						<p>tequila, tangerine lemonade</p>
					</div>
					<br></br>
					<h2>Rum</h2>
					<div className="drinkItem">
						<p>PINA COLADA</p>
						<p>rum, pineapple, coconut cream - blended with ice</p>
					</div>
					<div className="drinkItem">
						<p>DAQUIRI</p>
						<p>rum, sugar, seasonal fruit - blended with ice</p>
					</div>
					<div className="drinkItem">
						<p>BUSHWACKER</p>
						<p>rum, coffee liqueur, irish cream, cream - blended with ice</p>
					</div>
					<div className="drinkItem">
						<p>HURRICANE</p>
						<p>rum, passion fruit, orange, lime, grenadine</p>
					</div>
				</div>

				<div id="Beer" className="tabcontent">
					<h2>Wine & Bubbly</h2>
					<div className="drinkItem">
						<p>FRENCH 75</p>
						<p>champagne, gin or cognac, lemon juice</p>
					</div>
					<div className="drinkItem">
						<p>MIMOSA</p>
						<p>champagne, orange juice</p>
					</div>
					<div className="drinkItem">
						<p>CHAMPAGNE COCKTAIL</p>
						<p>champagne, sugar, bitters; optional: brandy</p>
					</div>
					<br></br>
					<div className="drinkItem">
						<p>
							An assortment of red and white wine, champagne, and prosecco is
							also available.
						</p>
					</div>
					<br></br>
					<h2>Beer</h2>
					<div className="drinkItem">
						<h3>Domestic Beers - when available</h3>
						<p>Miller Lite</p>
						<p>Miller High Life</p>
						<p>Abita Amber</p>
						<p>Bud Light</p>
						<p>Coors Banquet</p>
					</div>
					<br></br>
					<div className="drinkItem">
						<h3>Imported Beers - when available</h3>
						<p>Stella Artois</p>
						<p>Corona</p>
						<p>Modelo</p>
						<p>Dos Equis</p>
					</div>
				</div>

				<div id="Other" className="tabcontent">
					<h2>Mules & Other Libations</h2>
					<div className="drinkItem">
						<p>MOSCOW MULE</p>
						<p>vodka, ginger beer, lime juice</p>
					</div>
					<div className="drinkItem">
						<p>KENTUCKY MULE</p>
						<p>bourbon, ginger beer, lime juice, mint</p>
					</div>
					<div className="drinkItem">
						<p>MEXICAN MULE</p>
						<p>tequila, ginger beer, lime juice</p>
					</div>
					<div className="drinkItem">
						<p>BAHAMA MULE</p>
						<p>rum, ginger beer, lime juice</p>
					</div>
					<div className="drinkItem">
						<p>PIMM'S CUP</p>
						<p>pimm's #1, lemon-lime soda or ginger ale</p>
					</div>
					<div className="drinkItem">
						<p>GRASSHOPPER</p>
						<p>creme de menthe, creme de cacao, heavy cream</p>
					</div>
					<div className="drinkItem">
						<p>ELDERFLOWER CITRUS</p>
						<p>elderflower liqueur, pink grapefruit juice, rhubarb bitters</p>
					</div>
					<div className="drinkItem">
						<p>OJEN FRAPPE</p>
						<p>ojen, bitters, water, crushed ice</p>
					</div>
					<div className="drinkItem">
						<p>GOLDEN CADILLAC</p>
						<p>galliano, half & half, sugar</p>
					</div>
					<div className="drinkItem">
						<p>CAIPIRINHA</p>
						<p>cachaca, lime juice, sugar</p>
					</div>
					<div className="drinkItem">
						<p>PURPLE</p>
						<p>if you don't know, you better call somebody!</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default Menu;
