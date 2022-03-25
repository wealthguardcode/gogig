import Image from 'next/image'
import Link from 'next/link'
import ImageCarousel from '../components/ImageCarousel'
import Layout from '../components/Layout'

const stats = [
  {
    name: 'Risk Management',
    imgSrc:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    href: '/risk-management',
  },
  {
    name: 'Employee Benefits',
    imgSrc:
      'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    href: '/employee-benefits',
  },
  {
    name: 'Personal Insurance',
    imgSrc:
      'https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    href: '/personal-insurance',
  },
]

export default function HomePage() {
  return (
    <Layout>
      {/* Hero section */}

      <div className='relative bg-blue-800'>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            alt=''
          />
          <div
            className='absolute inset-0 bg-blue-700 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <div className='bg-sky-800 max-w-3xl p-6 py-24 rounded-xl mx-auto text-center'>
            <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
              Business Owners #1 Choice For Insurance
            </h1>
            <Link href='/contact'>
              <a className='mt-8  inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto'>
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* <ImageCarousel /> */}
      {/* About section */}
      <div className='bg-white'>
        <div className='max-w-5xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-extrabold text-sky-700 sm:text-4xl'>
            <span className='block uppercase'>About Us</span>
          </h2>
          <h2 className='mt-6 pt-6 text-2xl leading-6 text-sky-600'>
            Business Insurance Reinvented
          </h2>
          <p className='py-6 text-lg mx-3'>
            As a business owner, your should carefully choose the professionals
            that you work with on a daily basis. We specialize in protecting the
            assets you have worked tirelessly to build and provide holistic
            coverage to ensure you have the best coverage at the best possible
            price, backed by superior service.
          </p>
          <p className='py-6 text-lg mx-3'>
            Imagine having one insurance professional that has a team of experts
            to help manage your insurance program! We specialize in business
            insurance, employee benefits, risk management, and will review your
            personal lines insurance to ensure nothing is missed. All while
            working with a local agent that does business in your community.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 p-4'>
            <div className='mx-6'>
              <h3 className='text-xl text-sky-600 font-bold mb-3'>
                Assessing Need
              </h3>
              <p>
                Many financial experts will tell you some unforeseen events and
                a lack of the right kind of insurance can spell trouble quickly.
                Call us today, and we&apos;ll analyze your insurance needs and
                get you covered quickly at the right price.
              </p>
            </div>
            <div className='mx-6 mt-8 md:mt-0'>
              <h3 className='text-xl text-sky-600 font-bold mb-3'>
                Building Relationships
              </h3>
              <p>
                We still believe in establishing local relationships in the
                communities we live. Everyone has different insurance needs.
                Call us today for a personalized business or individual
                assessment and find out how we can help protect your hard-won
                assets.
              </p>
            </div>
          </div>

          <div className='py-12'>
            <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3'>
              {stats.map((item) => (
                <>
                  <Link href={item.href}>
                    <a>
                      <div
                        key={item.name}
                        className='px-4 py-5 bg-white shadow-xl rounded-lg overflow-hidden sm:p-6 relative hover:cursor-pointer'>
                        <img
                          src={item.imgSrc}
                          alt={item.name}
                          className='rounded-lg'
                        />
                        <p className='text-xl font-bold text-gray-500 mt-2'>
                          {item.name}
                        </p>
                      </div>
                    </a>
                  </Link>
                </>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  )
}
