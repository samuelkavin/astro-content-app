import { Suspense } from 'react';
import { useRoutes, BrowserRouter as Routers } from 'react-router-dom';
import ChannelsListPage from './app/components/content-guide/channels-list/ChannelsListPage';
import Header from './app/components/common/header/Header';
import ChannelDetailPage from './app/components/content-guide/channel-detail/ChannelDetailPage';

const Router = () => {
  let routes = useRoutes([
    { path: "/", element: <ChannelsListPage /> },
    { path: "/channel/:channelId", element: <ChannelDetailPage /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense>
        <Routers>
          <Router />
        </Routers>
      </Suspense>
    </div>
  );
}

export default App;
