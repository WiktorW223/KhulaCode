import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ScrollToTop() {
  const [scroll, setScroll] = useState<boolean>(false)

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 100) {
          setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  })
  const backToTop = () => {
    window.scrollTo(0,0)
  }
  return (
    <Link id="back2Top" onClick={()=>backToTop()}  className={`top-scroll ${scroll ? 'd-block' : 'd-none'}`} title="Back to top" to="#"><i className="ti-arrow-up"></i></Link>
  )
}
