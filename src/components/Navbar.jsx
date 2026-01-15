import assets from '../assets/assets'

const Navbar = ({ theme }) => {
  return (
    <nav className='w-full sticky top-0 z-20 backdrop-blur-xl bg-white/50 dark:bg-gray-900/70'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4'>
        <img
          src={theme === 'dark' ? assets.logo_dark : assets.logo}
          className='w-32 sm:w-40'
          alt='logo'
        />
      </div>
    </nav>
  )
}

export default Navbar
