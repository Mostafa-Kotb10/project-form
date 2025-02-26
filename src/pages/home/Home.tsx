import { Button } from "@/components/ui/button"
import { NavLink } from "react-router"

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="space-y-6">
      <h1 className="font-bold text-6xl">Welcome to Operate</h1>
      <Button asChild>
        <NavLink to={"/sign-up"}>Sign-Up</NavLink>
      </Button>
      </div>
    </div>
  )
}

export default Home