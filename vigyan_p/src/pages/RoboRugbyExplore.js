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
       
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {/* Structure */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Structure</h2>
            <p className="text-gray-700 mb-2">
The competition will be held in two stages followed by the final presentations at Nation Innovators Battle(NIB), 2025.
 Round 1 – Live Project Presentation by the Teams at their School event. 
Round 2 –Working Prototype of RoboRugby bot of the Shortlisted teams will proceed to Final, for competition at Nation Innovators Battle before a panel of judges, where the winners will be announced after the competition.
            </p>
          
          </section>

          {/* Timeline */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Timeline</h2>
                       <p className="text-gray-700 mb-2">
                        Registration Closes on November 13th, 2025 
Finale November 19th, 2025 at National Innovators Battle(NIB) Arena Hall.

</p>
          </section>

          {/* General Rules */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">General Rules</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Every team has to register online on the official <strong>www.vigyanpathshala.com 
                </strong>website or registration link provided at your school for the competition. </li>
              <li>A Team ID will be allocated to the team on registration, which shall be used for future references. 
The decision of the organizers or judges shall be treated as final and binding on all. 
No responsibility will be held by NIB, Prayagraj for any late, lost, or misdirected entries. 
</li>
<li>
    Note that at any point in time the latest information will be that which is on the website; however, registered participants will be informed through mail about any changes.
 All modes of official communication will be through the Nation Innovators Battle’s (NIB) e-mail; participants are advised to keep track of all folders in their e-mail account.

</li>
             
            </ul>
          </section>

          {/* Competition Rules */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Competition Rules</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>•	Team can make Wired and Wireless bot with or without weapon for playing Rugby with their bots</li>
               <li> <li>•	Team can make Wired and Wireless bot with or without weapon for playing Rugby with their bots</li></li>

               <li>•	The team which scores maximum points, hits/damage/touch (20 points), toppling out of arena(50 points) and goal(100 points), in the match would be declared as winner of that match.</li>
               <li>•	Robo war is also allowed simultaneously (i.e. any bot can fight with any other using any means).</li>
               <li>•	Compensation time will be given on the discretion of referee.</li>
               <li>•	The break time would be 1-2 minutes.</li>
               <li>•	In case of wired bot, wires must be 1m above from ground.   </li>
               <li>•	Timeouts will be on the discretion of the referee.</li>
               <li>•	Dead bots are not allowed, opponents team will be consider as winner.</li>
               <li>•	All bots will be checked at the start of every round that they are moving. In case of any discrepancy, referee will decide that the bot is moving or not.</li>
               <li>•	Claiming is allowed but none should stop his game till referee stops the game.</li>
               <li><h2>Allowed</h2></li>
               <li>1.	Hitting OR Kicking OR Thrashing OR Flipping the other bot.</li>
<li>2.	Completely demolishing any other bot.</li>
<li>3.	Anything else that you can imagine!!!
</li>

<li><h2>Warnings</h2></li>

<li>1.	Bot must not moves before the whistle and after the 3, 2, 1 count begins.</li>
<li>2.	Touching(any kind of interruption) the bot without asking referee.</li>
<li>3.	In case of any discrepancy referee’s decisions would be final.</li>


<li><h2>Penalty</h2></li>

<li>1.		Second warning is a penalty(20 points).</li>
<li>2.	Bots (striker+defender both) playing in the penalty should have played in the match.</li>
<li>3.	Intentionally Arena damaging will lead to disqualification of team.</li>
<li>4.	Wire cutting of opposite is not allowed. Will lead the team for disqualification.</li>

<li><h2>Note</h2></li>
<li> In case of any disputes, the decision of the organizers would be final and binding to all.</li>



            </ul>
          </section>

          {/* Arena & Bot Specification */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Arena</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>1.	The arena size would be 8ft x 8ft approx.</li>
              <li>2.	Arena may have some hurdle.</li>
             </ul>
          </section>


          <section className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Bot Specification</h2>

  <div className="mb-4">
    <h3 className="text-lg font-medium mb-2">Dimensions and Weight</h3>
    <ul className="list-decimal list-inside text-gray-700 space-y-1">
      <li>The robot should not be more than 550mm*550mm*650mm (length*breadth*height) in size at any time during game play.</li>
      <li>Bot can be of at-most 20 Kg’s</li>
      <li>Teams have to show and declare ALL of their bots before their first match itself.</li>
      <li>No major changes in the weapon system etc. would be allowed after the above mentioned declaration.</li>
    </ul>
  </div>

  <div className="mb-4">
    <h3 className="text-lg font-medium mb-2">Weapons System</h3>
    <p className="text-gray-700 mb-2">
Robots can have any kind of magnetic weapons, cutters, flippers, saws, lifting devices, spinning hammers etc. as weapons along with
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
      <li>Use of pneumatics and hydraulics are allowed.</li>
      <li>
       Pneumatics Robot can use pressurized non-inflammable gases to actuate pneumatic devices. Maximum allowed outlet nozzle pressure is 8 bar.
      </li>
      <li>
	Hydraulics Robot can use non-inflammable liquid to actuate hydraulic devices e.g. cylinders.      </li>
    </ul>

    <p className="font-semibold mt-2 mb-1">Following exceptions and limitations:</p>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Liquid projectiles.</li>
      <li>Any kind of inflammable liquid.</li>
      <li>Flame-based weapons.</li>
      <li>Any kind of explosive or intentionally ignited solid or potentially ignitable solid.</li>
      <li>High power magnets or electromagnets.</li>
      <li>Radio jamming, tazers, tesla coils, or any other high-voltage device.</li>
      <li>Tethered or un-tethered projectiles.</li>
      <li>Weapons or defenses that stop combat completely of both (or more) robots. This includes nets, tapes, strings, and other entanglement device.</li>
      <li>Spinning weapons which do not come in contact with the arena at any point of time are allowed.</li>
    </ul>
  </div>

</section>



<section className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Mobility</h2>
  <ul className="list-decimal list-inside text-gray-700 space-y-1">
    <li>	All robots must have easily visible and controlled mobility in order to compete.</li>
    <li>Flying is not allowed. </li>
  </ul>
</section>

<section className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Batteries and Power</h2>
  <ul className="list-decimal list-inside text-gray-700 space-y-1">
    <li>Each team must have batteries to power their bots or long battery wire for connection to the voltage eliminator, provided by NIB at arena to each side.</li>
    <li>The battery will be taken into consideration for the measurement to be made for the machine dimension and the weight.</li>

    <li>The only permitted batteries are ones that cannot spill or spray any of their contents when damaged or inverted.</li>
    <li>The maximum allowed battery voltage is 9,12,18 volts. No external power supply will be provided
</li>
    <li>Voltage must not exceed 18 volts between any two points.
</li>
  </ul>
</section>

<section className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Spring, Pinning and Lifting</h2>
  <ul className="list-decimal list-inside text-gray-700 space-y-1">
    <li>Any large springs used for drive or weapon power must have a way of loading and actuating the spring remotely under the robots power.</li>
    <li>

	Any flywheel or similar kinetic energy storing device must not be spinning or storing energy in anyway unless inside the arena or testing area.</li>
  </ul>
</section>

<section className="mb-6">
  <h2 className="text-xl font-semibold mb-2">SUGGESTED WIRELESS MODULES
</h2>
  <p className="text-gray-700 mb-2">
  2.4GHz WIRELESS MODULE	
  </p>
  <p className="text-gray-700 mb-2">
   
With a RANGE OF OVER 200M and NO FREQUENCY CLASH, this wireless module can be interfaced to your robot using the below motor driver
  </p>
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
