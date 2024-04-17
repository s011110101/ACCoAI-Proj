/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ntnTZnj7WN4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
    return (
        <div className="flex h-screen">
            <div className="w-64 bg-gray-100 p-4 space-y-4 overflow-y-auto">
                <div className="text-lg font-semibold">New chat</div>
                <div className="text-sm">Yesterday</div>
                <ul className="space-y-1">
                    <li>Modify String Safely</li>
                </ul>
                <div className="text-sm">Previous 7 Days</div>
                <ul className="space-y-1">
                    <li>ChatGPT UI Analysis</li>
                    <li>Build Conversation HTML Page</li>
                    <li>Copiar interacción página web.</li>
                    <li>Adjective Crab Usernames</li>
                    <li>User requests help</li>
                    <li>Character Single Trait Advantage:</li>
                    <li>New chat</li>
                    <li>Killing Eve TV Series</li>
                    <li>Boyer-Moore: Shifts and Steps</li>
                    <li>Remote Smartsheet Internship Op</li>
                </ul>
                <div className="text-sm">Previous 30 Days</div>
                <ul className="space-y-1">
                    <li>Food's Environmental Impact</li>
                    <li>Grass-fed Meat Transition</li>
                    <li>Market Power in Economics</li>
                    <li>Machine Learning Internship Sum</li>
                    <li>Testing Evolutionary Hypotheses:</li>
                    <li>Evolutionary Insights: Personality</li>
                    <li>Backend Development Internship-</li>
                    <li>Cover Letter Sample</li>
                    <li>DL Architecture Optimization Inte</li>
                    <li>Wait for VBlank.</li>
                    <li>Rectangular image DMA.</li>
                </ul>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <DoorOpenIcon className="h-12 w-12 mx-auto mb-4" />
                        <div className="text-xl font-semibold">How can I help you today?</div>
                    </div>
                </div>
                <div className="bg-gray-200 p-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Button className="w-full">Brainstorm names</Button>
                        <Button className="w-full">Recommend a dish</Button>
                        <Button className="w-full">Plan a trip</Button>
                        <Button className="w-full">Write a message</Button>
                    </div>
                    <Input className="mt-4" placeholder="Message ChatGPT..." />
                </div>
            </div>
        </div>
    )
}

function DoorOpenIcon(props) {
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
            <path d="M13 4h3a2 2 0 0 1 2 2v14" />
            <path d="M2 20h3" />
            <path d="M13 20h9" />
            <path d="M10 12v.01" />
            <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" />
        </svg>
    )
}