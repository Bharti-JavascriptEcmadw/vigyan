import React from "react";
import { useNavigate } from "react-router-dom";

const RoboRugbyExplore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 py-10 px-4 flex justify-center">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
            Robo Rugby Championship
          </h1>
          <p className="mt-2 text-gray-700 text-sm text-center">
            Info for teams participating in Robo Rugby at Nation Innovators Battle (NIB), 2025.
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {/* Structure */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Structure</h2>
            <p className="text-gray-700 mb-2">
              The competition will be held in two stages followed by the final presentations at Nation Innovators Battle (NIB), 2025.
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              <li><strong>Round 1</strong> – Live Project Presentation by the Teams at their School event.</li>
              <li><strong>Round 2</strong> – Working Prototype of RoboRugby bot of shortlisted teams will proceed to Final at NIB before judges.</li>
              <li>Winners will be announced after the competition at the Final.</li>
            </ol>
          </section>

          {/* Timeline */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Timeline</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Registration Closes on <strong>November 13th, 2025</strong>.</li>
              <li>Finale on <strong>November 19th, 2025</strong> at NIB Arena Hall.</li>
            </ul>
          </section>

          {/* General Rules */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">General Rules</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Register online at <strong>www.vigyanpathshala.com</strong> or via school link.</li>
              <li>A Team ID will be allocated for future reference.</li>
              <li>Organizers/judges decisions are final.</li>
              <li>NIB, Prayagraj not responsible for late/lost entries.</li>
              <li>Official updates available on website; email notifications for registered participants.</li>
            </ul>
          </section>

          {/* Competition Rules */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Competition Rules</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Teams may build wired or wireless bots, with or without weapons.</li>
              <li>Wireless teams must be able to change frequency when requested.</li>
              <li>Scoring: hits/damage/touch (20 pts), toppling out (50 pts), goal (100 pts). Max points wins.</li>
              <li>Compensation, break time, timeouts at referee discretion.</li>
              <li>Dead bots are not allowed; opponent declared winner if bot is dead.</li>
            </ul>
          </section>

          {/* Arena & Bot Specification */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Arena & Bot Specs</h2>
            <p className="text-gray-700 mb-2">Arena: approx. 8ft × 8ft with hurdles.</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Max bot size: 550mm × 550mm × 650mm.</li>
              <li>Max weight: 20kg. Declare all bots before first match.</li>
              <li>Weapons: magnetic, cutters, flippers, saws, lifting devices, spinning hammers allowed.</li>
              <li>Restricted: explosives, inflammable liquids, high power magnets, radio jammers, tesla coils, tethered projectiles.</li>
              <li>Mobility: must be visible and controlled. Flying bots not allowed.</li>
              <li>Batteries: onboard only, max voltage 18V. Backup wire/battery allowed by organizers.</li>
            </ul>
          </section>
        </div>

        {/* Back Button */}
        <div className="p-6 border-t flex justify-center bg-gray-50">
          <button
            onClick={() => navigate("/competitions")}
            className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-purple-700 transition duration-300"
          >
            ⬅ Back to Competitions
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoboRugbyExplore;
