import useOnScrolled from '@/lib/onScrolled'
import React from 'react'
import Navbar from './navbar'

export default function HeaderNavbar() {
    const onScrolled = useOnScrolled()
  return (
    <header>
        { onScrolled && (
            <div className="w-full">
                <div className="bg-(--brand-secondary) width-wrapper fixed top-0 w-full z-100 py-1">
                    <Navbar />
                </div>
            </div>
        )}
    </header>
  )
}
