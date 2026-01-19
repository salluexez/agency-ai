import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import InnerPage from './components/InnerPage'
import useThemeStore from './store/ThemeStore'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'


const App = () => {
  const initTheme = useThemeStore((state) => state.initTheme);

  useEffect(() => {
    // Initialize theme on component mount
    if (initTheme) {
      initTheme();
    }
  }, [initTheme]);

  return (
    <div className='dark:bg-gray-900'>
      <CustomCursor />
      <Navbar />
      <InnerPage />
      <Footer />
    </div>
  )
}

export default App;