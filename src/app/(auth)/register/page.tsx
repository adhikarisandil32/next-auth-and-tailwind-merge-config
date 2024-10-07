"use client"

import React, { useState } from "react"

type RegisterUserInfo = {
  email: string
  password: string
  name: string
}

export default function RegisterPage() {
  const [registerUserInfo, setRegisterUserInfo] = useState<RegisterUserInfo>({
    email: "",
    password: "",
    name: "",
  })

  const registerHandler = (dataToPost: RegisterUserInfo) => {
    // console.log(dataToPost)
  }

  return (
    <div className="p-4 w-[250px] border-2 rounded-md border-white mx-auto">
      <div>
        <input
          className="bg-transparent w-full border-2 rounded-md border-gray-500"
          type="text"
          placeholder="email"
          value={registerUserInfo.email}
          onChange={(e) => setRegisterUserInfo((prev) => ({ ...prev, email: e.target.value }))}
        />
      </div>

      <div>
        <input
          className="bg-transparent w-full border-2 rounded-md border-gray-500"
          type="password"
          placeholder="password"
          value={registerUserInfo.password}
          onChange={(e) => setRegisterUserInfo((prev) => ({ ...prev, password: e.target.value }))}
        />
      </div>

      <div>
        <input
          className="bg-transparent w-full border-2 rounded-md border-gray-500"
          type="name"
          placeholder="name"
          value={registerUserInfo.name}
          onChange={(e) => setRegisterUserInfo((prev) => ({ ...prev, name: e.target.value }))}
        />
      </div>

      <div>
        <button onClick={() => registerHandler(registerUserInfo)}>Register</button>
      </div>
    </div>
  )
}
