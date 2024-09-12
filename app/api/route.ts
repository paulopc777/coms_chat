import { NextResponse } from 'next/server'

const ChatsIDs = [
  { id: "asd1" },
  { id: "asd2" },
  { id: "asd3" },
]

export async function GET(request: Request) {
  return Response.json({ data: ChatsIDs })
}