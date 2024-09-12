import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "../ui/avatar";

export interface PropsChat {
    name_chat: string
    last_message: string
}

export async function ConteinerChat({ last_message, name_chat }: PropsChat) {
    return (
        <div className="flex justify-evenly items-center gap-4 border-zinc-100 border-[1px] px-4 py-1 rounded-lg border-opacity-25 hover:bg-zinc-800">
            <Avatar className="w-10 h-10">
                <AvatarFallback className="text-black p-1">CN</AvatarFallback>
            </Avatar>
            <div>
                <p className="">
                    {name_chat}
                </p>
                <p className="">
                    {last_message}
                </p>
            </div>
        </div>
    )
}