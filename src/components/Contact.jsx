"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Mail, Loader2, Loader } from "lucide-react"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")
  const [name, setname] = useState("")
  const [isSending, setisSending] = useState(false)

  const sendMail = async () => {
    try {
      setisSending(true)
      if (!email && !message && !name) {
        showToast(1, "email and message is needed");
        return;
      }
      const res = await axios.post('/api/sendmail', {
        email, message, name
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(res)
      showToast(0, res.data.msg)

      //clear values
      setemail("")
      setname("")
      setmessage("")
    } catch (error) {
      console.log(error)
      showToast(1, error.message)
    } finally {
      setisSending(false)
    }
  }

  const showToast = (err, msg) => {
    if (err) {
      toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <section
        ref={ref}
        id="contact"
        className="section pb-20 md:mt-0 mt-[200px] px-4 md:px-6 lg:px-8 max-w-[1500px] mx-auto relative z-10"
      >
        {/* <div className="absolute inset-0 -z-10  " /> */}

        <motion.div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Info Card */}
            <div className=" bg-opacity-60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-violet-800 relative text-violet-100">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-violet-500 rounded-tl-md" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-violet-500 rounded-tr-md" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-violet-500 rounded-bl-md" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-violet-500 rounded-br-md" />

              <h3 className="text-2xl font-semibold mb-6 text-violet-500">
                Contact Information
              </h3>
              <p className="text-white mb-8 leading-relaxed">
                Feel free to reach out to me for collaboration, job
                opportunities, or just to say hello!
              </p>
              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-violet-500/20 bg-opacity-20 flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-colors">
                    <Mail className="w-5 h-5 text-violet-200" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Email</p>
                    <p className="font-medium group-hover:text-violet-400 transition-colors">
                      dasanirban268@gmail.com
                    </p>
                  </div>
                </motion.div>

                {/* LinkedIn */}
                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-violet-500/20 bg-opacity-20 flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-colors">
                    <Linkedin className="w-5 h-5 text-violet-200" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">LinkedIn</p>
                    <p className="font-medium group-hover:text-violet-400 transition-colors">
                      linkedin.com/in/anirban-das-2014412b9/
                    </p>
                  </div>
                </motion.div>

                {/* GitHub */}
                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-violet-500/20 bg-opacity-20 flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-colors">
                    <Github className="w-5 h-5 text-violet-200" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">GitHub</p>
                    <p className="font-medium group-hover:text-violet-400 transition-colors">
                      github.com/anirban2005143a
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Form */}
            <div className=" bg-opacity-60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-violet-800 relative text-violet-100">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-violet-500 rounded-tl-md" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-violet-500 rounded-tr-md" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-violet-500 rounded-bl-md" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-violet-500 rounded-br-md" />

              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  sendMail()
                }}>
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-500 inline-block" />
                    Name
                  </label>
                  <input
                    required
                    id="name"
                    className="flex h-12 w-full rounded-md border border-white/50  px-4 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-1 outline-0 focus-visible:ring-violet-500/20 focus-visible:ring-offset-[1px] transition-all text-white"
                    placeholder="Your name"
                    onChange={(e) => {
                      setname(e.target.value)
                    }}
                    value={name}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-500 inline-block" />
                    Email
                  </label>
                  <input
                    required
                    id="email"
                    type="email"
                    className="flex h-12 w-full rounded-md border border-white/50  px-4 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-1 outline-0 focus-visible:ring-violet-500/20 focus-visible:ring-offset-[1px] transition-all text-white"
                    placeholder="Your email"
                    onChange={(e) => {
                      setemail(e.target.value)
                    }}
                    value={email}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-500 inline-block" />
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    className="flex min-h-[100px] max-h-[200px] w-full rounded-md border border-white/50  px-4 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-1 outline-0 focus-visible:ring-violet-500/20 focus-visible:ring-offset-[1px] transition-all text-white"
                    placeholder="Your message"
                    onChange={(e) => {
                      setmessage(e.target.value)
                    }}
                    value={message}
                  />
                </div>

                <button
                  disabled={isSending}
                  type="submit"
                  className="bg-gradient-to-r cursor-pointer from-violet-600 to-purple-500 hover:from-violet-700 hover:to-purple-600 text-white px-4 py-2 w-full rounded-md h-12 relative overflow-hidden group transition-all"
                >
                  {!isSending && <span className="relative z-10">Send Message</span>}
                  {isSending && <Loader2 className="z-10 animate-spin mx-auto text-white relative" />}
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 group-hover:scale-150 transition-transform duration-300 ease-in-out" />
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 opacity-0 group-hover:opacity-80 transition-opacity" />

                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

    </>
  )
}

export default Contact
