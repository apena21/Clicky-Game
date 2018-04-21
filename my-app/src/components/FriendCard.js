import React from "react";
import "./FriendCard.css";

var friendArray = [{src: "autumn.jpg", title: "Card image cap"},
{src: "beach.jpg", title: "Card image cap"},
{src: "benchAndTree.jpg", title: "Card image cap"},
{src: "bird.jpg", title: "Card image cap"}
]

var array = [];
for (var i=0; i<friendArray.length; i++) {
    array.push(<FriendCard key={i} src={friendArray[i].src} title={friendArray[i].title}/>)
}

const app = () => {
	<div>
		{friendArray}
	</div>
}


const FriendCard = props => (
  <div className="card">
    <div className="img-c
    iner">
      <img alt={props.name} src={props.image} />
    </div>
        <div className="content">
        {/* use two sets of curly braces, one for jsx and one for the object*/}
            <div className="card" style={{width: "18rem"}}>
                {/* path to pic name is from cient side view, use express server for this, likely built in with Create React app*/}
                {/* replace with array name*/}
                
                return {array};
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    <span onClick={() => props.removeFriend(props.id)} className="remove">
    </span>
  </div>
);

export default FriendCard;
