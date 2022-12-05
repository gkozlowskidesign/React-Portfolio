import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkIcon,
  CubeTransparentIcon,
  XMarkIcon,

} from '@heroicons/react/24/outline'
import { Squares2X2Icon} from '@heroicons/react/20/solid'

const solutions = [
  {
    name: 'Dashboard',
    href: '/',
    icon: CubeTransparentIcon,
  },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
   <Popover className="relative bg-gradient-to-r from-gray-900  to-indigo-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-black py-6 md:justify-start md:space-x-10">
        <img src="https://github.com/gkozlowskidesign/React-Portfolio/blob/main/src/assets/gk-1.png?raw=true" alt="My Profile"
            className="rounded-3xl ml-4 mt-2 mx-auto w-2/12" 
            />
          <div className="flex justify-start lg:w-0 lg:flex-1">
         
             
            
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-indigo-900 p-2 text-white hover:bg-indigo-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Squares2X2Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-100',
                      'group inline-flex mr-2 items-center rounded-md bg-indigo-900 text-base font-medium hover:text-gray-100 focus:outline-none focus:ring-10 focus:ring-indigo-500 focus:ring-offset-10'
                    )}
                  >
                    <Squares2X2Icon
                      className={classNames(
                        open ? 'text-white' : 'text-white',
                        'h-10 w-10 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-5 w-screen max-w-xs transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-gradient-to-b from-indigo-900 to-indigo-700 px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                      
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-5 hover:bg-gray-200"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-200" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">{item.name}</p>
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

         

            
          </Popover.Group>
          
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-xl bg-gradient-to-b from-indigo-900 to-indigo-700 shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-indigo-900 p-2 text-white hover:bg-indigo-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-200" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-white">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
        
           
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
