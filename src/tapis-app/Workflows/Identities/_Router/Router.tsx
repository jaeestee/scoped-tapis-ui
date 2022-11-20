import React from 'react';
import {
  Route,
  useRouteMatch,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';

import { default as Identities } from '../Identities';
import { default as Identity } from '../Identity';

const Router: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={"/workflows/identities"} exact>
        <Identities />
      </Route>
      <Route
        path={"/workflows/identities/:identityUuid"}
        render={({
          match: {
            params: { identityUuid },
          },
        }: RouteComponentProps<{
          identityUuid: string
        }>) => <Identity identityUuid={identityUuid}/>
      }
      />
    </Switch>
  );
};

export default Router;
