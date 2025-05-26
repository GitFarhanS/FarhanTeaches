import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4"
          >
            Pricing & Discounts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-2xl mx-auto"
          >
            I offer flexible rates and block booking discounts to make high-quality tutoring accessible. Every new tutee gets a <span className="text-primary-600 font-semibold">free 15-minute meeting</span> to discuss your goals and see if we're a good fit!
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* A-Level Single Session */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8 border border-primary-100"
          >
            <h2 className="text-2xl font-bold text-primary-700 mb-2">A-Level</h2>
            <p className="text-4xl font-extrabold text-gray-900 mb-2">£25</p>
            <p className="text-gray-600 mb-4">per 1-hour session</p>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li>Personalised 1:1 tuition</li>
              <li>Flexible scheduling</li>
              <li>All exam boards covered</li>
            </ul>
          </motion.div>

          {/* GCSE Single Session */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8 border border-primary-100"
          >
            <h2 className="text-2xl font-bold text-primary-700 mb-2">GCSE</h2>
            <p className="text-4xl font-extrabold text-gray-900 mb-2">£20</p>
            <p className="text-gray-600 mb-4">per 1-hour session</p>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li>Personalised 1:1 tuition</li>
              <li>Flexible scheduling</li>
              <li>All exam boards covered</li>
            </ul>
          </motion.div>

          {/* Block Discounts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8 border border-primary-100"
          >
            <h2 className="text-2xl font-bold text-primary-700 mb-2">Block Booking Discounts</h2>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li><span className="font-semibold">A-Level:</span> Block of 10 sessions at <span className="text-primary-700 font-bold">£22</span> per session</li>
              <li><span className="font-semibold">GCSE:</span> Block of 10 sessions at <span className="text-primary-700 font-bold">£18</span> per session</li>
            </ul>
            <p className="text-gray-600">Each session is 1 hour long. Block bookings must be paid in advance.</p>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-primary-700">Ready to get started?</span> Book your free 15-minute meeting or contact me for more details!
          </p>
        </div>
      </div>
    </div>
  );
} 