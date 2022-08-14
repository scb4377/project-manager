import { useContext } from "react"
import { AppContext } from "../../context/Context"


const Settings = () => {
  const { mode } = useContext(AppContext)

  return (
    <div>Settings</div>
  )
}

export default Settings