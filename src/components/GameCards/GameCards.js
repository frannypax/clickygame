import React, {Component} from "react";
import "./GameCards.css";
import cards from "./cards.json";


class GameCards extends Component{
	state={
		score: 0,
		clicked: [],
		message: ""
	}


	render(){
		let cardsArray = [].concat(cards)
		cardsArray = shuffle(cardsArray, [])
		return(
			<div className="game">
				<div className="cardImages">
					{cardsArray.map(card => (
						<CardImage
							key={card.id}
							image={card.image}
							id={card.id}
						/>)
				
					)}
				</div>
			</div>)
		}
}

const CardImage = props => {
	return (
		<div className="cardImage">
			<img 
				src={props.image}
				onClick={props.handleClick}
				alt="game image"
				data-id={props.id}
				/>
		</div>
	);
}

function shuffle(arr1, arr2) {
  if (arr1.length < 1) {
    return arr2
  } else {
    let randomIndex = Math.floor(Math.random() * arr1.length)
    let arr = arr1
    console.log(randomIndex)
    arr2.push(arr1[randomIndex])
    arr.splice(randomIndex, 1)
    return shuffle(arr, arr2)
  }
}
export default GameCards;
