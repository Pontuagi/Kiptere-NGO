export default function Mission() {
  return (
    <section id="mission" className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg
                    className="w-24 h-24 text-primary-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-primary-600 font-medium">Students learning computer skills</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-500 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-300 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Bridging the Digital Divide in Rural Kenya
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-800">The Challenge:</strong> In Kericho County, thousands of students
                attend schools without access to computers or digital education. While the world moves forward
                digitally, these children risk being left behind.
              </p>
              <p>
                <strong className="text-gray-800">Our Solution:</strong> Kiptere NGO works directly with rural
                schools to provide computers, establish computer labs, and deliver comprehensive digital literacy
                programs. We don&apos;t just donate equipment &mdash; we ensure sustainable impact through teacher
                training and ongoing support.
              </p>
              <p>
                <strong className="text-gray-800">Our Vision:</strong> A future where every student in rural
                Kenya has the digital skills needed to thrive in the modern economy, opening doors to education,
                employment, and entrepreneurship opportunities.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 space-y-3">
              {[
                'Sustainable, long-term partnerships with schools',
                'Comprehensive teacher training programs',
                'Curriculum aligned with Kenyan education standards',
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
