import React from "react"
import ReactCardFlipper from "react-card-flipper"
import "./Card.css"

const Card = props => (
  <ReactCardFlipper height='120px'>
    <div className="card">
      <img src={props.image} alt={props.text} className="cardImage" />
      <div className="badge">{props.level}</div>
      <h3 className="buildingName">{props.name}</h3>
      <p className="resourcesLeft">{props.text}</p>
      <div className="resources">
        {props.resources.map((resource, index) => {
          return resource.amount ? (
            <div key={index}>
              <p className="resources">{resource.amount}</p>
              <p className="resourceName">{resource.type}</p>
            </div>
          ) : null
        })}
      </div>
      <div className="levelup">
        <div className="levelupIconDiv">
          <h1 className="minus">-</h1>
        </div>
        <p className="levelupText">Level {props.level}</p>
        <div className="levelupIconDiv">
          <h1 className="plus">+</h1>
        </div>
      </div>
    </div>

    <div></div>
  </ReactCardFlipper>
)

export default Card
