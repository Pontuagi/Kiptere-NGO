const testimonials = [
  {
    quote:
      "Before Kiptere came to our school, I had never touched a computer. Now I can type, use the internet, and I'm even learning to code. I want to become a software engineer.",
    name: 'Grace M.',
    role: 'Student, Form 2',
    school: 'Kiptere Secondary School',
  },
  {
    quote:
      "The teacher training program transformed how I teach. I can now integrate technology into my lessons, and my students are more engaged than ever before.",
    name: 'Mr. David K.',
    role: 'ICT Teacher',
    school: 'Chepkiit Primary School',
  },
  {
    quote:
      "Seeing our children learn computer skills gives us hope for their future. They now have opportunities we never had. We are grateful to Kiptere NGO.",
    name: 'Sarah C.',
    role: 'Parent & Community Leader',
    school: 'Kericho County',
  },
]

export default function Impact() {
  return (
    <section id="impact" className="section-padding bg-white">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Stories of Change
          </h2>
          <p className="text-gray-600 text-lg">
            Real voices from the students, teachers, and communities whose lives have
            been transformed through digital education.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <svg
                className="absolute top-6 right-6 w-8 h-8 text-primary-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="text-gray-700 mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-primary-600">{testimonial.school}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Our Growing Impact
            </h3>
            <p className="text-white/80">
              Every number represents a life touched, a future brightened.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Students Reached' },
              { number: '12', label: 'Schools Supported' },
              { number: '50+', label: 'Computers Donated' },
              { number: '30+', label: 'Teachers Trained' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
