import nodemailer from "nodemailer"

export const sendMail = async (sender, msg) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: "webdevpurpose21@gmail.com",
            pass: "ihwhgocinbybtcjl"
        }
    });

    const receiver = {
        from: "webdevpurpose21@gmail.com",
        to: "dasanirban268@gmail.com",
        subject: `Message from ${sender}`,
        text: msg
    };

    console.log(sender , msg)

    try {
        const info = await auth.sendMail(receiver)

        console.log(info)
        return "success!"
    } catch (error) {
        console.log(error)
        throw new Error("Some error occured");
    }
}


