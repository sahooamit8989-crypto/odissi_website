// 

import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Youtube,
  Facebook,
  Sparkles,
  Calendar,
  Users
} from "lucide-react"

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()
    setResult("Sending...")

    const formData = new FormData(e.target)
    formData.append(
      "access_key",
      "9845667d-ed4a-4334-84d0-7cdec962f9d2"
    )

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("✅ Message sent successfully")
      e.target.reset()
    } else {
      setResult("❌ Something went wrong")
    }
  }

  return (
    <section className="px-6 md:px-16 lg:px-32 py-24 bg-[#F8F5F0]">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-5xl font-bold text-[#7A1F2B]">
          Let’s Connect
        </h1>
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#7A1F2B] to-[#B43A4A] mx-auto my-5 rounded-full"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          For Odissi classes, workshops, performances, or meaningful collaborations —
          I’d love to hear from you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Side */}
        <div className="flex-1 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Odissi is not just dance — it’s discipline, devotion, and storytelling.
              Whether you’re a student, organizer, or art lover, let’s begin a conversation.
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-5">
            {[
              { icon: Mail, text: "mantrah.jajpur@gmail.com" },
              { icon: Phone, text: "+91 8270192080" },
              { icon: MapPin, text: "Jajpur, Odisha" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border hover:shadow-md transition"
              >
                <item.icon className="text-[#7A1F2B]" />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Why Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-xl border text-center hover:shadow-md transition">
              <Sparkles className="mx-auto text-[#7A1F2B]" />
              <p className="text-sm mt-2 text-gray-700">Authentic Odissi Training</p>
            </div>

            <div className="p-4 bg-white rounded-xl border text-center hover:shadow-md transition">
              <Users className="mx-auto text-[#7A1F2B]" />
              <p className="text-sm mt-2 text-gray-700">Workshops & Collaborations</p>
            </div>

            <div className="p-4 bg-white rounded-xl border text-center hover:shadow-md transition">
              <Calendar className="mx-auto text-[#7A1F2B]" />
              <p className="text-sm mt-2 text-gray-700">Stage Performances</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm text-gray-600 mb-3">Follow the journey</p>
            <div className="flex gap-4">
              {[
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/mantrah_jajpur"
                },
                {
                  icon: Youtube,
                  link: "https://m.youtube.com/@S%C3%A1ty%C3%A1%20Pr%C3%A1k%C3%A1%C3%9Fh%20S%C3%A1h%C3%B3%C3%B3"
                },
                {
                  icon: Facebook,
                  link: "https://www.facebook.com/yourpage"
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white border hover:bg-[#7A1F2B] hover:text-white transition"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-[#F1E6E8] border">
            <h3 className="text-lg font-semibold text-[#7A1F2B]">
              Want to Learn Odissi?
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Beginner & intermediate classes available —
              both online and offline.
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full p-3 rounded-md bg-gray-100 focus:ring-2 focus:ring-[#7A1F2B] outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="mt-1 w-full p-3 rounded-md bg-gray-100 focus:ring-2 focus:ring-[#7A1F2B] outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="mt-1 w-full p-3 rounded-md bg-gray-100 focus:ring-2 focus:ring-[#7A1F2B] outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#7A1F2B] text-white py-3 rounded-md hover:bg-[#651823] transition"
            >
              Send Message <Send size={16} />
            </button>

            {result && (
              <p className="text-sm text-center text-gray-600">
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
