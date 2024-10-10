"use client"

import { loginUser } from "@/app/services/api-requests"
import { LoginCredentials } from "@/types/user-related-types"
import { getToken } from "next-auth/jwt"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function LoginPage() {
  const [loginUserInfo, setLoginUserInfo] = useState<LoginCredentials>({ email: "", password: "" })
  const router = useRouter()
  const session = useSession()
  console.log(session, "session from loginPage") //look on the browser console

  const loginHandler = async (dataToPost: LoginCredentials) => {
    try {
      const response = await signIn("credentials", { ...dataToPost, redirect: false })

      console.log(response, "sign in response")

      if (response?.ok) {
        router.push("/")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="p-4 w-[250px] border-2 rounded-md border-gray-white mx-auto">
      <div>
        <input
          className="bg-transparent w-full border-2 rounded-md border-gray-500"
          type="text"
          placeholder="email"
          value={loginUserInfo.email}
          onChange={(e) => setLoginUserInfo((prev) => ({ ...prev, email: e.target.value }))}
        />
      </div>

      <div>
        <input
          className="bg-transparent w-full border-2 rounded-md border-gray-500"
          type="password"
          placeholder="password"
          value={loginUserInfo.password}
          onChange={(e) => setLoginUserInfo((prev) => ({ ...prev, password: e.target.value }))}
        />
      </div>

      <div>
        <button
          className="w-full text-center"
          onClick={() => loginHandler(loginUserInfo)}
        >
          Login
        </button>
      </div>
    </div>
  )
}
