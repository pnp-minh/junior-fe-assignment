import PricingSection from './sections/PricingSection'

function App() {
  return (
    <div className='min-h-screen bg-gray-50 py-8 px-4'>
      <div className='max-w-[1441px] mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>Part 2: Component Implementation</h1>

        <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>Instructions</h2>
          <p className='text-gray-600 mb-4'>Implement the component based on the provided Figma design below.</p>
          <ul className='list-disc list-inside text-gray-600 space-y-2'>
            <li>Match the design as closely as possible</li>
            <li>Use Tailwind CSS (preferred) or regular CSS</li>
            <li>Make it responsive (mobile & desktop)</li>
            <li>Write clean, reusable components</li>
          </ul>
        </div>

        {/* <div className='bg-blue-50 border border-blue-200 rounded-lg p-6'>
          <h3 className='text-lg font-semibold text-blue-900 mb-2'>📋 Your Implementation Goes Here</h3>
          <p className='text-blue-700'>Replace this section with your component implementation.</p>
        </div> */}

        <PricingSection />
      </div>
    </div>
  )
}

export default App
