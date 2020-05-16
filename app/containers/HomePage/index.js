/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
// import { withAuthenticator } from 'aws-amplify-react'; // legacy
import { withAuthenticator } from '@aws-amplify/ui-react'; // latest
import '@aws-amplify/ui/dist/style.css';
import messages from './messages';

function HomePage() {
  return <h1>Login Successful</h1>;
}

export default withAuthenticator(HomePage, true);
