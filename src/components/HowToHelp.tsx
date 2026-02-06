import Image from 'next/image'

const helpOptions = [
  {
    title: 'Make a Donation',
    description:
      'Your financial contribution directly funds computer equipment, teacher training, and program operations. Every amount makes a difference.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    cta: 'Donate Now',
    primary: true,
  },
  {
    title: 'Donate Equipment',
    description:
      'Have working computers, laptops, or accessories? We accept equipment donations that we refurbish and distribute to schools in need.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    cta: 'Learn More',
    primary: false,
  },
  {
    title: 'Volunteer With Us',
    description:
      'Share your skills! We need volunteers for teaching, mentoring, technical support, fundraising, and community outreach.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    cta: 'Join Us',
    primary: false,
  },
  {
    title: 'Corporate Partnership',
    description:
      'Partner with us for employee volunteering, equipment donations, or sponsorship opportunities. Make your CSR goals a reality.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    cta: 'Partner With Us',
    primary: false,
  },
]

export default function HowToHelp() {
  return (
    <section id="help" className="section-padding bg-gray-50">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Get Involved
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            How You Can Help
          </h2>
          <p className="text-gray-600 text-lg">
            Join us in our mission to empower rural Kenyan students through digital education.
            There are many ways to make a difference.
          </p>
        </div>

        {/* Help Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {helpOptions.map((option, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 relative overflow-hidden ${
                option.primary
                  ? 'text-white'
                  : 'bg-white border border-gray-100 shadow-sm'
              }`}
            >
              {/* Background image for primary card */}
              {option.primary && (
                <>
                  <div className="absolute inset-0">
                    <Image
                      src="/images/hero-3.jpeg"
                      alt="Students learning"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 to-secondary-500/90" />
                  </div>
                </>
              )}

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    option.primary
                      ? 'bg-white/20'
                      : 'bg-gradient-to-br from-primary-100 to-secondary-100 text-primary-600'
                  }`}
                >
                  {option.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    option.primary ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {option.title}
                </h3>
                <p
                  className={`mb-6 ${
                    option.primary ? 'text-white/90' : 'text-gray-600'
                  }`}
                >
                  {option.description}
                </p>
                <a
                  href="#"
                  className={`inline-flex items-center font-semibold transition-colors ${
                    option.primary
                      ? 'text-yellow-300 hover:text-yellow-200'
                      : 'text-primary-600 hover:text-primary-700'
                  }`}
                >
                  {option.cta}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Have Questions? Get in Touch
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We&apos;d love to hear from you. Whether you have questions about our programs,
            want to learn more about volunteering, or are interested in partnering with us,
            reach out and we&apos;ll get back to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@kiptere.org"
              className="btn-primary inline-flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
            <a
              href="tel:+254700000000"
              className="btn-secondary inline-flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
