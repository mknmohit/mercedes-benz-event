/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

import Registration from 'components/Registration';

export default function HomePage() {
  return (
    <div>
      <Registration />
    </div>
  );
}
