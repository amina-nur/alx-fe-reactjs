import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

function PostsComponent() {
  // useQuery handles data fetching, caching, and updates
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["posts"], // Unique key for caching
    queryFn: fetchPosts, // Function to fetch data

    // ✅ Advanced React Query options
    cacheTime: 1000 * 60 * 5, // Keep cache for 5 minutes
    staleTime: 1000 * 60, // Data is "fresh" for 1 minute
    refetchOnWindowFocus: false, // Don’t refetch when switching back to tab
    keepPreviousData: true, // Keep old data when fetching new
  });

  // Show loading state
  if (isLoading) return <p>Loading posts...</p>;

  // Show error state
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Posts</h2>
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-4"
      >
        Refetch Posts
      </button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="border-b py-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
