import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

// Create a QueryClient instance (manages cache and queries globally)
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the QueryClient to the whole app
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <h1>React Query Demo - Posts</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
