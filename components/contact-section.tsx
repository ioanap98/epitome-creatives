'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {  Mail, Instagram, Copy, Check, MessageSquare, FileText, Sparkles, Package } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const [result, setResult] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@epitomecreatives.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setResult('Sending…')

    // Gather all the fields from the form
    const form = e.currentTarget
    const formData = new FormData(form)
    // Your Web3Forms access key
    formData.append('access_key', '66f9c46a-07d4-4e4e-b2e4-1e8da31cf793')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const json = await res.json()

      if (json.success) {
        setResult('Thank you! Your message has been sent.')
        form.reset()
      } else {
        console.error('Web3Forms error', json)
        setResult('Oops! Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Fetch error', err)
      setResult('Network error. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  const steps = [
    {
      number: 1,
      title: 'Inquiry & Brief',
      description:
        'Share details about your product, brand, and goals - via the form, email, or a short call.',
      icon: MessageSquare,
      color: 'from-purple-400 to-pink-400',
    },
    {
      number: 2,
      title: 'Custom Proposal',
      description:
        'You’ll receive a clear proposal outlining deliverables, timeline, and pricing.',      icon: FileText,
      color: 'from-pink-400 to-purple-500',    },
    {
      number: 3,
      title: 'Production & Creation',
      description:
        'Once confirmed, we bring your vision to life - whether through photography, design, or development.',
      icon: Sparkles,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      number: 4,
      title: 'Delivery & Support',
      description:
        'Final deliverables are provided in your preferred format, ready to use. We\'re here for any follow-up support.',
      icon: Package,
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you need stunning product visuals or a high-converting website, share a few details about your brand and we'll come back with a clear proposal.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Tell Us About Your Project
            </h3>
            <p className="text-gray-600 mb-8">
              Tell us about your brand goals and we'll create a custom package tailored to your needs.
            </p>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name *"
                  required
                  className="border-gray-300 focus:border-black"
                />
                <Input
                  name="company"
                  placeholder="Company/Brand Name"
                  className="border-gray-300 focus:border-black"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  className="border-gray-300 focus:border-black"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="border-gray-300 focus:border-black"
                />
              </div>

              <div>
                <select
                  name="projectType"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:border-black"
                >
                  <option value="">Select service *</option>
                  <option value="web-design">
                    Website Design & Development
                  </option>
                  <option value="product-photography">
                    Product Photography
                  </option>
                  <option value="lifestyle">
                    Lifestyle Photography
                  </option>
                  <option value="product-videos">
                    Video & Motion Content
                  </option>
                  <option value="web-and-photography">
                    Website + Photography Package
                  </option>
                  <option value="complete-package">
                    Complete Brand Package
                  </option>
                  <option value="not-sure">
                    Not sure - need consultation
                  </option>
                </select>
              </div>

              <Textarea
                name="projectDetails"
                placeholder="Describe your project, brand style, goals, timeline..."
                required
                className="border-gray-300 focus:border-black"
                rows={4}
              />

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_100%] hover:bg-right-bottom text-white shadow-sm hover:shadow-lg transition-all duration-500"
                size="lg"
              >
                {submitting ? 'Sending…' : 'Request a Quote'}
              </Button>

              {result && (
                <p
                  className={`mt-4 text-center ${
                    result.includes('Thank')
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {result}
                </p>
              )}
            </motion.form>
          </motion.div>

          {/* Steps & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-light mb-10" style={{ fontFamily: 'var(--font-playfair), serif' }}>How It Works</h3>
            <div className="relative">
              {/* Vertical Connecting Line */}
              <motion.div
                className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-200 via-pink-200 to-blue-200"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{ transformOrigin: 'top' }}
              />

              <div className="space-y-8 mb-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="flex items-start gap-4 relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {/* Icon Circle */}
                    <div className="relative flex-shrink-0 z-10">
                      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md border-4 border-white">
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20`} />
                        <step.icon className={`w-5 h-5 text-transparent bg-gradient-to-br ${step.color} bg-clip-text`} strokeWidth={2} />
                      </div>

                      {/* Step Number Badge */}
                      <div className="absolute -top-1 -right-1">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xs font-semibold shadow-md`}>
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow pt-2">
                      <h4 className="text-lg font-medium mb-1.5 text-gray-800" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <h4 className="text-lg font-medium mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5" />
                <span>hello@epitomecreatives.com</span>
                <button
                  onClick={copyEmail}
                  className="ml-2 p-1.5 rounded hover:bg-gray-100 transition-colors"
                  title="Copy email"
                >
                  {emailCopied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5" />
                <a
                  href="https://www.instagram.com/epitome.creatives/"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @epitome.creatives
                </a>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
