import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

export function NewMOAPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 sm:pt-28 lg:pt-32">
        {/* Large Overflowing Title */}
        <section className="overflow-hidden px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <h1 className="text-[15vw] sm:text-[12vw] lg:text-[10vw] font-bold tracking-tight whitespace-nowrap">
            Museum of Aviation
          </h1>
        </section>

        {/* Sticky 2-Column Section */}
        <section className="pb-12 sm:pb-16 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
            {/* Left Column - Sticky Content */}
            <div className="lg:sticky lg:top-24 lg:self-start space-y-8 px-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-500/10 text-orange-400 rounded-full text-xs sm:text-sm font-medium">
                    Product Design
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    Restore
                  </h2>

                  <p className="text-xl sm:text-2xl text-neutral-300">
                    Improving Non Fiction Reading Retention
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                    About
                  </h3>
                  <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
                    <p>
                      In early 2024 I started reading a lot more non-fiction. The goal was to learn more, in exchange for spending less time on my phone.
                    </p>
                    <p>
                      Two things happened. I spent less time on my phone, but I felt like I didn't learn that much. I decided to solve this problem by designing and building a tool to help non-fiction readers like me remember more of what they read. The result is an app that has garnered attention, funding, and is rapidly on it's way to the App Store.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-3">
                      My Role
                    </h3>
                    <p className="text-base text-white">
                      Founding Product Designer & Developer
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-3">
                      Timeline
                    </h3>
                    <p className="text-base text-white">
                      Sept '24 - Now
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-3">
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-neutral-900 rounded-full text-sm">Figma</span>
                    <span className="px-3 py-1.5 bg-neutral-900 rounded-full text-sm">Cursor AI</span>
                    <span className="px-3 py-1.5 bg-neutral-900 rounded-full text-sm">Claude</span>
                    <span className="px-3 py-1.5 bg-neutral-900 rounded-full text-sm">Xcode</span>
                    <span className="px-3 py-1.5 bg-neutral-900 rounded-full text-sm">Github</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
                  >
                    View Case Study
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white/20 hover:border-orange-400 w-full sm:w-auto"
                  >
                    View Coded Demo
                  </Button>
                </div>
              </div>

              {/* Right Column - Scrolling Images */}
              <div className="space-y-8 lg:space-y-12">
                {/* Image 1 */}
                <div className="bg-orange-500/10">
                  <img
                    src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80"
                    alt="Air Traffic Control Interface - Dashboard"
                    className="w-full h-auto"
                  />
                </div>

                {/* Image 2 */}
                <div className="bg-green-600/10">
                  <img
                    src="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1200&q=80"
                    alt="Air Traffic Control Interface - Map View"
                    className="w-full h-auto"
                  />
                </div>

                {/* Image 3 */}
                <div className="bg-blue-500/10">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80"
                    alt="Air Traffic Control Interface - Mobile"
                    className="w-full h-auto"
                  />
                </div>

                {/* Image 4 */}
                <div className="bg-purple-500/10">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80"
                    alt="Air Traffic Control Interface - Analytics"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
        </section>

        {/* Section 1: 2 Column - Copy and Image */}
        <section className="py-12 sm:py-16 lg:py-20 bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="px-4 sm:px-6 lg:px-8 lg:pl-8 xl:pl-16 space-y-6 flex items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">The Challenge</h2>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-4">
                  The existing air traffic control interface was designed in the 1990s and struggled to meet modern operational demands. Controllers faced critical information overload, leading to slower decision-making and increased safety risks.
                </p>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                  Our goal was to redesign the entire system from the ground up, prioritizing clarity, speed, and real-time data visualization while maintaining compliance with FAA regulations.
                </p>
              </div>
            </div>
            <div className="bg-orange-500/10 mt-8 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                alt="Air Traffic Control Challenge"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2: 1 Column Text, Image Below, Button */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="px-4 sm:px-6 lg:px-8 mb-8">
            <div className="max-w-5xl mx-auto text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Research & Discovery</h2>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                We conducted extensive field research with air traffic controllers at 12 major airports, observing their workflows and pain points. Our findings revealed that controllers needed faster access to critical flight data, better visualization of weather patterns, and a more intuitive alert system.
              </p>
            </div>
          </div>

          <div className="bg-amber-500/10 mb-8">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
              alt="Research Process"
              className="w-full h-auto"
            />
          </div>

          <div className="px-4 sm:px-6 lg:px-8 text-center">
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/20 hover:border-orange-400"
              onClick={() => window.open("https://example.com/research", "_blank")}
            >
              View Full Research Report →
            </Button>
          </div>
        </section>

        {/* Section 3: 2 Column - Copy and Image/GIF */}
        <section className="py-12 sm:py-16 lg:py-20 bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="order-2 lg:order-1 bg-green-500/10">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Interface Animation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 px-4 sm:px-6 lg:px-8 lg:pr-8 xl:pr-16 space-y-6 flex items-center mb-8 lg:mb-0">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">The Solution</h2>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
                  We created a modular interface that adapts to controller preferences and operational needs. The new system features real-time aircraft tracking, predictive conflict detection, and seamless weather integration.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">✓</span>
                    <span className="text-neutral-300">40% reduction in decision-making time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">✓</span>
                    <span className="text-neutral-300">Enhanced safety with AI-powered alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">✓</span>
                    <span className="text-neutral-300">Seamless integration with existing systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <svg
                className="absolute -top-4 -left-4 w-12 h-12 text-orange-500/20"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <blockquote className="relative z-10">
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white mb-6 italic">
                  "This redesign has fundamentally transformed how we approach air traffic management. The interface is intuitive, responsive, and has significantly improved our operational efficiency."
                </p>
                <footer className="text-sm sm:text-base text-neutral-400">
                  <span className="font-semibold text-white">Sarah Martinez</span>
                  <span className="mx-2">·</span>
                  <span>Senior Air Traffic Controller, FAA</span>
                </footer>
              </blockquote>
              <svg
                className="absolute -bottom-4 -right-4 w-12 h-12 text-orange-500/20 rotate-180"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Final Section - Impact & Results */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-black">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Impact & Results</h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
              The new air traffic control system has been successfully deployed across multiple major airports, delivering significant improvements in operational efficiency and controller satisfaction:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span className="text-base sm:text-lg text-neutral-300">Controllers report 40% faster decision-making times when managing complex traffic scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span className="text-base sm:text-lg text-neutral-300">User satisfaction scores increased to 95%, with controllers praising the intuitive interface and real-time data visualization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span className="text-base sm:text-lg text-neutral-300">Successfully deployed across 12 major airports nationwide, with plans for continued expansion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span className="text-base sm:text-lg text-neutral-300">Reduced training time for new controllers by 30% due to improved usability and clearer information hierarchy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span className="text-base sm:text-lg text-neutral-300">Enhanced safety through AI-powered conflict detection and predictive alerts, reducing potential incidents</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
