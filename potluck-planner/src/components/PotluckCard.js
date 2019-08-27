import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function PotluckCard({ event }) {
  const { userId, name, description, location } = event;
  return (
     <Card>
      <Card.Content>
        <Card.Meta>Organizer: { userId }</Card.Meta>
        <Card.Header>event Name: { name }</Card.Header>
        <Card.Description>Description: { description }</Card.Description>
      </Card.Content>
      <Card.Content extra>
        Location: { location }
        <Link to = { `/potluck/${event.id}` }>View Potluck</Link>
      </Card.Content>
        </Card>
  );
} 

{/* const items = [
    {
      header: 'Creator: Terry Brooks - Sept 2nd',
      description: 'I\'m bringing: Chips',
      meta: 'Locatoin: 1234 Terry Brooks Dr',
    },
    {
      header: 'Creator: Oscar wilde - Sept 7th',
      description: 'I\'m bringing: Ice Cream',
      meta: 'Location: 5678 Oscar wilde Rd',
    },
    {
      header: 'Creator: JK Rolling - Oct 7th',
      description: 'I\'m bringing: Pie',
      meta: 'Location: 5678 JK Rolling Rd',
    },
    {
      header: 'Creator: Mark Wright - Oct 27th',
      description: 'I\'m bringing: Salad',
      meta: 'Location: 2356 Mark Wright Blvd',
    },
    {
      header: 'Creator: Cavan Scott - Nov 5th',
      description: 'I\'m bringing: Chips and dip',
      meta: 'Location: 7856 Cavan Scott Rd',
    },
    {
      header: 'Creator: Anne Rice - Nov 7th',
      description: 'I\'m bringing: Pie',
      meta: 'Location: 5678 Anne Rice Rd',
    },
    {
      header: 'Creator: Sir Arthur Connan Doyle - Nov 17th',
      description: 'I\'m bringing: Salad',
      meta: 'Location: 2356 Sir Arthur Connan Doyle Blvd',
    },
    {
      header: 'Creator: Kara Cooney - Dec 7th',
      description: 'I\'m bringing: Chips and dip',
      meta: 'Location: 7856 Kara Cooney Rd',
    },
  ]
  
  const PotluckCard = () => <Card.Group centered items={items} />
  
export default PotluckCard; */}