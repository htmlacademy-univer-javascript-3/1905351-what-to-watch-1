import { Router } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import { BrowserHistory } from 'history';

export interface HistoryRouterProps {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}

function BackstackRouter({
  basename,
  children,
  history
}: HistoryRouterProps): JSX.Element {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

export default BackstackRouter;
