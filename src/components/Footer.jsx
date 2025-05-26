import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">FarhanTeaches</h3>
            <p className="mt-4 text-sm text-gray-600">
              Professional tutoring services for A-level and GCSE students in Mathematics, Computer Science, Physics, Business Studies, and Design Technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/subjects" className="text-sm text-gray-600 hover:text-primary-600">
                  Subjects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">
                Email: farhan@farhanteaches.co.uk
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} FarhanTeaches. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 