import React from 'react';
import { Card, Image } from 'semantic-ui-react';
// import { Link, Route } from 'react-router-dom';
// import PotluckPage from './PotluckPage';

export default function PotluckCard(props) {
  const { organizerId, name, description, location, date, food, guests } = props.event;
  console.log(`PotluckCard: `, props);
  return (
    <Card>
      <div className="ui card">
      <Card.Content>
        <Card.Header>Event Name: { name }</Card.Header>
        <Card.Meta>Organizer: { organizerId }</Card.Meta>
        <Card.Description>{ date }</Card.Description>
        <Card.Description>Location: { location }</Card.Description>
        <Card.Description>Description: { description }</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* <Link to={`/events/${props.event.id}`} target="blank" className="ui red button">View Potluck</Link>
        <Route path = "/events/:id" component={PotluckPage} /> */}
        <Card.Description><strong>You are bringing: </strong>Chips { food }</Card.Description>
        <Card.Description><strong>Guest List:</strong> Doug, Ben, Michael { guests }</Card.Description>
        <Image src={require('./img/food2.jpg')} alt = "Food by Katie Smith on Unsplash" size="medium" />
      </Card.Content>
      </div>
    </Card>
  );
} 

// const events = [
//     {
//       header: 'Creator: Terry Brooks - Sept 2nd',
//       description: 'I\'m bringing: Chips',
//       meta: 'Locatoin: 1234 Terry Brooks Dr',
//     },
//     {
//       header: 'Creator: Oscar wilde - Sept 7th',
//       description: 'I\'m bringing: Ice Cream',
//       meta: 'Location: 5678 Oscar wilde Rd',
//     },
//     {
//       header: 'Creator: JK Rolling - Oct 7th',
//       description: 'I\'m bringing: Pie',
//       meta: 'Location: 5678 JK Rolling Rd',
//     },
//     {
//       header: 'Creator: Mark Wright - Oct 27th',
//       description: 'I\'m bringing: Salad',
//       meta: 'Location: 2356 Mark Wright Blvd',
//     },
//     {
//       header: 'Creator: Cavan Scott - Nov 5th',
//       description: 'I\'m bringing: Chips and dip',
//       meta: 'Location: 7856 Cavan Scott Rd',
//     },
//     {
//       header: 'Creator: Anne Rice - Nov 7th',
//       description: 'I\'m bringing: Pie',
//       meta: 'Location: 5678 Anne Rice Rd',
//     },
//     {
//       header: 'Creator: Sir Arthur Connan Doyle - Nov 17th',
//       description: 'I\'m bringing: Salad',
//       meta: 'Location: 2356 Sir Arthur Connan Doyle Blvd',
//     },
//     {
//       header: 'Creator: Kara Cooney - Dec 7th',
//       description: 'I\'m bringing: Chips and dip',
//       meta: 'Location: 7856 Kara Cooney Rd',
//     },
//   ]
  
//   const PotluckCard = () => <Card.Group centered events={events} />
  
// export default PotluckCard; 