import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <header className="header">
      <div className="header__intro">
      <h1>Hi, I'm Jordan</h1>
      <p>
        A self-taught full-stack engineer, with a penchant for front-end development, but able to do both. Expertise lies in HTML, CSS, JavaScript, Node.js, React, SQL & PostgreSQL.
        Previous commercial experience within the tech industry in a number of roles, from customer service to tech support. Recognised as a fast learner, determined, competent and friendly.      
      </p>
      </div>
      </header>
      <section className="projects">
        <div className="projects__card">
          <div className="projects__card--description">
            <h2>Crown Clothing</h2>
            <p>A full-stack React.js application of an example online shopping website, complete with products and prices for various categories. Firebase was implemented to store data and to provide a Google Sign-in Authentication, while the Stripe API was integrated to complete payment(s).</p>        
          </div>
          <div className="projects__card--links">
            <a href="https://github.com/jgeo777/crown-clothing">Repo</a>
            <a href="https://crown-app-live-version.herokuapp.com/">Project</a>          
          </div>
        </div>
        <div className="projects__card">
          <div className="projects__card--description">
            <h2>SmartBrain</h2>
            <p>A full-stack web application created using various front-end tools including HTML, CSS, React and Node.js. The Clarifai API was integrated to detect the faces. Upon URL entry, the API will locate and highlight the face(s) in the image using a blue square for each. User accounts must also be created to keep track of the user's entries.</p> 
          </div>
          <div className="projects__card--links">
            <a href="https://github.com/jgeo777/smart-brain">Repo</a>
            <a href="https://smart-brain-fe-server.herokuapp.com/">Project</a>           
          </div>
        </div>
        <div className="projects__card">
          <div className="projects__card--description">
            <h2>YelpCamp</h2>
            <p>A full-stack web application of a database of campgrounds/other places of interest to visit, displaying pricing information when clicked on and showing user reviews/comments. Users can also add new places of interest to the website.</p>        
          </div>
          <div className="projects__card--links">
            <a href="https://github.com/jgeo777/yelp-camp-refactored">Repo</a>
            <a href="https://secure-inlet-43618.herokuapp.com/">Project</a>        
          </div>
        </div>
      <div className="projects__card">
        <div className="projects__card--description">
          <h2>Movie Database</h2>
          <p>A full-stack React.js application of an online movie database, displaying all key information such as the movie titles, synopses, cast and related financial information (budget and revenue). The app has been styled using styled components, and TypeScript will later be implemented to refactor and optimise the code.</p>        
        </div>
        <div className="projects__card--links">
          <a href="https://github.com/jgeo777/movie-database">Repo</a>
          <a href="https://jg-movie-website.netlify.app/">Project</a>          
        </div>
      </div>      
    </section>
  </Layout>
)

export default IndexPage
