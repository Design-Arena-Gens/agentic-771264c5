'use client'

import { motion } from 'framer-motion'
import {
  FileText,
  FilePlus,
  FileUp,
  FileDown,
  Scissors,
  Merge,
  Lock,
  Unlock,
  RotateCw,
  Image,
  FileCheck,
  Zap,
  Shield,
  Sparkles
} from 'lucide-react'

const tools = [
  {
    icon: FilePlus,
    title: 'Merge PDF',
    description: 'Combine multiple PDFs into one',
    gradient: 'from-purple-500 to-pink-500',
    delay: 0.1
  },
  {
    icon: Scissors,
    title: 'Split PDF',
    description: 'Extract pages from your PDF',
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0.2
  },
  {
    icon: FileDown,
    title: 'Compress PDF',
    description: 'Reduce PDF file size',
    gradient: 'from-green-500 to-emerald-500',
    delay: 0.3
  },
  {
    icon: FileText,
    title: 'PDF to Word',
    description: 'Convert PDF to editable Word',
    gradient: 'from-orange-500 to-red-500',
    delay: 0.4
  },
  {
    icon: Image,
    title: 'PDF to JPG',
    description: 'Convert PDF pages to images',
    gradient: 'from-pink-500 to-rose-500',
    delay: 0.5
  },
  {
    icon: FileUp,
    title: 'JPG to PDF',
    description: 'Convert images to PDF',
    gradient: 'from-indigo-500 to-purple-500',
    delay: 0.6
  },
  {
    icon: Lock,
    title: 'Protect PDF',
    description: 'Add password to your PDF',
    gradient: 'from-red-500 to-orange-500',
    delay: 0.7
  },
  {
    icon: Unlock,
    title: 'Unlock PDF',
    description: 'Remove PDF password',
    gradient: 'from-teal-500 to-green-500',
    delay: 0.8
  },
  {
    icon: RotateCw,
    title: 'Rotate PDF',
    description: 'Rotate PDF pages',
    gradient: 'from-yellow-500 to-orange-500',
    delay: 0.9
  },
  {
    icon: FileCheck,
    title: 'Sign PDF',
    description: 'Add signature to PDF',
    gradient: 'from-violet-500 to-purple-500',
    delay: 1.0
  },
  {
    icon: Merge,
    title: 'Organize PDF',
    description: 'Reorder PDF pages',
    gradient: 'from-cyan-500 to-blue-500',
    delay: 1.1
  },
  {
    icon: FileText,
    title: 'Edit PDF',
    description: 'Edit PDF content',
    gradient: 'from-fuchsia-500 to-pink-500',
    delay: 1.2
  },
]

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process your PDFs in seconds with our optimized engine'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your files are encrypted and automatically deleted after processing'
  },
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'Best-in-class conversion quality with no compromise'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 glass-effect"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              PDF Tools Pro
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#tools" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Tools</a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Features</a>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl opacity-50 animate-pulse-slow"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-3xl shadow-2xl">
                  <svg width="100" height="100" viewBox="0 0 100 100" className="animate-float">
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.8}} />
                      </linearGradient>
                    </defs>
                    <rect x="20" y="10" width="60" height="80" rx="5" fill="url(#grad1)" />
                    <rect x="30" y="25" width="40" height="3" rx="1.5" fill="#a855f7" opacity="0.7" />
                    <rect x="30" y="35" width="35" height="3" rx="1.5" fill="#a855f7" opacity="0.7" />
                    <rect x="30" y="45" width="40" height="3" rx="1.5" fill="#ec4899" opacity="0.7" />
                    <rect x="30" y="55" width="30" height="3" rx="1.5" fill="#ec4899" opacity="0.7" />
                  </svg>
                </div>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              All-in-One PDF Tools
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Professional PDF solutions with a modern touch. Convert, merge, compress, and edit your PDFs with ease.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              Start for Free
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Powerful PDF Tools
            </h2>
            <p className="text-xl text-gray-600">Everything you need for PDF management</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: tool.delay }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift cursor-pointer border border-gray-100">
                  <div className={`w-14 h-14 bg-gradient-to-br ${tool.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <tool.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">Join thousands of users who trust our PDF tools</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-purple-600 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Try It Free
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">PDF Tools Pro</span>
              </div>
              <p className="text-gray-400">Professional PDF solutions for everyone</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Merge PDF</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Split PDF</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compress PDF</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PDF Tools Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
