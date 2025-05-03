import { NextResponse } from "next/server";
import { sendMail } from "./sendmail";

export async function POST(request) {

    try {
        const data = await request.json()
        await sendMail(data.email , data.message , data.name)
        
        return new Response(JSON.stringify({ msg: "Mail send successfully" }), {
            status: 200
        })
    } catch (error) {
        console.log(error)
        new Response(JSON.stringify({ msg: error.message || "Some error occured" }), {
            status: 500
        })
    }
}