// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <WelcomeSnippet>
import {
  Button,
  Container
} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { useAppContext } from './AppContext';
import { getCeoMessage } from './GraphService';

export default function Welcome(props: RouteComponentProps) {
  const app = useAppContext();
  const [ceoMessage, setCeoMessage] = useState<any>([]);

  useEffect(() => {
    const  getMessage = async() => {
        const { value = [] }  = await getCeoMessage(app.authProvider!)
        const sortedActivities = value.sort((b: any, a: any) => Date.parse(a.lastModifiedDateTime) < Date.parse(b.lastModifiedDateTime) ? -1 : 1)
            setCeoMessage(sortedActivities);
        console.log(value)
    }
    getMessage()
  }, [])

  if (ceoMessage.length > 0) {
    const { fields = {} } = ceoMessage[0];
    var ceoUserName = fields?.UserName;
    var ceoMessageAsText = fields.Description;
    var profilePic = JSON.parse(fields.ProfilePhoto);

    var completePath;
    if (profilePic.serverUrl) {
      completePath = profilePic.serverUrl + (profilePic.serverRelativeUrl).replace(profilePic.serverUrl, "");
    } else {
      completePath = profilePic.serverRelativeUrl
    }
  }

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <Container fluid>
        <h1>React Graph Tutorial</h1>
        <p className="lead">
          This sample app shows how to use the Microsoft Graph API to access a user's data from React
        </p>
        <AuthenticatedTemplate>
          <div>
            <h4>Welcome {app.user?.displayName || ''}!</h4>
            <p>Use the navigation bar at the top of the page to get started.</p>
          </div>
          <img src={completePath} />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <Button color="primary" onClick={app.signIn!}>Click here to sign in</Button>
        </UnauthenticatedTemplate>
      </Container>
    </div>
  );
}
// </WelcomeSnippet>
