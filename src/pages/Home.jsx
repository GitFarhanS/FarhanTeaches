import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const subjects = [
  {
    name: 'A-Level Mathematics',
    description: 'Comprehensive tutoring for A-Level Mathematics, covering pure mathematics, statistics, and mechanics.',
    level: 'A-Level',
  },
  {
    name: 'A-Level Computer Science',
    description: 'Expert guidance in programming, algorithms, and computer systems for A-Level Computer Science.',
    level: 'A-Level',
  },
  {
    name: 'GCSE Mathematics',
    description: 'Build strong foundations in mathematics with our GCSE tutoring program.',
    level: 'GCSE',
  },
  {
    name: 'GCSE Physics',
    description: 'Master physics concepts and develop problem-solving skills for GCSE success.',
    level: 'GCSE',
  },
  {
    name: 'GCSE Business Studies',
    description: 'Learn business concepts, case studies, and exam techniques for GCSE Business Studies.',
    level: 'GCSE',
  },
  {
    name: 'GCSE Design Technology',
    description: 'Develop practical skills and theoretical knowledge in Design Technology.',
    level: 'GCSE',
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section with image */}
      <div className="relative bg-primary-600">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start">
          {/* Hero text */}
          <div className="flex-1 text-center md:text-left z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Expert Tutoring for A-Level and GCSE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 mx-auto text-xl text-primary-100"
            >
              Personalised tutoring in Mathematics, Computer Science, Physics, Business Studies, and Design Technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <Link to="/contact" className="btn">
                Get Started
              </Link>
            </motion.div>
          </div>
          {/* Hero image */}
          <motion.img
            src={import.meta.env.BASE_URL + 'assets/images/meportraitwater.jpg'}
            alt="Farhan Shaikh smiling"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-64 h-64 object-cover rounded-xl shadow-lg mt-10 md:mt-0 md:ml-12 border-4 border-primary-100 hidden md:block"
          />
        </div>
      </div>

      {/* Featured subjects */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Subjects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive tutoring services for both A-Level and GCSE students
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8">
                <div className="text-sm font-semibold text-primary-600 tracking-wide uppercase">
                  {subject.level}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {subject.name}
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  {subject.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 