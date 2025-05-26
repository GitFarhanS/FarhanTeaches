import { motion } from 'framer-motion';

const features = [
  {
    title: 'Personalized Learning',
    description: 'Tailored teaching approach that adapts to each student\'s learning style and pace.',
    icon: '🎯',
  },
  {
    title: 'Expert Knowledge',
    description: 'In-depth understanding of A-Level and GCSE syllabi with years of teaching experience.',
    icon: '📚',
  },
  {
    title: 'Exam Preparation',
    description: 'Comprehensive exam preparation including past paper practice and exam techniques.',
    icon: '✍️',
  },
  {
    title: 'Flexible Scheduling',
    description: 'Convenient online and in-person sessions that fit your schedule.',
    icon: '⏰',
  },
  {
    title: 'Progress Tracking',
    description: 'Regular assessments and feedback to monitor student progress.',
    icon: '📊',
  },
  {
    title: 'Supportive Environment',
    description: 'Creating a positive and encouraging learning atmosphere.',
    icon: '🤝',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Meet Your Tutor section */}
        <div className="mb-16 flex flex-col md:flex-row items-center md:items-start md:space-x-10 text-center">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:ml-16 md:-mt-8 border-4 border-primary-100">
            <motion.img
              src={import.meta.env.BASE_URL + 'assets/images/mesmilinglandscape.jpg'}
              alt="Farhan Shaikh portrait"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="h-[150%] object-cover object-[70%]"
            />
          </div>
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4 max-w-2xl mx-auto md:mx-0"
            >
              Meet Your Tutor
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto md:mx-0 text-lg text-gray-700"
            >
              <p className="mb-2 font-semibold text-primary-700">Farhan Shaikh</p>
              <p>
                Hi! I'm Farhan, a Computer Science with Artificial Intelligence student at the University of Nottingham, and your dedicated tutor for A-level and GCSE Maths, Computer Science, and more. I have over a year of experience teaching students online and in-person, with a consistent 5-star rating and a passion for helping students achieve their best.
              </p>
              <p className="mt-2">
                My A-levels include Mathematics, Computer Science, Economics, and Further Mathematics, and hands-on experience in programming, mentoring, and educational projects. I've delivered 70+ lessons, designed diverse teaching strategies, and helped students build confidence and excel in their exams.
              </p>
              <p className="mt-2">
                Whether you're aiming for top grades or need support building your foundations, I'm here to help you succeed with personalised, engaging, and effective tutoring.
              </p>
            </motion.div>
          </div>
        </div>


        {/* Teaching approach */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900">My Teaching Approach</h2>
              <p className="mt-4 text-gray-600">
                At FarhanTeaches, we believe in a student-centered approach to learning. My teaching methodology focuses on:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-primary-600">•</span>
                  <span className="ml-3 text-gray-600">Understanding each student's unique learning style and needs</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-primary-600">•</span>
                  <span className="ml-3 text-gray-600">Building strong foundations in core concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-primary-600">•</span>
                  <span className="ml-3 text-gray-600">Developing problem-solving and critical thinking skills</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-primary-600">•</span>
                  <span className="ml-3 text-gray-600">Regular practice and reinforcement of key topics</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900">Why Choose Me?</h2>
              <p className="mt-4 text-gray-600">
                We are committed to providing the highest quality tutoring service with:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-primary-600">•</span>
                  <span className="ml-3 text-gray-600">Experienced and qualified tutors</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-primary-600">•</span>
                  <span className="ml-3 text-gray-600">Up-to-date knowledge of exam boards and syllabi</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-primary-600">•</span>
                  <span className="ml-3 text-gray-600">Flexible learning options (online and in-person)</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-primary-600">•</span>
                  <span className="ml-3 text-gray-600">Regular progress reports and feedback</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Features grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">What We Offer</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Check out my portfolio website!</h2>
          <div className="flex justify-center">
            <iframe
              src="https://farhanshaikh.uk" // <-- replace with your desired URL
              title="External Page"
              width="1000"
              height="600"
              className="rounded-lg shadow-lg border"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
} 