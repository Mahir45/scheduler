import React from "react";
import "components/DayListItems.scss";
import classNames from "classnames";


export default function DayListItem(props) {
  const {name, spots, setDay} = props
  let arr = {
    
    "day-list__item--selected" : props.selected,
    "day-list__item--full" : props.spots === 0

  }
  let dayClass = classNames('day-list__item',arr)
  const formatSpots = (spots) => {
    if (spots === 0) {
      return "no spots remaining"
    } if (spots === 1) {
      return "1 spot remaining"
    }else {
      return `${spots} spots remaining`
    }
  }
  return (
    <li className={dayClass} onClick ={() => setDay(name)}>
      
      <h2  className="text--regular">{name}</h2> 
      <h3 
      className="text--light">{formatSpots(spots)}</h3>
    </li>
  )
}