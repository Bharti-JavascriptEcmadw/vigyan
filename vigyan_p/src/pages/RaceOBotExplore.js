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
           The competition will be held in two stages followed by the final presentations at Nation Innovators Battle(NIB), 2025.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <b>Round 1:</b> Live Project Presentation by the Teams at their School event. 
            </li>
            <li>
              <b>Round 2:</b> Working Prototype of Race-O-Bot of the Shortlisted teams will proceed to Final, for competition at Nation Innovators Battle before a panel of judges, where the winners will be announced after the competition.
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Timeline</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Registration Closes on November 13th, 2025 </li>
            <li>Finale  <b>November 19th, 2025</b>at National Innovators Battle(NIB) Arena Hall.
</li>
          </ul>
        </section>

        {/* General Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">General Rules</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">           <li>Every team has to register online on the official    <a href="http://www.vigyanpathshala.com" className="text-blue-600 underline">
                www.vigyanpathshala.com
              </a>{" "} or registration link provided at your school for the competition. 
            </li>
            <li>
A Team ID will be allocated to the team on registration, which shall be used for future references.  
</li>
<li>The decision of the organizers or judges shall be treated as final and binding on all. </li>
<li>No responsibility will be held by NIB, Prayagraj for any late, lost, or misdirected entries. </li>
<h2 className="text-2xl font-semibold text-gray-800 mb-2">Note</h2>

<li>Note that at any point in time the latest information will be that which is on the website; however, registered participants will be informed through mail about any changes.
</li>
<li>
    All modes of official communication will be through the Nation Innovators Battle’s (NIB) e-mail; participants are advised to keep track of all folders in their e-mail account.
</li>
           
          </ul>
        </section>

        {/* Competition Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Competition Rules</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Team can make Wireless or Mobile controlled for playing Race-O-Bot with their bots</li>
            <li>In wireless case-Any team will be disqualified if they are unable to change their wireless module’s frequency ( if asked to do so )..</li>
            <li>
            The team with minimum time taken out of 2 runs after adding penalty time(On Every touch 5 sec will be added to their final timing for ex. If a team has taken 2min in completing the entire race with 3 touches therefore team total timing will be 135seconds or 2min. 15 sec) in the match would be declared as winner of that match.
            </li>
            <li>Compensation time will be given on the discretion of referee.</li>
            <li>The break time would be 1-2 minutes.</li>
            <li>Timeouts will be on the discretion of the referee.</li>
            <li>Dead bots are not allowed.</li>
            <li>All bots will be checked at the start of every round that they are moving. In case of any discrepancy, referee will decide that the bot is moving or not.</li>
            <li>Claiming is allowed but none should stop his game till referee stops the game.</li>
          </ul>
        </section>



        {/* Warnings & Penalty */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Warnings</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Bot must not moves before the whistle and after the 3, 2, 1 count begins.</li>
            <li>Touching (any kind of interruption) the bot without asking referee.</li>
            <li>In case of any discrepancy referee’s decisions would be final.</li>
           
          </ul>
        </section>

            <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">   Penalty</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Second warning is a penalty(+10 sec).</li>
            <li>Intentionally Arena damaging will lead to disqualification of team.</li>
            <li>Note: In case of any disputes, the decision of the organizers would be final and binding to all.</li>
           
          </ul>
        </section>



        <section className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Arena</h2>
  <ul className="list-decimal list-inside text-gray-700 space-y-1">
    <li>The arena with would be 1ft to 1.5ft approx.</li>
    <li>The arena length will be disclosed at the time of event.</li>
    <li>	Arena will have some hurdle(like inclination, curves etc).</li>
 </ul>
</section>








<section className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Bot Specification 
</h2>

  <div className="mb-4">
    <h3 className="text-lg font-medium mb-2">Dimensions and Weight</h3>
    <ul className="list-decimal list-inside text-gray-700 space-y-1">
      <li>The robot should not be more than 250mm*250mm*300mm (length*breadth*height) in size at any time during game play.</li>
      <li>Bot can be of at-most 5 Kg’s.</li>
      <li>Teams have to show and declare ALL of their bots before their first match itself. </li>
    </ul>
  </div>

  <div className="mb-4">
    <h3 className="text-lg font-medium mb-2">Mobility</h3>
    <ul className="list-decimal list-inside text-gray-700 space-y-1">
      <li>All robots must have easily visible and controlled mobility in order to compete.</li>
      <li>Flying is not allowed. </li>
    </ul>
  </div>
   


  <div>
    <h3 className="text-lg font-medium mb-2">   Batteries and Power</h3>
    <ul className="list-decimal list-inside text-gray-700 space-y-1">
      <li>Each team must have batteries to power their bots (Note- backup battery will be provided by NIB at arena to the teams in case of emergency).</li>
      <li>The battery will be taken into consideration for the measurement to be made for the machine dimension and the weight.</li>
      <li>The only permitted batteries are ones that cannot spill or spray any of their contents when damaged or inverted.</li>
      <li>The maximum allowed battery voltage is 12 volts. No external power supply will be provided</li>
    </ul>
  </div>
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
