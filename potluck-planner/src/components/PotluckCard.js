import React from 'react';
import {Card, Image} from 'semantic-ui-react';

{/* export default function PotluckCard({potluck}) {
  const {date, creator, location, items} = potluck;
  return (
     <Card>
      <Card.Content>
        <Card.Meta>{potluck.date}</Card.Meta>
        <Card.Header>Potluck Creator: {potluck.creator}</Card.Header>
        <Card.Description>Location: {potluck.locaton}</Card.Description>
        <Image src={potluck.image} wrapped ui={false} />
        <Card.Header>What I'm Bringing:</Card.Header>
        {items.map(item => (
            <div key={item} className="pl-items">
            {item}
            </div>
        ))} 
      </Card.Content>
      <Card.Content extra>
        <button type="submit">View Potluck</button>
      </Card.Content>
        </Card>
  );
}  */}

const items = [
    {
      header: 'Creator: Terry Brooks - Sept 2nd',
      description: 'I\'m bringing: Chips',
      meta: 'Locatoin: 1234 Terry Brooks Dr',
    },
    {
      header: 'Creator: Oscar wilde - Oct 7th',
      description: 'I\'m bringing: Ice Cream',
      meta: 'Location: 5678 Oscar wilde Rd',
    },
    {
      header: 'Creator: JK Rolling - Oct 7th',
      description: 'I\'m bringing: Pie',
      meta: 'Location: 5678 JK Rolling Rd',
    },
    {
      header: 'Creator: Mark Wright - Oct 7th',
      description: 'I\'m bringing: Salad',
      meta: 'Location: 2356 Mark Wright Blvd',
    },
    {
      header: 'Creator: Cavan Scott - Oct 7th',
      description: 'I\'m bringing: Chips and dip',
      meta: 'Location: 7856 Cavan Scott Rd',
    },
  ]
  
  const PotluckCard = () => <Card.Group centered items={items} />
  
  export default PotluckCard;