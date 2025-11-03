import { useRef, useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
// Corrected icon imports
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5'
import emailjs from 'emailjs-com'

// Lazy load the background to avoid pulling it into the main bundle if not needed
const SectionBackground = lazy(() => import('../components/ParticlesBg.jsx'))

// --- Reusable Input Field Component ---
const FormInput = ({ type = 'text', name, label, required = true, isTextArea = false }) => (
  <div className="relative z-0 w-full">
    <input
      type={type}
      name={name}
      id={name}
      required={required}
      className="peer block w-full appearance-none border-0 border-b-2 border-slate-700 bg-transparent px-0 py-2.5 text-sm text-slate-100 placeholder-transparent focus:border-cyan-400 focus:outline-none focus:ring-0 autofill:bg-transparent autofill:text-slate-100 autofill:shadow-[0_0_0_30px_rgb(15,23,42)_inset]"
      placeholder=" " // Required for the floating label
      autoComplete={type === 'email' ? 'email' : name === 'from_name' ? 'name' : 'off'}
    />
    <label
      htmlFor={name}
      className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-cyan-400 peer-autofill:-translate-y-6 peer-autofill:scale-75"
    >
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  </div>
);

// --- Reusable Contact Info Item ---
const ContactInfoItem = ({ icon: Icon, label, value, href, color }) => (
  <motion.a
    href={href || '#'}
    target={href ? "_blank" : undefined}
    rel={href ? "noreferrer noopener" : undefined}
    whileHover={{ scale: href ? 1.02 : 1 }}
    className={`flex items-center gap-4 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 ${href ? 'hover:border-cyan-400/50 hover:bg-slate-800/50' : 'cursor-default'} transition-all duration-300 group`}
  >
    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${color.replace('text-', 'bg-')}/10 group-hover:${color.replace('text-', 'bg-')}/20 transition-colors duration-300`}>
      <Icon className={`w-5 h-5 ${color}`} />
    </div>
    <div className="flex-1 min-w-0">
      <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">{label}</span>
      <span className="block text-sm font-medium text-slate-200 truncate">{value}</span>
    </div>
  </motion.a>
);

// --- Reusable Social Link ---
const SocialLink = ({ icon: Icon, href, label, color }) => (
  <motion.a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer noopener"
    whileHover={{ scale: 1.1, y: -3 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    className={`flex h-11 w-11 items-center justify-center rounded-lg text-xl transition-all duration-300 ${color} border border-slate-700/30 hover:border-slate-600/50`}
  >
    <Icon />
  </motion.a>
);

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const toEmail = import.meta.env.VITE_EMAIL_TO_EMAIL || 'alimmohammad034@gmail.com'

  // Style for autofill to match dark theme
  const autofillStyle = `
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px rgb(15, 23, 42) inset !important;
      -webkit-text-fill-color: rgb(226, 232, 240) !important;
      caret-color: rgb(34, 211, 238) !important;
      transition: background-color 5000s ease-in-out 0s;
    }
  `

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!formRef.current) {
      return
    }

    setStatus('sending')
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      const formData = new FormData(formRef.current)
      const fromName = formData.get('from_name') || 'Anonymous'
      const fromEmail = formData.get('from_email') || ''
      const message = formData.get('message') || ''
      
      // If EmailJS not configured, fall back to mailto
      if (!serviceId || !templateId || !publicKey) {
        const subject = encodeURIComponent(`New portfolio message from ${fromName}`)
        const body = encodeURIComponent(`From: ${fromName}${fromEmail ? ` <${fromEmail}>` : ''}\n\n${message}`)
        window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`
        setStatus('sent')
        formRef.current.reset()
        return
      }
      
      // Use EmailJS if env is available
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)

      setStatus('sent')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS Error:', err)
      // As a resilient fallback, still try mailto so the user can reach you
      try {
        const formData = new FormData(formRef.current)
        const fromName = formData.get('from_name') || 'Anonymous'
        const fromEmail = formData.get('from_email') || ''
        const message = formData.get('message') || ''
        const subject = encodeURIComponent(`New portfolio message from ${fromName}`)
        const body = encodeURIComponent(`From: ${fromName}${fromEmail ? ` <${fromEmail}>` : ''}\n\n${message}`)
        window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`
        setStatus('sent')
      } catch (_) {
        setStatus('error')
      }
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  // --- Data for Info and Socials ---
  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
  value: toEmail,
  href: `mailto:${toEmail}`,
      color: 'text-cyan-400'
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+91 9370150313', 
      href: 'tel:+919370150313',
      color: 'text-blue-400'
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Amravati, Maharashtra, India', 
      href: null,
      color: 'text-purple-400'
    }
  ]

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mohammad-alim-7a8a52289/', label: 'LinkedIn', color: 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400' },
    { icon: FaGithub, href: 'https://github.com/alim034', label: 'GitHub', color: 'bg-slate-700/30 hover:bg-slate-700/50 text-slate-300' },
    { icon: FaInstagram, href: 'https://www.instagram.com/_justalim__?igsh=bmtpdG9zcGd2ZjBw', label: 'Instagram', color: 'bg-pink-500/10 hover:bg-pink-500/20 text-pink-400' },
  ]

  return (
    <section id="contact" className="section relative overflow-hidden py-16 md:py-24" aria-label="Contact">
      {/* Autofill styling */}
      <style>{autofillStyle}</style>
      
      {/* Background specific to this section */}
      <Suspense fallback={null}>
        <SectionBackground />
      </Suspense>

      <div className="container-lg relative z-10 px-4 md:px-6">
        {/* Section Title - Matching other sections */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
            Contact
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start max-w-7xl mx-auto">
          
          {/* --- Left Column: Info --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Contact Info Card */}
            <div className="rounded-lg p-[2px] bg-gradient-to-br from-cyan-500/50 via-blue-500/50 to-purple-500/50 shadow-xl">
              <div className="bg-slate-900/95 rounded-[7px] p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 mb-3">
                    Let's Connect
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed">
                    I'm open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>
                
                {/* Contact Info Items */}
                <div className="space-y-3 pt-2">
                  {contactInfo.map((item) => (
                    <ContactInfoItem key={item.label} {...item} />
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-slate-700/50 pt-6">
                  <p className="text-sm text-slate-400 mb-4 font-medium">FOLLOW ME</p>
                  {/* Social Links */}
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <SocialLink key={link.label} {...link} />
                    ))}
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-green-400 font-medium">Available for new projects</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Right Column: Form --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-lg p-[2px] bg-gradient-to-br from-blue-500/50 via-purple-500/50 to-cyan-500/50 shadow-xl"
          >
            <div className="bg-slate-900/95 rounded-[7px] p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">Send a Message</h3>
                <p className="text-sm text-slate-400 mt-2">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <form ref={formRef} onSubmit={onSubmit} className="space-y-8">
                {/* Name and Email in Grid */}
                <div className="grid sm:grid-cols-2 gap-8">
                  <FormInput name="from_name" label="Your Name" required={true} />
                  <FormInput type="email" name="from_email" label="Your Email" required={true} />
                </div>
                {/* Hidden field to support EmailJS templates that use to_email */}
                <input type="hidden" name="to_email" value={toEmail} />
                
                {/* Message - Enhanced textarea */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-medium text-slate-400">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <div className="group relative rounded-xl border border-slate-700/60 bg-slate-800/40 focus-within:border-cyan-400/60 focus-within:bg-slate-800/60 transition-all duration-300">
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={7}
                      className="w-full bg-transparent px-4 py-3 text-base leading-relaxed text-slate-100 caret-cyan-400 placeholder-slate-500/70 focus:outline-none resize-y min-h-[140px] max-h-[320px] selection:bg-cyan-500/20 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
                      placeholder="Write your message here..."
                    />
                    {/* Accent underline on focus */}
                    <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                    className="group relative w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl
                               text-white font-bold text-lg transition-all duration-300
                               bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
                               hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500
                               ring-1 ring-transparent hover:ring-cyan-400/40
                               shadow-xl hover:shadow-2xl hover:shadow-blue-600/30"
                  >
                    <IoSend className="w-6 h-6" />
                    <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                  </motion.button>
                </div>

                {/* Status Messages */}
                {status === 'sent' && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center"
                  >
                    ✗ Failed to send. Please try again or email me directly.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

