import { useQuery } from 'react-query';

// Function to fetch posts from the JSONPlaceholder API
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json(); // convert response to JSON
};

function PostsComponent() {
  // useQuery handles fetching, caching, error & loading states automatically
  const {
    data: posts,       // renamed data to posts
    isLoading,         // true while fetching data
    isError,           // true if error happens
    error,             // error object
    refetch,           // function to manually refetch data
    isFetching         // true if refetching in background
  } = useQuery('posts', fetchPosts);

  // Handle loading state
  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  // Handle error state
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {/* Button to refetch posts */}
      <button onClick={() => refetch()}>
        {isFetching ? 'Refreshing...' : 'Refresh Posts'}
      </button>

      <ul>
        {/* Display posts (show only first 10 for simplicity) */}
        {posts.slice(0, 10).map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
