import "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      user?: {}
      jwt?: string
    }
  }

  interface User {
    jwt?: string
    user?: {}
  }
}
