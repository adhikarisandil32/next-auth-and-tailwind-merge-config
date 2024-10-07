export const fetchApi = (endpoint: string, config: RequestInit) => {
  const baseUrl = process.env.BASE_URL ?? "http://localhost:3000/api"

  return fetch(`${baseUrl}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  })
}
