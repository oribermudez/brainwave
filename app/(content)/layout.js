"use client"

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const ContentLayout = ({ children }) => {
  return (
    <>
      <div className='bg-white flex flex-col md:min-h-screen'>
        <Navbar />
          <div>
            {children}
          </div>
        <Footer />
      </div>
    </>
  )
}

export default ContentLayout
