import useOnScrolled from '@/lib/onScrolled'
import { useLocation } from '@tanstack/react-router'
import { cn } from 'cn'

export default function Logo() {
  const onScrolled = useOnScrolled()
  const pathname = useLocation({
    select: (locaton) => locaton.pathname
  })
  return (
    <a href="/" className={cn('h-6 w-12 lg:h-12 lg:w-30 flex items-center  justify-center font-bold lg:text-base text-white text-sm', onScrolled && " text-(--brand-primary)", pathname !== "/" && "text-(--brand-primary)" )}>
        <span className=''>BOLDWASH</span>
    </a>
  )
}
