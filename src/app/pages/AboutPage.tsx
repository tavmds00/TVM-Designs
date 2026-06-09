
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 pb-12 px-4 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">About Me:</h1>
                <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
                  <p>12+ years leading design for high-stakes, mission critical products. I've built and mentored design teams, defined processes, and shipped under strict operational constraints from military bases to government infrastructure. I bridge strategy and execution, aligning cross-functional teams around user needs that matter.</p>
                  <p>Discovery never stops, users always come first, and every decision is backed by data.</p>
                  <p>Based in Austin, Texas.</p>
                </div>
              </div>
              <div>
                <img src="/portfolio-pages/about/section1.png" alt="Profile" className="w-full h-auto max-w-[400px]" />
              </div>
            </div>
          </section>

          {/* Recent Experience Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Recent Experience</h2>

            <div className="space-y-12">
              {/* Experience 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Staff Product Designer</h3>
                  <p className="text-lg text-neutral-300">Amplify Federal</p>
                  <p className="text-lg text-neutral-300">2024 – present</p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base text-neutral-300 leading-relaxed">
                  Shipped MyCareer in 90 days as sole designer, driving a 30% increase in Marine turnout, 88% monitor meeting rate, and reducing wait times 
                  from 2 hours to 61 minutes. Success secured funding for the Marine Corps Software Factory program and established MyCareer as the foundational 
                  product for digital operations. Scaled the design team to 5, built the design system used across all products, and mentor designers daily.
                  </p>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Practice Lead Designer</h3>
                  <p className="text-lg text-neutral-300">Broadcom (acquired VMware Nov 2023)</p>
                  <p className="text-lg text-neutral-300">2019-2024</p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base text-neutral-300 leading-relaxed">
                  Built the accessibility practice from scratch, scaling WCAG 2.2 AAA compliance across 15 designers and mitigating millions in regulatory fines. 
                  Unified UX across 7 enterprise applications, increasing consistency by 25%. Invited to speak at UCLA's AnderTech panel.
                  </p>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Director of User Experience</h3>
                  <p className="text-lg text-neutral-300">USAA</p>
                  <p className="text-lg text-neutral-300">2018-2019</p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base text-neutral-300 leading-relaxed">
                  Led UX strategy for internal security platforms at a Fortune 100 company serving 37K employees. Achieved WCAG AAA compliance across 
                  the EVIMS Security Suite, mitigating $20M in regulatory risk. Redesigned call center mobile workflows reducing response times by 20%.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
