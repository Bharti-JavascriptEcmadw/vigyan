const tools = [
    "Arduino",
    "Raspberry Pi",
    "Fusion 360",
    "Python",
    "TinkerCAD",
  ];
  
  const OurJourney = () => (
    <section className="py-12 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">"Tools and Technologies We Provide"</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {tools.map((tool, idx) => (
          <span
            key={idx}
            className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-medium shadow"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
  export default OurJourney;
  