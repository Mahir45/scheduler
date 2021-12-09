import React from "react";
import "components/DayListItems.scss";
import classNames from "classnames";


export default function DayListItem(props) {
  let dayClass = classNames('day-list__item',{
    
    "day-list__item--selected" : props.selected,
    "day-list__item--full" : props.spots === 0

  })
  const formatSpots = (spots) => {
    if (spots === 0) {
      return "no spots remaining"
    } if (spots === 1) {
      return "1 spot remaining"
    }else {
      return `${spots} spots remaining`
    }
  }
 
  const {name, spots} = props
  return (
    <li className={dayClass} onClick =  {() => props.setDay(name)}>
      
      <h2  className="text--regular">{name}</h2> 
      <h3 
      className="text--light">{formatSpots(spots)}</h3>
    </li>
  )
}