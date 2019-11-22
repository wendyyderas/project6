import React from 'react'
import '../styles.css'

const Home = (props) => {
	return (
		<>
		<div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://bit.ly/2Yx7pJe"   class="d-block w-100"/>
                </div>
                <div class="carousel-item">
                  <img src="https://bit.ly/2nS4GO5"   class="d-block w-100" />
                </div>
                <div class="carousel-item">
                  <img src="https://bit.ly/2Y7foBK"  class="d-block w-100" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>             

          <section id="who">
            <div class="container">
              <div class="row">

                <div class="col-md-6">
                  <hr align ="left" width="50%" />
                  <h2 class="about">About Us</h2>
                    <p>
                    The Cake&amp;Bake family has always loved baking sweets together - sometimes for friends, sometimes for family, sometimes for no reason at all! So many of our family's memories, in fact, are of time spent together in the kitchen.  Cake&amp;Bake was launched on January 11th, 2010 so that we could continue making these memories by baking delicious sweets and to allow YOU to experience the sweet satisfaction of eating them!
                    </p>
                    <p>Our commitment to you, the customer, is to provide delicious, fresh, made to order products, using only premium ingredients!  We use local and organic when possible.
                    </p>
                  <button type="button" class="btn btn-who"><a href="product">Our Pastries</a></button>
                </div>
                  <div class="col-md-6">
                    <img class="img-fluid" src="https://bit.ly/2Y6rz1w"/>
                    {/* <Link id="testimony" to="/testimony">Thoughts about us!</Link> */}
                  </div>
              </div>  
            </div>
          </section>
		  </>
	
	)
}

export default Home