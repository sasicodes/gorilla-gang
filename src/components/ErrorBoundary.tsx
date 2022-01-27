import Router from 'next/router'
import React from 'react'

class ErrorBoundary extends React.Component {
  state = {
    errorMessage: ''
  }

  static getDerivedStateFromError(error: any) {
    return { errorMessage: error.toString() }
  }

  componentDidCatch(error: any, info: any) {
    this.logErrorToServices(error.toString(), info.componentStack)
  }

  logErrorToServices = console.log

  render() {
    if (this.state.errorMessage) {
      return (
        <div className="flex flex-col items-center justify-start h-full mt-10 md:mt-20">
          <img
            src="/vercel.svg"
            alt="logo"
            draggable={false}
            height={100}
            width={100}
          />
          <div className="py-10 text-center">
            <h1 className="mb-4 text-3xl font-bold">
              Looks like something went wrong 🤔
            </h1>
            <div className="max-w-lg mb-6">
              <p>{this.state.errorMessage}</p>
            </div>
            <button
              className="hover:bg-gray-700 flex items-center justify-center px-4 py-3 overflow-hidden border-2 border-transparent border-gray-700 rounded-lg focus:outline-none"
              onClick={() => Router.reload()}
            >
              Refresh
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
