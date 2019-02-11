import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageWrapper, { ContentContainer } from '../../components/PageWrapper';
import EventParticipationPage from './EventParticipationPage';
const EventPage = ({ match }) => {
  return (
    <PageWrapper>
      <ContentContainer>
        <Switch>
          <Route
            path={`${match.url}/:eventId`}
            component={EventParticipationPage}
          />
        </Switch>
      </ContentContainer>
    </PageWrapper>
  );
};

export default EventPage;
