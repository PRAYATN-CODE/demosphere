import VerifyOtp from '@/components/auth/verify-otp/VerifyOtp'
import { Loader2 } from 'lucide-react'
import { Suspense } from 'react'

const page = () => {
    return (
        <Suspense fallback={
            <div className="w-full h-full flex-1 flex flex-col items-center justify-center">
                <Loader2 className="text-primary w-6 h-6 animate-spin" />
            </div>
        }
        >
            <VerifyOtp />
        </Suspense>
    )
}

export default page
