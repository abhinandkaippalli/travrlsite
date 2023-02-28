import React, { useEffect, useState } from 'react'

function ScrollTop() {

    const [ showButton, setShowButton ] = useState(false)

    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
        }

        window.addEventListener('scroll', handleScrollButtonVisibility);

        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisibility)
        }
    },[])

    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }


  return (
    <div>
    {showButton && (
        <div id="scrollToTop" className='active' onClick={handleScrollToTop}><span>Go Up</span></div>
    )}
    </div>
  )
}

export default ScrollTop