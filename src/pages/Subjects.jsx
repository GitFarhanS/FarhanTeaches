import { motion } from 'framer-motion';

const subjects = {
  aLevel: [
    {
      name: 'Mathematics',
      description: 'Comprehensive coverage of A-Level Mathematics syllabus including:',
      topics: [
        'Pure Mathematics',
        'Statistics',
        'Mechanics',
        'Exam preparation and past paper practice',
        'Problem-solving techniques',
      ],
    },
    {
      name: 'Computer Science',
      description: 'Expert guidance in A-Level Computer Science covering:',
      topics: [
        'Programming (Python, Java)',
        'Data Structures and Algorithms',
        'Computer Systems',
        'Databases',
        'Networks and Web Technologies',
      ],
    },
  ],
  gcse: [
    {
      name: 'Mathematics',
      description: 'Foundation and Higher tier coverage including:',
      topics: [
        'Number and Algebra',
        'Geometry and Measures',
        'Statistics and Probability',
        'Problem-solving strategies',
        'Exam technique and practice',
      ],
    },
    {
      name: 'Physics',
      description: 'Comprehensive GCSE Physics tutoring covering:',
      topics: [
        'Forces and Motion',
        'Energy and Waves',
        'Electricity and Magnetism',
        'Particle Model of Matter',
        'Practical skills and experiments',
      ],
    },
    {
      name: 'Business Studies',
      description: 'Complete coverage of GCSE Business Studies including:',
      topics: [
        'Business in the Real World',
        'Influences on Business',
        'Business Operations',
        'Human Resources',
        'Marketing and Finance',
      ],
    },
    {
      name: 'Design Technology',
      description: 'Practical and theoretical knowledge in Design Technology:',
      topics: [
        'Core Technical Principles',
        'Specialist Technical Principles',
        'Designing and Making Principles',
        'Practical skills development',
        'Project work and portfolio building',
      ],
    },
  ],
};

export default function Subjects() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            My Subjects
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive tutoring services for both A-Level and GCSE students
          </p>
        </div>

        {/* A-Level Subjects */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">A-Level Subjects</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {subjects.aLevel.map((subject) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {subject.name}
                  </h3>
                  <p className="mt-4 text-gray-600">{subject.description}</p>
                  <ul className="mt-6 space-y-3">
                    {subject.topics.map((topic) => (
                      <li key={topic} className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-primary-600">
                          ✓
                        </span>
                        <span className="ml-3 text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GCSE Subjects */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">GCSE Subjects</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {subjects.gcse.map((subject) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {subject.name}
                  </h3>
                  <p className="mt-4 text-gray-600">{subject.description}</p>
                  <ul className="mt-6 space-y-3">
                    {subject.topics.map((topic) => (
                      <li key={topic} className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-primary-600">
                          ✓
                        </span>
                        <span className="ml-3 text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 