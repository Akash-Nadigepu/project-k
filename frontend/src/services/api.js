const API_BASE = "http://4.156.15.183"; // your user-service LoadBalancer IP

export const fetchData = async () => {
  const res = await fetch(`${API_BASE}/api/users`);
  return res.json();
};
