import React from 'react';
import Header from './Header';
import PotluckCard from './PotluckCard';

export default function Dashboard() {

  return (
    <section className="dashboard">
      <Header />
      <PotluckCard />
    </section>
  );
}