import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

export function BreezeFlightStatusPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 sm:pt-28 lg:pt-32">
        {/* Hero Section - 2 Column Copy, Image Below */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Two Column Text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/10 text-blue-400 rounded-full text-xs sm:text-sm font-medium">
                  Product Design · Mobile App
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Breeze Flight Status
                </h1>
                <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
                  A comprehensive flight tracking application designed for Breeze Airways passengers, providing real-time updates, gate information, and seamless travel management in one intuitive interface.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wide mb-2">Overview</p>
                  <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                    Breeze Airways needed a modern flight status app that would differentiate them from competitors while providing passengers with real-time flight information, notifications, and travel tools.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <p className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wide mb-2">Platform</p>
                    <p className="text-sm sm:text-base text-white">iOS & Android</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wide mb-2">Timeline</p>
                    <p className="text-sm sm:text-base text-white">4 Months</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Image Below */}
          <div className="bg-blue-600/10">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80"
              alt="Breeze Flight Status App"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="px-4 sm:px-6 lg:px-8 lg:pl-8 xl:pl-16 space-y-6 flex items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">The Problem</h2>
                  <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
                    Breeze Airways passengers were relying on third-party flight tracking apps that didn't integrate with the airline's systems, leading to delayed updates and inconsistent information.
                  </p>
                  <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-400 text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Delayed Information</h3>
                      <p className="text-sm text-neutral-400">
                        Third-party apps showed flight status updates 10-15 minutes after changes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-400 text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Poor User Experience</h3>
                      <p className="text-sm text-neutral-400">
                        Generic interfaces cluttered with irrelevant airline information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-400 text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Missing Features</h3>
                      <p className="text-sm text-neutral-400">
                        No integration with baggage tracking or gate change notifications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-cyan-600/10 mt-8 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1200&q=80"
                alt="User Research"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Research Insights */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="order-2 lg:order-1 bg-sky-500/10">
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80"
                  alt="Research Findings"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 px-4 sm:px-6 lg:px-8 lg:pr-8 xl:pr-16 space-y-6 flex items-center mb-8 lg:mb-0">
                <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Research Insights</h2>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                  We interviewed 45 frequent Breeze passengers and analyzed usage patterns from competitor apps to understand passenger needs and pain points.
                </p>
                <div className="bg-neutral-900 rounded-2xl p-6 space-y-4">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-blue-400">78%</p>
                    <p className="text-sm text-neutral-400">Check flight status multiple times before departure</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-blue-400">62%</p>
                    <p className="text-sm text-neutral-400">Want gate change notifications sent directly to phone</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-blue-400">85%</p>
                    <p className="text-sm text-neutral-400">Prefer mobile app over website for flight tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Design Process</h2>
              <p className="text-base sm:text-lg text-neutral-400 max-w-3xl mx-auto">
                We followed a user-centered design approach, iterating through wireframes, prototypes, and user testing sessions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-neutral-900 rounded-2xl p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <span className="text-blue-400 text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold">Discovery</h3>
                <p className="text-sm text-neutral-400">
                  User interviews, competitive analysis, and journey mapping
                </p>
              </div>
              <div className="bg-neutral-900 rounded-2xl p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <span className="text-blue-400 text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold">Ideation</h3>
                <p className="text-sm text-neutral-400">
                  Sketching, wireframing, and information architecture
                </p>
              </div>
              <div className="bg-neutral-900 rounded-2xl p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <span className="text-blue-400 text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold">Design</h3>
                <p className="text-sm text-neutral-400">
                  High-fidelity mockups and interactive prototypes
                </p>
              </div>
              <div className="bg-neutral-900 rounded-2xl p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <span className="text-blue-400 text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold">Testing</h3>
                <p className="text-sm text-neutral-400">
                  Usability testing and iteration based on feedback
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="px-4 sm:px-6 lg:px-8 lg:pl-8 xl:pl-16 space-y-6 flex items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Key Features</h2>
                  <div className="space-y-4">
                  <div className="bg-neutral-900 rounded-xl p-5">
                    <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="text-blue-400">→</span>
                      Real-Time Flight Tracking
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Live updates on flight status, delays, and gate changes pushed directly to passengers
                    </p>
                  </div>
                  <div className="bg-neutral-900 rounded-xl p-5">
                    <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="text-blue-400">→</span>
                      Interactive Map
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Visual flight tracking with live aircraft position and route information
                    </p>
                  </div>
                  <div className="bg-neutral-900 rounded-xl p-5">
                    <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="text-blue-400">→</span>
                      Smart Notifications
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Contextual alerts for boarding, gate changes, and baggage claim updates
                    </p>
                  </div>
                  <div className="bg-neutral-900 rounded-xl p-5">
                    <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="text-blue-400">→</span>
                      Baggage Tracking
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Track checked bags from check-in to baggage claim with real-time status
                    </p>
                  </div>
                </div>
                </div>
              </div>
              <div className="bg-blue-500/10 mt-8 lg:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
                  alt="App Features"
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
        </section>

        {/* Results */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Results & Impact</h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
              The Breeze Flight Status app successfully launched and has become an essential travel companion for Breeze Airways passengers. The app delivers real-time flight information, seamless baggage tracking, and intuitive navigation that keeps travelers informed throughout their journey.
            </p>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Passengers now receive instant notifications for gate changes, delays, and boarding updates, eliminating the uncertainty and stress that often comes with air travel. The clean, focused interface puts critical information front and center, making it easy to find exactly what you need when you need it.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
