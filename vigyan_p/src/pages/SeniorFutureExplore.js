import React from "react";
import { useNavigate } from "react-router-dom";

const SeniorFutureExplore = () => {
  const navigate = useNavigate();

  return (
<div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-200 to-green-200 py-10 px-6 flex flex-col items-center">
     

      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-10 border border-gray-200">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
          Future Innovators (Junior & Senior)
        </h1>

        {/* Structure */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3 border-b-2 border-blue-400 inline-block pb-1">
            Structure
          </h2>
          <p className="text-gray-700 mb-2">
            The competition will be held in two stages followed by the final
            presentations at Nation Innovators Battle (NIB).
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <b>Round 1:</b> Live Project Presentation by the Teams describing
              their problem statement, proposed solution, background, and
              potential impact at their School event.
            </li>
            <li>
              <b>Round 2:</b> Detailed Report & Working Prototype of project of
              the Shortlisted teams, highlighting design, functionality,
              scalability, and viability of their idea. Final Presentations at
              Nation Innovators Battle before a panel of judges.
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3 border-b-2 border-blue-400 inline-block pb-1">
            Timeline
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Registration Closes on <b>November 13th, 2025</b>
            </li>
            <li>
              Finale on <b>November 19th, 2025</b> at National Innovators Battle
              (NIB) Arena Hall.
            </li>
          </ul>
        </section>

        {/* General Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3 border-b-2 border-blue-400 inline-block pb-1">
            General Rules
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Every team has to register online on{" "}
              <a
                href="http://www.vigyanpathshala.com"
                className="text-blue-700 font-medium underline hover:text-blue-900"
              >
                www.vigyanpathshala.com
              </a>{" "}
              or through the school registration link.
            </li>
            <li>A Team ID will be allocated on registration.</li>
            <li>
              The decision of the organizers or judges shall be final and
              binding.
            </li>
            <li>NIB, Prayagraj will not be responsible for late entries.</li>
            <li>
              Updates will be shared on the website and via registered emails.
            </li>
            <li>All communication will be through NIB’s official email.</li>
          </ul>
        </section>

        {/* Competition Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3 border-b-2 border-blue-400 inline-block pb-1">
            Competition Rules
          </h2>
          <p className="text-gray-700 mb-3">
            Additional Rules for Nation Innovators Battle (NIB) 2025 National
            Championship — in addition to the General rules, the following apply
            for Future Innovators (Jr. & Sr.):
          </p>

          <h3 className="text-xl font-semibold mt-4 text-blue-600">A. Code of Conduct</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Respect all participants, visitors, organizers, and judges.</li>
            <li>No disruption of competition flow.</li>
            <li>No illegal assistance by coaches.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 text-blue-600">B. Devices</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>No mobiles, USB drives, or hotspots allowed.</li>
            <li>Two laptops per team permitted inside competition hall.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 text-blue-600">C. Bags</h3>
          <p className="text-gray-700">No bags in hall. Only water bottles allowed.</p>
        </section>

        <p className="text-gray-800 mt-8 text-center font-medium">
          <b>Thank you and wish you all the best for the National.</b>
          <br />
          Team NIB India <br />
          Sachin Kumar <br />
          📞 +91-7505419580 <br />
          ✉️ nationalinnovatorsbattle@gmail.com
        </p>

        {/* Bottom Back Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/competitions")}
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 shadow"
          >
            ⬅ Back to Competitions
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeniorFutureExplore;




