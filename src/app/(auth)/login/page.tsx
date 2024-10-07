"use client"

import { loginUser } from "@/app/services/api-requests"
import { LoginCredentials } from "@/types/user-related-types"
import { signIn } from "next-auth/react"
import React, { useState } from "react"

export default function LoginPage() {
  const [loginUserInfo, setLoginUserInfo] = useState<LoginCredentials>({ email: "", password: "" })

  const loginHandler = async (dataToPost: LoginCredentials) => {
    try {
      const response = await signIn("credentials", dataToPost)
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
