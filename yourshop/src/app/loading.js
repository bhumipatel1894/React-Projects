export default function Loading() {
  // Or a custom loading skeleton component
  return 
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="relative w-20 h-20">
      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-600 border-r-indigo-600 animate-spin"></div>
      <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-blue-600 border-l-blue-600 animate-spin animation-delay-200" style={{animationDirection: 'reverse'}}></div>
      <div className="absolute inset-4 rounded-full border-2 border-indigo-300 animate-pulse"></div>
    </div>
    <span className="ml-4 text-lg font-semibold text-indigo-700 animate-pulse">Loading...</span>
  </div>
}