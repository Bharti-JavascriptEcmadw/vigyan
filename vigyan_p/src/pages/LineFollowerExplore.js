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
      

        {/* Structure */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-300 pb-2 mb-3">
            Structure
          </h2>
          <p>
       The competition will be held in two stages followed by the final presentations at Nation Innovators Battle(NIB), 2025.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Round 1:</strong> Live Project Presentation by the Teams at their School event. 
            </li>
            <li>
              <strong>Round 2:</strong> Working Prototype of Line Follower Robot of the Shortlisted teams will proceed to Final, for competition at Nation Innovators Battle before a panel of judges, where the winners will be announced after the competition.
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-300 pb-2 mb-3">
            Timeline
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Registration Closes on November 13th, 2025 </li>
            <li>Finale:<strong>November 19th, 2025 </strong>   at National Innovators Battle(NIB) Arena Hall</li>
          
          </ul>
        </section>

        {/* General Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-300 pb-2 mb-3">
            General Rules
          </h2>
          <ul className="list-disc list-inside space-y-1">
            
            <li>Every team has to register online on the official <strong> <a href="/">www.vigyanpathshala.com </a></strong>website or registration link provided at your school for the competition</li>
            <li>A Team ID will be allocated to the team on registration, which shall be used for future references. </li>
            <li>The decision of the organizers or judges shall be treated as final and binding on all. </li>
            <li>
              No responsibility will be held by NIB, Prayagraj for any late, lost, or misdirected entries. 
            </li>
            <h3 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-300 pb-2 mb-3">
            Note          </h3>
            <li> Note that at any point in time the latest information will be that which is on the website; however, registered participants will be informed through mail about any changes.</li>
            <li> All modes of official communication will be through the Nation Innovators Battle’s (NIB) e-mail; participants are advised to keep track of all folders in their e-mail account.</li>
          </ul>
        </section>

        {/* Competition Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-300 pb-2 mb-3">
           Competition Rules
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Team  has to use Wireless completely an Autonomous bots</li>
            <li>
             The team with minimum time taken out of 2 runs after adding penalty time(On Every touch 5 sec will be added to their final timing for ex. If a team has taken 2min in completing the entire race with 3 touches therefore team total timing will be 135seconds or 2min. 15 sec) in the match would be declared as winner of that match.
            </li>
            <li>
             Compensation time will be given on the discretion of referee.
            </li>
            <li>The break time would be 1-2 minutes.</li>
            <li>Timeouts will be on the discretion of the referee.</li>
            <li>Dead bots are not allowed.</li>
            <li>All bots will be checked at the start of every round that they are moving. In case of any discrepancy, referee will decide that the bot is moving or not.</li>

            <li>Claiming is allowed but none should stop his game till referee stops the game.</li>
          </ul>
        </section>




        {/* Warnings */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-red-600 mb-2">Warnings</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Bot must not moves before the whistle and after the 3, 2, 1 count begins.</li>
            <li>Touching (any kind of interruption) the bot without asking referee.</li>
            <li>In case of any discrepancy referee’s decisions would be final.</li>
          </ul>
        </section>




        {/* Penalties */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-red-600 mb-2">Penalty</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Second warning is a penalty(+10 sec).</li>
            <li>Intentionally Arena damaging will lead to disqualification of team.</li>
            <li>Note: In case of any disputes, the decision of the organizers would be final and binding to all.
</li>
          </ul>
        </section>




        {/* Arena */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-300 pb-2 mb-3">
            Arena
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>The arena with would be 6ft to 4ft approx.</li>
            <li>Arena will have some hurdle(like sharp turns etc).</li>
          </ul>
        </section>



        

        {/* Bot Specification */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-300 pb-2 mb-3">
Bot Specification           </h2>

          <h3 className="text-lg font-semibold mt-2">Dimensions and Weight</h3>
          <ul className=" list-inside space-y-1">
            <li>
            1.	The robot should not be more than 250mm*250mm*300mm (length*breadth*height) in size at any time during game play.
            </li>
            <li>2.	Bot can be of at-most 3.5 Kg’s</li>
            <li>3.	Teams have to show and declare ALL of their bots before their first match itself. </li>
          </ul>

          <h3 className="text-lg font-semibold mt-3"> Mobility</h3>
          <ul className="list-inside space-y-1">
            <li>1.	All robots must have easily visible and controlled mobility in order to compete.</li>
            <li>2.	Flying is not allowed. </li>
          </ul>

          <h3 className="text-lg font-semibold mt-3">Batteries and Power</h3>
          <ul className="list-inside space-y-1">
            <li>1.	Each team must have batteries to power their bots (Note- backup battery will be provided by NIB at arena to the teams in case of emergency).</li>
            <li>2.	The battery will be taken into consideration for the measurement to be made for the machine dimension and the weight.</li>
            <li>3.	The only permitted batteries are ones that cannot spill or spray any of their contents when damaged or inverted.</li>
            <li>4.	The maximum allowed battery voltage is 12 volts. No external power supply will be provided</li>
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
