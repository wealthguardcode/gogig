import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const moreContent = [
  {
    name: 'Term Life Quotes Now',
    href: '/term-life-quotes-now',
  },
  {
    name: 'Life Insurance',
    href: '/life-insurance',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover className='relative bg-white header-links'>
      <div className='max-w-7xl mx-auto px-4 py-2 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start md:w-0 md:flex-1'>
            <Link href='/'>
              <a>
                <span className='sr-only'>Guardify</span>
                <img
                  className='h-12 w-auto'
                  src='/images/guardify-logo.jpg'
                  alt='Guardify Logo'
                />
              </a>
            </Link>
          </div>
          <div className='-mr-2 -my-2 lg:hidden '>
            <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Popover.Group as='nav' className='hidden lg:flex space-x-10 '>
            <Link href='/'>
              <a className='inline-flex items-center text-md font-medium text-gray-500 hover:text-blue-600 header-links'>
                Home
              </a>
            </Link>
            <Link href='/risk-management'>
              <a className='inline-flex items-center text-md font-medium text-gray-500 hover:text-blue-600 header-links'>
                Risk Management
              </a>
            </Link>
            <Link href='/employee-benefits'>
              <a className='inline-flex items-center text-md font-medium text-gray-500 hover:text-blue-600 header-links'>
                Employee Benefits
              </a>
            </Link>
            <Link href='/personal-insurance'>
              <a className='inline-flex items-center text-md font-medium text-gray-500 hover:text-blue-600 header-links'>
                Personal Insurance
              </a>
            </Link>
            <Link href='/meet-your-team'>
              <a className='inline-flex items-center text-md font-medium text-gray-500 hover:text-blue-600 header-links'>
                Meet Your Team
              </a>
            </Link>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-md font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}>
                    <span className='header-links'>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'>
                    <Popover.Panel className='absolute z-10 inset-x-0.5 xl:left-1/2 transform -translate-x-1/2 mt-3 px-2 w-max max-w-md sm:px-0'>
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden border-t-2 border-blue-600'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {moreContent.map((item) => (
                            <div key={item.name}>
                              <Link href={item.href}>
                                <a className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                                  <div className='ml-4'>
                                    <p className='text-base font-medium text-gray-900 hover:text-blue-600 header-links'>
                                      {item.name}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'>
        <Popover.Panel
          focus
          className='absolute top-0 inset-x-0 p-2 transition transform origin-top-rightmd:hidden'>
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='h-12 w-auto'
                    src='/images/guardify-logo.jpg'
                    alt='Guardify logo'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'></nav>
              </div>
            </div>
            <div className='py-6 px-5 space-y-6'>
              <div className='grid grid-cols-1 gap-y-6 gap-x-8'>
                <Link href='/'>
                  <a className='text-base font-medium text-gray-900 hover:text-gray-700'>
                    Home
                  </a>
                </Link>
                <Link href='/risk-management'>
                  <a className='text-base font-medium text-gray-900 hover:text-gray-700'>
                    Risk Management
                  </a>
                </Link>
                <Link href='/employee-benefits'>
                  <a className='text-base font-medium text-gray-900 hover:text-gray-700'>
                    Employee Benefits
                  </a>
                </Link>
                <Link href='/personal-insurance'>
                  <a className='text-base font-medium text-gray-900 hover:text-gray-700'>
                    Personal Insurance
                  </a>
                </Link>
                <Link href='/meet-your-team'>
                  <a className='text-base font-medium text-gray-900 hover:text-gray-700'>
                    Meet Your Team
                  </a>
                </Link>
              </div>
              <div>
                <Link href='/term-life-quotes-now'>
                  <a className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700'>
                    Term Life Quotes Now
                  </a>
                </Link>
                <Link href='/life-insurance'>
                  <a className='w-full flex items-center justify-center px-4 py-2 mt-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-300 hover:bg-blue-400'>
                    Life Insurance
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
