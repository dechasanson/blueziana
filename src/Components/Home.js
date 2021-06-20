import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="wrapper">
        <section className="hero">
          <h1>You thirsty?</h1>
          <article>
            <p>
            Belly up to the bar and sip on a handcrafted 
            specialty cocktail, made with always fresh ingredients (and love).
            </p>
            <Link to="/Menu" className="button">Browse Our Menu</Link>
          </article>
        </section>
      </main>
    </>
  )
}

export default Home;