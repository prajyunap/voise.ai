export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
        <div className="font-bold text-xl text-indigo-600">Voise.ai</div>
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#features">Features</a>
          <a href="#kb">Knowledge Space</a>
          <a href="#try">Try Voise</a>
        </div>
      </nav>
      
      <main>
        <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-20">
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold leading-tight text-indigo-600">
              Where Conversations Convert.
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Meet <span className="font-semibold">Voise</span>, your AI sales &
              support agent that answers calls, captures leads, and closes deals —
              powered by your product knowledge.
            </p>
            <div className="mt-8">
              <a
                href="#try"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700"
              >
                Try Voise Now
              </a>
            </div>
          </div>
          <div className="flex-1 mt-10 md:mt-0">
            <div className="w-full h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-semibold">Voise AI Assistant</span>
            </div>
          </div>
        </section>
        
        <section id="features" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            <div className="p-6 shadow rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-indigo-600">Call Handling</h3>
              <p className="mt-2 text-gray-600">
                Voise answers calls, collects details like Name, Email, Phone, and
                Reason — saving leads automatically.
              </p>
            </div>
            <div className="p-6 shadow rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-indigo-600">Sales Pitching</h3>
              <p className="mt-2 text-gray-600">
                Tailors product pitches based on requirements. Not ready yet?
                Voise schedules follow-ups automatically.
              </p>
            </div>
            <div className="p-6 shadow rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-indigo-600">Knowledge Space</h3>
              <p className="mt-2 text-gray-600">
                Upload product docs, PDFs, or URLs — Voise learns instantly to
                answer smarter.
              </p>
            </div>
          </div>
        </section>
        
        <section id="try" className="py-20 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold text-indigo-600">Try Talking to Voise</h2>
          <div className="mt-6">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700">
              Talk to Voise
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}