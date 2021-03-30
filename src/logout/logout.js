import { useEffect } from "react"
import { navigate } from "@reach/router"

const Logout = ({loginStorageKey}) => {
  useEffect(() => {
      localStorage.setItem(loginStorageKey, '')
      navigate('/')
  }, [loginStorageKey])

  return null
}

export default Logout
