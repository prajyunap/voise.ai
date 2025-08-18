import Image from "next/image";
import Navbar from "@/components/Navbar";
import VoiseWidget from "@/components/VoiseWidget";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-20">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold leading-tight text-brand">
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
              className="bg-brand text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-600"
            >
              Try Voise Now
            </a>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <Image
            src="/hero.png"
            width={500}
            height={400}
            alt="Voise AI Assistant"
            className="rounded-lg"
          />
        </div>
      </section>
      <section id="features" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="p-6 shadow rounded-lg bg-gray-50">
            <h3 className="text-xl font-bold text-brand">Call Handling</h3>
            <p className="mt-2 text-gray-600">
              Voise answers calls, collects details like Name, Email, Phone, and
              Reason — saving leads automatically.
            </p>
          </div>
          <div className="p-6 shadow rounded-lg bg-gray-50">
            <h3 className="text-xl font-bold text-brand">Sales Pitching</h3>
            <p className="mt-2 text-gray-600">
              Tailors product pitches based on requirements. Not ready yet?
              Voise schedules follow-ups automatically.
            </p>
          </div>
          <div className="p-6 shadow rounded-lg bg-gray-50">
            <h3 className="text-xl font-bold text-brand">Knowledge Space</h3>
            <p className="mt-2 text-gray-600">
              Upload product docs, PDFs, or URLs — Voise learns instantly to
              answer smarter.
            </p>
          </div>
        </div>
      </section>
      <section id="kb" className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-brand mb-6">
          Knowledge Space
        </h2>
        <form
          action="/api/knowledge/upload"
          method="post"
          encType="multipart/form-data"
          className="flex gap-4 justify-center"
        >
          <input
            type="file"
            name="file"
            className="border p-2 rounded-lg"
            accept=".pdf,.md,.txt,.docx"
          />
          <button
            type="submit"
            className="bg-brand text-white px-4 rounded-lg hover:bg-indigo-600"
          >
            Upload
          </button>
        </form>
      </section>
      <section id="try" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-brand">Try Talking to Voise</h2>
        <div className="mt-6 flex justify-center">
          <VoiseWidget />
        </div>
      </section>
    </main>
  );
}