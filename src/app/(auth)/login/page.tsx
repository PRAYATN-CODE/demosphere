import Login from "@/components/auth/login/Login"
import { Loader2 } from "lucide-react"
import { Suspense } from "react"

const page = () => {
  return (
    <Suspense fallback={
      <div className="w-full h-full flex-1 flex flex-col items-center justify-center">
        <Loader2 className="text-primary w-6 h-6 animate-spin" />
      </div>
    }
    >
      <Login />
    </Suspense>
  )
}

export default page