import Link from 'next/link'
import { BiLogoGoogle } from 'react-icons/bi'

export const SignupButton = () => {
  return (
    <Link
      href={`http://localhost:3001/auth/login?redirect_url=http://localhost:3000/onboarding`}
      className="inline-flex w-auto items-center justify-center rounded bg-green-600 px-4 py-2 text-white hover:bg-green-200"
    >
      <div className="mr-2">
        <BiLogoGoogle />
      </div>{' '}
      Sign up with Google
    </Link>
  )
}
