"use server"

import { fetchApi } from "@/custom-fetch/fetch-api"
import { LoginCredentials, SignUpCredentials } from "@/types/user-related-types"

export async function loginUser(credentials: LoginCredentials) {
  try {
    const response = await fetchApi("/auth/local", {
      method: "POST",
      body: JSON.stringify({
        identifier: credentials.email,
        password: credentials.password,
      }),
    })

    if (!response.ok) {
      throw new Error("Error singing in")
    }

    const responseJSON = await response.json()

    return responseJSON
  } catch (error) {
    console.log(error)

    return
  }
}

export async function registerUser(credentials: SignUpCredentials) {
  try {
    const response = await fetchApi("/auth/local/register", {
      method: "POST",
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        username: credentials.username,
      }),
    })

    if (!response.ok) {
      throw new Error("error signing up user")
    }

    const responseJSON = await response.json()

    return responseJSON
  } catch (error) {
    console.log(error)

    return null
  }
}
