import React, { Suspense } from 'react';
import { useRoutes, BrowserRouter as Routers } from 'react-router-dom';
import Header from './app/components/common/header/Header';
import Spinner from './app/components/common/spinner/Spinner';

const ChannelListPage = React.lazy(() => import('./app/components/content-guide/channels-list/ChannelsListPage'));
const ChannelDetailPage = React.lazy(() => import('./app/components/content-guide/channel-detail/ChannelDetailPage'));

const Router = () => {
  let routes = useRoutes([
    { path: "/", element: <ChannelListPage /> },
    { path: "/channel/:channelId", element: <ChannelDetailPage /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routers>
          <Router />
        </Routers>
      </Suspense>
    </div>
  );
}

export default App;
