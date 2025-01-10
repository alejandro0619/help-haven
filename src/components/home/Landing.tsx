const Landing = () => {
  return (
    <section className="h-screen w-full snap-start flex justify-center items-center bg-gradient-to-b from-[#e2eefa] to-[hsl(0,0%,100%)] rounded-lg relative">
      <div className="h-full w-full flex flex-col justify-center items-center gap-5 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-medium to-dark">
          <span className="block sm:inline">Your Helpdesk.</span>
          <span className="block sm:inline sm:ml-2">Reimagined</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-dark leading-relaxed">
          Empower your support team with an unmatched solution.
        </p>
        <button className="bg-dark text-light px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-dark/50 transition-colors duration-300 font-bold">
          Get Started
        </button>
      </div>
    </section>

  )
}

export default Landing;