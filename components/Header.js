import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const riskManagement = [
  {
    name: 'Risk Management Overview',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/risk-managemnet',
    icon: ChartBarIcon,
  },
  {
    name: 'Business Risk',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/business-risk',
    icon: CursorClickIcon,
  },
  {
    name: 'Safety & Loss Control',
    description: "Your customers' data will be safe and secure.",
    href: '/safety-loss-control',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Claims Management',
    description: "Connect with third-party tools that you're already using.",
    href: '/claims-management',
    icon: ViewGridIcon,
  },
]

const insurance = [
  {
    name: 'Insurance Overview',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '/business-insurance',
    icon: SupportIcon,
  },
  {
    name: 'Property & Casualty',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '/property-casualty',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Surety Bonds',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '/surety-bonds',
    icon: CalendarIcon,
  },
  {
    name: 'Community Association Programs',
    description: 'Understand how we take your privacy seriously.',
    href: '/community-associations-programs',
    icon: ShieldCheckIcon,
  },
]
const about = [
  {
    name: 'About Guardify',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '/about',
    icon: SupportIcon,
  },
  {
    name: 'Culture & Community',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '/culture-community',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Risk Advisors',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '/risk-advisors',
    icon: CalendarIcon,
  },
  {
    name: 'Associations',
    description: 'Understand how we take your privacy seriously.',
    href: '/associations',
    icon: ShieldCheckIcon,
  },
]
const resources = [
  {
    name: 'Tools & Resources',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '/resources',
    icon: SupportIcon,
  },
  {
    name: 'Risk Management Center',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '/risk-management-center',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Forms',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '/forms',
    icon: CalendarIcon,
  },
  {
    name: 'Client News & Alerts',
    description: 'Understand how we take your privacy seriously.',
    href: '/client-news-alerts',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Events & Webinars',
    description: 'Understand how we take your privacy seriously.',
    href: '/insurance-webinars-events',
    icon: ShieldCheckIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover className='relative bg-white'>
      <div className='max-w-7xl mx-auto px-4 py-2 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start md:w-0 md:flex-1'>
            <Link href='/'>
              <a>
                <span className='sr-only'>Guardify</span>
                <img
                  className='h-8 w-auto sm:h-12'
                  src='/images/guardify-logo.webp'
                  alt='Guardify Logo'
                />
              </a>
            </Link>
          </div>
          <div className='-mr-2 -my-2 lg:hidden'>
            <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Popover.Group as='nav' className='hidden lg:flex space-x-10'>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}>
                    <span>Risk Management</span>
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
                    <Popover.Panel className='absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden border-t-2 border-blue-600'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {riskManagement.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a
                                href={item.href}
                                className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                                <div className='ml-4'>
                                  <p className='text-base font-medium text-gray-900 hover:text-blue-600'>
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}>
                    <span>Insurance</span>
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
                    <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0'>
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {insurance.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                              <item.icon
                                className='flex-shrink-0 h-6 w-6 text-indigo-600'
                                aria-hidden='true'
                              />
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>
                                  {item.name}
                                </p>
                                <p className='mt-1 text-sm text-gray-500'>
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href='#'
              className='inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900'>
              Benefits
            </a>

            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}>
                    <span>About</span>
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
                    <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0'>
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {about.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                              <item.icon
                                className='flex-shrink-0 h-6 w-6 text-indigo-600'
                                aria-hidden='true'
                              />
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>
                                  {item.name}
                                </p>
                                <p className='mt-1 text-sm text-gray-500'>
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}>
                    <span>Resources</span>
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
                    <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0'>
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                              <item.icon
                                className='flex-shrink-0 h-6 w-6 text-indigo-600'
                                aria-hidden='true'
                              />
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>
                                  {item.name}
                                </p>
                                <p className='mt-1 text-sm text-gray-500'>
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href='#'
              className='inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900'>
              Careers
            </a>
            <a
              href='#'
              className='inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900'>
              Contact
            </a>
          </Popover.Group>
          {/* <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <a
              href='#'
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
              Sign in
            </a>
            <a
              href='#'
              className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
              Sign up
            </a>
          </div> */}
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
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
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
                <nav className='grid gap-y-8'>
                  {riskManagement.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
                      <item.icon
                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                        aria-hidden='true'
                      />
                      <span className='ml-3 text-base font-medium text-gray-900'>
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className='py-6 px-5 space-y-6'>
              <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'>
                  Pricing
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'>
                  Docs
                </a>
                {insurance.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='text-base font-medium text-gray-900 hover:text-gray-700'>
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                  Sign up
                </a>
                <p className='mt-6 text-center text-base font-medium text-gray-500'>
                  Existing customer?{' '}
                  <a href='#' className='text-indigo-600 hover:text-indigo-500'>
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
