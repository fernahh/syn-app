import { Card } from 'app/_base/components/card'
import { Heading } from 'app/_base/components/heading'
import { SignupButton } from './_components/signupButton'

export default function SignupPage() {
  return (
    <div className="grid h-screen grid-cols-12 content-center justify-center">
      <div className="col-span-10 col-start-2 md:col-span-5 md:col-start-4">
        <Card>
          <div className="direction-column flex-col text-center">
            <div className="mb-2">
              <Heading element={'h1'}>Sign up to the Sync</Heading>
            </div>
            <p className="mb-8">Let's level up your team management!</p>
            <SignupButton />
          </div>
        </Card>
      </div>
    </div>
  )
}
