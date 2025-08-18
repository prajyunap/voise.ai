export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
      <div className="font-bold text-xl text-brand">Voise.ai</div>
      <div className="space-x-6 text-gray-700 font-medium">
        <a href="#features">Features</a>
        <a href="#kb">Knowledge Space</a>
        <a href="#try">Try Voise</a>
      </div>
    </nav>
  );
}