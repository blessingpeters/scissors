import React from 'react'

const StatsSection = () => {
  return (
    <section className="bg-[#F9FBFD] flex max-md:flex-col justify-between py-10 lg:px-24 md:px-10 max-md:px-3 gap-x-5">
    <h2 className="text-4xl font-semibold leading-snug lg:flex-[60%]">One Stop. <br /> Four <span className="text-blue-600">Possibilities.</span></h2>
    <div className="grid lg:grid-cols-4 grid-cols-2 ">
      <div className="flex flex-col flex-1 gap-y-2 p-4">
        <h3 className="text-3xl font-medium">3M</h3>
        <p>Active users</p>
      </div>
      <div className="flex flex-col flex-1 gap-y-2 p-4">
        <h3 className="text-3xl font-medium">60M</h3>
        <p>Links & QR codes created</p>
      </div>
      <div className="flex flex-col flex-1 gap-y-2 p-4">
        <h3 className="text-3xl font-medium">1B</h3>
        <p>Clicked & Scanned connections</p>
      </div>
      <div className="flex flex-col flex-1 gap-y-2 p-4">
        <h3 className="text-3xl font-medium">300K</h3>
        <p>App Integrations</p>
      </div>
    </div>

  </section>
  )
}

export default StatsSection
