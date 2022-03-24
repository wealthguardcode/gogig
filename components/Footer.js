import Link from 'next/link'

const navigation = {
  solutions: [
    { name: 'Home', href: '/' },
    { name: 'Risk Management', href: '/risk-management' },
    { name: 'Employee Benefits', href: '/employee-benefits' },
    { name: 'Personal Insurance', href: '/personal-insurance' },
    { name: 'Meet Your Team', href: '/meet-your-team' },
  ],
  address: [{ name: '7205 FM 1488 Rd, Ste-A' }, { name: 'Magnolia, TX 77354' }],
  contact: [
    { name: '832-930-3827', href: 'tel:8329303827' },
    {
      name: 'email@email.com.com',
      href: 'mailto:email@email.com.com',
    },
  ],
}

export default function Footer() {
  return (
    <footer className='bg-white' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8 xl:col-span-1'>
            <Link href='/'>
              <a>
                <img
                  className='h-16 w-auto'
                  src='/images/guardify-full.jpg'
                  alt='Guardify logo'
                />
              </a>
            </Link>
            <p className='text-gray-500 text-base'>
              Buisness owner&apos;s #1 choice for insurance.
            </p>
          </div>
          <div className='mt-12 grid md:grid-cols-2 gap-8 xl:mt-0 xl:col-span-2'>
            <div className='grid grid-cols-1 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Links
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-500 hover:text-gray-900'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='grid grid-cols-1  md:gap-6'>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Company
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.address.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-500 hover:text-gray-900'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Contact
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-500 hover:text-gray-900'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 border-t border-gray-200 pt-8'>
          <p className='text-base text-gray-400 xl:text-center'>
            &copy; {new Date().getFullYear()} Guardify Insurance Group LLC, All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
