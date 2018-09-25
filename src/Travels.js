import React from "react";
import Travel from "./Travel";

const travels = [
{
	destination :"NEW-YORK",
	country : "Etats-Unis",
	photo : "http://image.noelshack.com/fichiers/2018/38/7/1537721347-new-york.jpg",
	distance : "5 834 km"
},
{
	destination :"Plage de grand-Anse / GUADELOUPE",
	country : "France",
	photo : "http://image.noelshack.com/fichiers/2018/38/7/1537722141-grande-anse.jpg",
	distance : "6 750 km"
},
{
	destination :"GUADELOUPE ",
	country : "France",
	photo : "http://image.noelshack.com/fichiers/2018/39/2/1537865391-cascade.jpg",
	distance : "6 750 km"
},
{
	destination :"Plage ile Cayo-Coco",
	country : "CUBA",
	photo : "http://image.noelshack.com/fichiers/2018/39/2/1537865524-plage-ile-cayo-coco-cuba-plage-la-accessoire-mode-serviette-plage.jpg",
	distance : "7 512 km"
},
{
	destination :"Plage salines / Martinique",
	country : "France",
	photo : "http://image.noelshack.com/fichiers/2018/39/2/1537865528-plage-salines-saint-anne-martinique-plage-la-accessoire-mode-serviette-plage-c2ed17db-e37c-4c2d-9294-05594cc00ec3.jpg",
	distance : "6 845 km"
}
];
const Travels = () => (
  <div>
    {travels.map(travel => (
  <Travel destination={travel.destination} photo={travel.photo} country={travel.country} distance={travel.distance}/>
))}
  </div>
);

export default Travels;