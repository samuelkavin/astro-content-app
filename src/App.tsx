import React, { Suspense } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ChannelsListPage from './app/components/content-guide/channels-list/ChannelsListPage';
import { useRoutes, BrowserRouter as Routers } from 'react-router-dom';

const Router = () => {
  let routes = useRoutes([
    { path: "/", element: <ChannelsListPage /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <Suspense>
        <Routers>
          <Router />
        </Routers>
      </Suspense>
    </div>
  );
}

export default App;
