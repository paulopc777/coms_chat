import { ConteinerChat, PropsChat } from "./components/Chat/ConteinrChat";


const data: PropsChat[] = [
  { name_chat: "chat 1", last_message: "aaa" },
  { name_chat: "chat 2", last_message: "bbb" },
  { name_chat: "chat 3", last_message: "ccc" }
]

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-3 row-start-2 items-center sm:items-start">
        {data.map((c, index) => {
          return (
            <ConteinerChat key={index} name_chat={c.name_chat} last_message={c.last_message} />
          )
        })}
      </main>
    </div>
  );
}
