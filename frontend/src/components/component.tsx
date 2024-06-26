/**
*/
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    <div className="bg-[#000000] text-white min-h-screen">
      <nav className="flex justify-between items-center py-4 px-8">
        <Avatar>
          <AvatarImage alt="Profile" src="/placeholder.svg?height=40&width=40" />
        </Avatar>
        <div className="flex space-x-6">
          <Link className="text-white hover:text-gray-300" href="#">
            Home
          </Link>
          <Link className="text-white hover:text-gray-300" href="#">
            Talk To Us
          </Link>
          <Link className="text-white hover:text-gray-300" href="#">
            Events
          </Link>
          <Link className="text-white hover:text-gray-300" href="#">
            Register/Login
          </Link>
        </div>
        <MicroscopeIcon className="h-6 w-6" />
      </nav>
      <div className="max-w-4xl mx-auto mt-12 p-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-6xl font-bold">Event title</h1>
          <div className="text-right">
            <div className="text-lg">
              Date: <span className="font-bold">Sunday February 30th</span>
            </div>
            <div className="text-lg">
              Time: <span className="font-bold">12:00pm-2:00pm</span>
            </div>
            <div className="text-lg">
              Entry Fee: <span className="font-bold">$6:00</span>
            </div>
          </div>
        </div>
        <div className="bg-[#87562A] p-8 rounded-lg items-center">
          <h2 className="text-3xl font-bold mb-4 text-center">Please Enter Your Details</h2>
          <p className="text-sm mb-1">
            Note:
          </p>
          <p className="text-sm mb-1">
            Members receive a 10% discount at Orange Club for their own session.
          </p>
          <p className="text-sm mb-1">
          We host Casual Nights at <strong>Orange Pool Club</strong> (9 City Road) every <strong>Tuesday&Thursday</strong> 6:30pm-8pm.
          </p>
          <p className="text-sm mb-3">
          Cost: <strong>$6 per session</strong>
          </p>
          <form className="space-y-6">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="University" />
            <Input placeholder="UPI (If you are in UoA)" />
            <Input placeholder="Contact Number" />
          <p><strong>Skill Level</strong>:</p>
            <div className="flex items-center space-x-5">
              <Checkbox id="skill-level" />
              <label className="text-sm" htmlFor="skill-level">
              <p class="text-l">Beginner</p>
              <p class="text-xs">Never played or played a few times</p>
              </label>
              <Checkbox id="skill-level" />
              <label className="text-sm" htmlFor="skill-level">
              <p>Intermediate</p>
              <p class="text-xs">Plays occasionally, social players</p>
              </label>
              <Checkbox id="skill-level" />
              <label className="text-sm" htmlFor="skill-level">
              <p>Advanced</p>
              <p class="text-xs">Experienced players, participated in tournaments</p>
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="sign-up" />
              <label className="text-sm" htmlFor="sign-up">
                <p>I confirm that by sign up,I am registering as a member of ASPA.</p>
              </label>
              </div>
            
              <div className="bg-[#A65656] p-1 rounded-lg items-center border border-[#FBF5F0]">
    this is for yefgdklsp;
</div>

            <Button className="w-full py-4 bg-[#DD995B]">SAVE</Button>
          </form>
        </div>
      </div>
      <footer className="bg-[#2E2E3E] mt-12 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 px-8">
          <div>
            <h3 className="font-bold text-xl mb-4">About Us</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Talk To Us</h3>
            <div className="flex space-x-4">
              <LinkedinIcon className="h-6 w-6" />
              <InstagramIcon className="h-6 w-6" />
              <FacebookIcon className="h-6 w-6" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Events</h3>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MicroscopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}
