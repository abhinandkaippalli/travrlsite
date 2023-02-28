import React from 'react'
import Header from '../../header/Header'
import MidbarSection from './sections/MidbarSection'
import PackageDetailsSection from './sections/PackageDetailsSection'
import Footer from '../../footer/Footer'

function PackageDetails() {
  return (
    <div>
        <Header />
        <MidbarSection />
        <PackageDetailsSection />
        <Footer />
    </div>
  )
}

export default PackageDetails