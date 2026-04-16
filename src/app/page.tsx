export default function Home() {
  return (
    <div className="min-h-screen bg-[#16213E]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1A1A2E] border-b border-[#0F3460] z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">GenieAI</div>
          <button className="bg-[#E94560] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#d63850] transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your AI Genie
            <span className="block text-[#E94560]">Wishes Granted</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Unlock the power of artificial intelligence with GenieAI. Transform your ideas into reality with cutting-edge AI solutions that work like magic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E94560] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#d63850] transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-[#E94560] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#E94560]/10 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            Three Wishes, Unlimited Power
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#0F3460] p-8 rounded-xl border border-[#E94560]/20 hover:border-[#E94560] transition-colors">
              <div className="text-4xl mb-4">🧞</div>
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent Automation</h3>
              <p className="text-gray-300">
                Automate complex workflows with AI that understands your needs and adapts to your business.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#0F3460] p-8 rounded-xl border border-[#E94560]/20 hover:border-[#E94560] transition-colors">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Magic Insights</h3>
              <p className="text-gray-300">
                Uncover hidden patterns and opportunities with AI-powered analytics that reveal what matters most.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#0F3460] p-8 rounded-xl border border-[#E94560]/20 hover:border-[#E94560] transition-colors">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Results</h3>
              <p className="text-gray-300">
                Deploy AI solutions in minutes, not months. Experience the magic of instant transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-[#0F3460] p-12 rounded-2xl border border-[#E94560]">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make Your Wish?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands who have unlocked the power of GenieAI
          </p>
          <button className="bg-[#E94560] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#d63850] transition-colors">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] py-8 px-6 border-t border-[#0F3460]">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2026 GenieAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
