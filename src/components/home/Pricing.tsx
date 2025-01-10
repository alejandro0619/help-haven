const Princing = () => {
  return (

    <section className="h-screen w-full snap-start flex justify-center items-center bg-gradient-to-b from-[#e2eefa] to-[hsl(0,0%,100%)] rounded-lg relative">
      <div className="h-full w-full flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-medium to-dark sm:text-xl md:text-7xl">
          Pricing
        </h1>
        <p className="text-xl sm:text-2xl md:text-xl font-bold text-center leading-relaxed bg-clip-text text-dark">
          Free while in beta, with plans designed to scale with your needs.
        </p>
      </div>
    </section>
  )
}

export default Princing;
