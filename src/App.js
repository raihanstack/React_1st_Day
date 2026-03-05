import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">

        <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow -z-20"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-delay -z-20"></div>
        <div className="absolute inset-0 -z-30 bg-grid-pattern opacity-10"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">

          <div className="lg:w-1/2 text-center lg:text-left">

            <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 opacity-0 animate-slide-up-initial">
              <span className="w-3 h-3 rounded-full bg-teal-500 animate-pulse"></span>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-300 m-0">
                Hello, I'm <span className="text-white font-bold text-2xl">Mostafa Raihan</span>
              </h3>
            </div>

            <h2
              className="text-[22px] md:text-[24px] lg:text-[28px] text-white tracking-tight mb-6 opacity-0 animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              Crafting Professional Web Applications with{" "}
              <span className="text-white glow-text">Django</span> and Modern Tools
            </h2>

            <p
              className="mt-4 max-w-2xl lg:max-w-full text-sm sm:text-base text-gray-300 opacity-0 animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              I specialize in building backend systems that are{" "}
              <span className="text-white glow-text font-semibold">secure</span>,{" "}
              <span className="text-white glow-text font-semibold">scalable</span>, and{" "}
              <span className="text-white glow-text font-semibold">maintainable</span>.
              My approach emphasizes{" "}
              <span className="text-white glow-text font-semibold">performance</span>,{" "}
              <span className="text-white glow-text font-semibold">stability</span>, and{" "}
              <span className="text-white glow-text font-semibold">clean architecture</span>{" "}
              to deliver robust solutions that provide reliable and seamless experiences
              for users.
            </p>

          </div>

          <div
            className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end opacity-0 animate-scale-up"
            style={{ animationDelay: "1.8s" }}
          >
            <div className="relative w-full max-w-lg p-4 rounded-2xl shadow-2xl backdrop-blur-md bg-white/20 border border-white/10 group hover:shadow-xl transition-shadow duration-500">
              <img
                src="https://raw.githubusercontent.com/raihanstack/Raihan_Portfolio/refs/heads/master/static/images/profile.png"
                alt="Mostafa Raihan - Django Developer"
                loading="lazy"
                className="w-full h-auto rounded-xl transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
