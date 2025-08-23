import { useState } from "react";

export default function useAuth() {
  const [isAuthenticated] = useState(false); // toggle true/false to simulate login
  return { isAuthenticated };
}