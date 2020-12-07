import './App.css';
import React from 'react';

function App() {
  return (
    <div class="flex text-gray-800 min-h-screen overflow-x-hidden">
      <aside
        class="hidden z-40 top-0 bottom-0 md:top-auto md:bottom-auto md:flex flex-col w-72 bg-side shadow-sm"
      >
        <a href="#" class="flex items-center mx-auto my-12">
          <div class="h-8 w-8 bg-purple-600 mr-3 rounded-full"></div>
          <span class="text-1xl font-semibold">Idowu Consult</span>
        </a>
        <nav class="font-semibold text-white-600 my-12">
          <ul class="space-y-3">
            <li>
              <a href="#" class="flex items-center px-8 py-3 bg-gradient-to-r from-purple-200 text-purple-600 inset-active-link">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-5 w-5 mr-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
            Overview
          </a>
            </li>
            <li>
              <a href="https://script.google.com/macros/s/AKfycbwDC8-szZh8bOp3McFwjrAX9uDPbZptu38j3r9u/exec" class="flex items-center px-8 py-3 bg-gradient-to-r hover:from-purple-200 hover:text-purple-600">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-5 w-5 mr-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
            Employees
          </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center px-8 py-3 bg-gradient-to-r hover:from-purple-200 hover:text-purple-600 "
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-5 w-5 mr-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
            Performance
          </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-8 py-3 bg-gradient-to-r hover:from-purple-200 hover:text-purple-600">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-5 w-5 mr-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
            Managers
          </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-8 py-3 bg-gradient-to-r hover:from-purple-200 hover:text-purple-600">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-5 w-5 mr-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
            Payroll
          </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-8 py-3 bg-gradient-to-r hover:from-purple-200 hover:text-purple-600">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-5 w-5 mr-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
            Complaints
          </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-8 py-3 bg-gradient-to-r hover:from-purple-200 hover:text-purple-600">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-5 w-5 mr-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
            Settings
          </a>
            </li>
          </ul>
        </nav>
      </aside>
      <div class="flex-grow bg-gray-100">
        <header class="mt-12 px-16">
          <div class="flex items-center mb-2">
            <h1 class="text-3xl font-semibold mr-4">Overview</h1>
            <div class="ml-auto flex items-center space-x-3">
              <button
                class="p-2 text-gray-600 relative bg-white rounded-full shadow hover:bg-gray-100 hover:text-gray-700"
              >
                <span
                  class="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full mt-1 mr-2"
                ></span>
                <span
                  class="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full mt-1 mr-2 animate-ping"
                ></span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button
                class="h-10 w-10 bg-gray-200 border shadow rounded-full overflow-hidden"
              >
                <img
                  // src={require('./assets/ibrahim_header.png')}
                  src="https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg"
                  class="h-full w-full object-cover"
                />
              </button>
            </div>
          </div>
          <div className="flex justify-evenly">
            <section class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
              <div class="relative p-5 bg-gradient-to-r from-teal-400 to-green-500 rounded-md overflow-hidden">
                <a href="https://script.google.com/macros/s/AKfycbwDC8-szZh8bOp3McFwjrAX9uDPbZptu38j3r9u/exec">
                  <div class="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">Employees</div>
                  <div class="relative z-10 text-green-200 leading-none font-semibold">3000</div>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-green-600 opacity-50">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
              </div>
              <div class="relative p-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-md overflow-hidden">
                <div class="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">Tasks</div>
                <div class="relative z-10 text-blue-200 leading-none font-semibold">32</div>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-blue-700 opacity-50">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div class="relative p-5 bg-gradient-to-r from-red-400 to-red-600 rounded-md overflow-hidden">
                <div class="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">Reports</div>
                <div class="relative z-10 text-red-200 leading-none font-semibold">12</div>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-red-700 opacity-50">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="relative p-5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md overflow-hidden">
                <div class=" mb-4 text-white text-4xl leading-none font-semibold">Events</div>
                <div class="text-yellow-200 leading-none font-semibold">15</div>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-yellow-700 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </svg>
              </div>
            </section>
          </div>
          <section class="content-section">
            <div class="section-header-wrapper">
              <h1 class="section-header">Recent Activities</h1>
            </div>
            <div class="files-table">
              <div class="files-table-header">
                <div class="column-header table-cell">Info</div>
                <div class="column-header table-cell size-cell">Id</div>
              </div>
              <div class="files-table-row">
                <div class="table-cell name-cell pdf">Ibrahim applied for a leave</div>
                <div class="table-cell">4238</div>

              </div>
              <div class="files-table-row">
                <div class="table-cell name-cell jpg">Alex submitted a report</div>
                <div class="table-cell size-cell">1500</div>
              </div>
            </div>
          </section>
          </header>
      </div>
    </div>
  );
}

export default App;
