import React from "react";

const Travel = ({destination, country, photo, distance}) =>(
	<figure>
		<figcaption>
			<h1>{destination}</h1>
		</figcaption>
    	<img src={photo} alt={destination} />
    	<figcaption>{distance}</figcaption>
        <cite>{country}</cite> 
 	</figure>
);
export default Travel;
