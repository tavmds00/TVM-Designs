import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

export function IntervalPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 sm:pt-28 lg:pt-32">
        {/* Project Header */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500/10 text-green-400 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Product Design
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              Interval Timer
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-400 max-w-3xl">
              Precision interval timer designed for fitness enthusiasts and productivity seekers, featuring customizable workouts and detailed session analytics.
            </p>
          </div>
        </section>

        {/* Desktop Application */}
        <section className="pb-12 sm:pb-16 lg:pb-20">
          <div className="px-4 sm:px-6 lg:px-8 mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold">Desktop Application</h2>
          </div>
          <div className="bg-green-600/10">
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80"
              alt="Interval Desktop App"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Tablet Experience */}
        <section className="pb-12 sm:pb-16 lg:pb-20">
          <div className="px-4 sm:px-6 lg:px-8 mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold">Tablet Experience</h2>
          </div>
          <div className="bg-emerald-600/10">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80"
              alt="Interval Tablet Experience"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Mobile App */}
        <section className="pb-12 sm:pb-16 lg:pb-20">
          <div className="px-4 sm:px-6 lg:px-8 mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold">Mobile App</h2>
          </div>
          <div className="bg-teal-500/10">
            <img
              src="https://images.unsplash.com/photo-1483721310020-03333e577078?w=400&q=80"
              alt="Interval Mobile App"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Key Features */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-green-500/50 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-neutral-300">Customizable interval durations</span>
                </div>
              </div>
              <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-green-500/50 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-neutral-300">Multiple timer presets</span>
                </div>
              </div>
              <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-green-500/50 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-neutral-300">Audio and visual alerts</span>
                </div>
              </div>
              <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-green-500/50 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-neutral-300">Session history tracking</span>
                </div>
              </div>
              <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-green-500/50 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-neutral-300">Workout templates</span>
                </div>
              </div>
              <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-green-500/50 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-neutral-300">Progress analytics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20 text-center">
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white/20 hover:border-green-400"
            onClick={() => navigate("/projects")}
          >
            ← Back to Projects
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
