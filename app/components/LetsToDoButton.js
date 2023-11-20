'use client'
import { useRef, useLayoutEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { gsap } from "gsap"
import Link from 'next/link'

const LetsToDoButton = () => {
  const arrowRef = useRef()
  useLayoutEffect(() => {
    gsap.to(arrowRef.current, {
      x: 10,
      duration: 1,
      repeat: -1,
    })
  }, [])

  return (
    <Link href="/todo">
      <button className="bg-[#123456] p-2 px-4 text-amber-100 rounded-full">
        Let&apos;s To do
        <FontAwesomeIcon ref={arrowRef} className='arrow-right ml-1 inline h-4 w-4' icon={faArrowRight} />
      </button>
    </Link>
    
  )
}

export default LetsToDoButton