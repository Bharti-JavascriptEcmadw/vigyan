import React from "react";
import { useNavigate } from "react-router-dom";

const RaceOBotExplore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-300 to-purple-300 py-10 px-6 flex justify-center">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl p-10">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
          Race-O-Bot
        </h1>

        {/* Structure */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Structure</h2>
          <p className="text-gray-700 mb-2">
            The competition will be held in two stages followed by the final
            presentations at Nation Innovators Battle (NIB), 2025.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <b>Round 1:</b> Live Project Presentation by the Teams at their School event.
            </li>
            <li>
              <b>Round 2:</b> Working Prototype of Race-O-Bot of the Shortlisted
              teams will proceed to Final, for competition at Nation Innovators
              Battle before a panel of judges, where winners will be announced.
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Timeline</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Registration Closes on <b>November 13th, 2025</b></li>
            <li>Finale on <b>November 19th, 2025</b> at National Innovators Battle (NIB) Arena Hall.</li>
          </ul>
        </section>

        {/* General Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">General Rules</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Register online at{" "}
              <a href="http://www.vigyanpathshala.com" className="text-blue-600 underline">
                www.vigyanpathshala.com
              </a>{" "}
              or through your school.
            </li>
            <li>Team ID will be allocated on registration for future reference.</li>
            <li>Organizers/judges decisions are final and binding.</li>
            <li>NIB, Prayagraj is not responsible for late/lost/misdirected entries.</li>
            <li>Latest info is on the website; participants notified via email.</li>
            <li>All official communication is via NIB email.</li>
          </ul>
        </section>

        {/* Competition Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Competition Rules</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Team can make Wireless or Mobile-controlled bots.</li>
            <li>Disqualification if wireless frequency cannot be changed when requested.</li>
            <li>
              Winner = minimum time from 2 runs after adding penalties.{" "}
              <i>(Example: 2 min run + 3 touches = 2 min 15 sec)</i>
            </li>
            <li>Compensation/timeouts at referee’s discretion.</li>
            <li>Break time: 1–2 minutes.</li>
            <li>Dead bots are not allowed.</li>
            <li>Bots checked at the start of each round for movement.</li>
            <li>Claiming allowed but game continues until referee stops it.</li>
          </ul>
        </section>

        {/* Warnings & Penalty */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Warnings & Penalty</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Bot must not move before the whistle (3-2-1 countdown).</li>
            <li>No touching/interfering with the bot without referee’s permission.</li>
            <li>Referee’s decision is final.</li>
            <li>Second warning = +10 sec penalty.</li>
            <li>Arena damage = disqualification.</li>
          </ul>
        </section>

        {/* Arena */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Arena</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Arena width: 1–1.5 ft approx.</li>
            <li>Arena length disclosed during event.</li>
            <li>Hurdles: inclinations, curves, etc.</li>
          </ul>
        </section>

        {/* Bot Specification */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Bot Specification</h2>
          <h3 className="text-xl font-semibold mt-3">Dimensions & Weight</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Max size: 250mm × 250mm × 300mm (L×B×H).</li>
            <li>Max weight: 5 Kg.</li>
            <li>Teams must declare all bots before the first match.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-3">Mobility</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Bots must have visible and controlled mobility.</li>
            <li>Flying is not allowed.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-3">Batteries & Power</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Bots must be powered by onboard batteries.</li>
            <li>Backup battery provided by NIB in emergencies.</li>
            <li>Only spill-proof batteries allowed.</li>
            <li>Max voltage: 12V.</li>
            <li>No external power supply.</li>
          </ul>
        </section>

        {/* Back Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/competitions")}
            className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-700 transition duration-300"
          >
            ⬅ Back to Competitions
          </button>
        </div>
      </div>
    </div>
  );
};

export default RaceOBotExplore;
