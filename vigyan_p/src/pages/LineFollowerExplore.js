import React from "react";
import { useNavigate } from "react-router-dom";

const LineFollowerExplore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-purple-600 to-indigo-700 p-8 text-gray-900">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-700">
          Line Follower Robot/Path finder 
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          The Line Follower Robot competition tests precision and accuracy.
          Program your bot to detect and follow a path as quickly as possible. 🛤️
        </p>

        {/* Structure */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-300 pb-2 mb-3">
            Structure
          </h2>
          <p>
            The competition will be held in two stages followed by the final
            presentations at Nation Innovators Battle (NIB), 2025.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Round 1:</strong> Live Project Presentation by the Teams at
              their School event.
            </li>
            <li>
              <strong>Round 2:</strong> Working Prototype of Line Follower Robot
              of the Shortlisted teams will proceed to Final, for competition at
              NIB before a panel of judges, where the winners will be announced.
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-300 pb-2 mb-3">
            Timeline
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>📌 Registration Closes: <strong>November 13th, 2025</strong></li>
            <li>🏆 Finale: <strong>November 19th, 2025</strong> at NIB Arena Hall</li>
          </ul>
        </section>

        {/* General Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-300 pb-2 mb-3">
            General Rules
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Teams must register online on{" "}
              <a
                href="https://www.vigyanpathshala.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                www.vigyanpathshala.com
              </a>{" "}
              or via the school registration link.
            </li>
            <li>A Team ID will be allocated on registration for all references.</li>
            <li>Judges’ decision shall be final and binding on all teams.</li>
            <li>No responsibility for late or lost entries by NIB, Prayagraj.</li>
            <li>
              Official updates will be on the website & via registered email.
            </li>
          </ul>
        </section>

        {/* Competition Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-300 pb-2 mb-3">
            Competition Rules
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Teams must use fully wireless and autonomous bots.</li>
            <li>
              Winner = Minimum time (out of 2 runs) + penalty (5 sec per touch).
            </li>
            <li>
              Example: 2 mins + 3 touches → 135 seconds (2 min 15 sec).
            </li>
            <li>Compensation time and timeouts at referee’s discretion.</li>
            <li>Break time: 1–2 minutes between matches.</li>
            <li>Dead bots are not allowed.</li>
            <li>All bots checked before each round.</li>
          </ul>
        </section>

        {/* Warnings */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-red-600 mb-2">⚠ Warnings</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Bots must not move before the whistle & countdown.</li>
            <li>Touching bot without referee’s permission is forbidden.</li>
            <li>Referee’s decision is final in disputes.</li>
          </ul>
        </section>

        {/* Penalties */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-red-600 mb-2">🚨 Penalties</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Second warning = +10 seconds penalty.</li>
            <li>Damaging the arena = Disqualification.</li>
          </ul>
        </section>

        {/* Arena */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-300 pb-2 mb-3">
            Arena
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Approximate size: 6ft × 4ft.</li>
            <li>Contains hurdles like sharp turns.</li>
          </ul>
        </section>

        {/* Bot Specification */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-300 pb-2 mb-3">
            Bot Specification
          </h2>

          <h3 className="text-lg font-semibold mt-2">Dimensions & Weight</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Max size: 250mm × 250mm × 300mm (L × B × H) at all times.
            </li>
            <li>Max weight: 3.5kg.</li>
            <li>All bots must be declared before their first match.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-3">Mobility</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Bots must have visible & controlled mobility.</li>
            <li>No flying bots allowed.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-3">Batteries & Power</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Teams must carry their own batteries.</li>
            <li>Backup may be provided by NIB in emergencies.</li>
            <li>Batteries included in weight & size checks.</li>
            <li>Only spill-proof batteries allowed.</li>
            <li>Max voltage = 12V. No external supply provided.</li>
          </ul>
        </section>

        {/* Back Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/competitions")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            ⬅ Back to Competitions
          </button>
        </div>
      </div>
    </div>
  );
};

export default LineFollowerExplore;
