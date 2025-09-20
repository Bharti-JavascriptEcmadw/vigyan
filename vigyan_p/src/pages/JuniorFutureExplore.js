import React from "react";
import { useNavigate } from "react-router-dom";

const JuniorFutureExplore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 via-blue-200 to-green-200  py-10 px-6 flex flex-col items-center">
     

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
       
The competition will be held in two stages followed by the final presentations at Nation Innovators Battle(NIB).

          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <b>Round 1:</b> Live Project Presentation by the Teams describing their problem statement, proposed solution, background, and potential impact at their School event. 
            </li>
            <li>
              <b>Round 2:</b>Detailed Report & Working Prototype of project of the Shortlisted teams, highlighting the design, functionality, scalability, and viability of their idea. Final Presentations of the top teams will present their solutions at Nation Innovators Battle before a panel of judges, where the winners will be announced.
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
Registration Closes on November 13th, 2025             </li>
            <li>
             Finale November 19th, 2025 at National Innovators Battle(NIB) Arena Hall.
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
            Every team has to register online on the official <a href="http://www.vigyanpathshala.com" className="text-blue-600 underline">
                www.vigyanpathshala.com
              </a>{" "}  website or registration link provided at your school for the competition. 
A Team ID will be allocated to the team on registration, which shall be used for future references. 
The decision of the organizers or judges shall be treated as final and binding on all. 

          </li>
            <li>No responsibility will be held by NIB, Prayagraj for any late, lost, or misdirected entries. </li>
            <h3 className="text-2xl font-semibold text-blue-700 mb-3 border-b-2 border-blue-400 inline-block pb-1">
          Note
          </h3>
            <li>Note that at any point in time the latest information will be that which is on the website; however, registered participants will be informed through mail about any changes.</li>
            <li>
                 All modes of official communication will be through the Nation Innovators Battle’s (NIB) e-mail; participants are advised to keep track of all folders in their e-mail account.
            </li>
          </ul>
        </section>

        {/* Competition Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3 border-b-2 border-blue-400 inline-block pb-1">
            Competition Rules
          </h2>
          <p className="text-gray-700 mb-3">
          Additional Rules for Nation Innovators Battle (NIB) 2025 National Championship In addition to the General rules and regulations published by the NIB Association governing RoboRugby, Future Innovators (Jr. & Sr.), Race-o-Bot, Line Follower Robot and Future Engineers categories the following additional rules shall also be enforced at the NIB India 2025 National Championship. 
          </p>
          <h3 className="text-xl font-semibold mt-4 text-blue-600">  A. Code of Conduct:</h3>

                <p className="text-gray-700 mb-3">

                   Participants, Coaches, and Accompanying persons shall not indulge in such behavior and practices that are not aligned with the spirit of the competition and shall lead to immediate disqualification of the team, immediate removal of all the participants and accompanying persons from the game venue. Such behaviors could be, but not limited to:

                    </p>


   <ul className="list-disc list-inside text-gray-700 space-y-1">
  <li>Misbehaving with any participants, accompanying persons, visitors, organizers, and judges. </li>
  <li>Causing problems or difficulties for other teams. </li>
  <li>Disrupting the proceedings and normal flow of the competition. </li>
  <li>Illegal interaction by the team coach or accompanying person with the student participants when restrictions are in force. </li>
  <li>Attempting to illegally support the team by passing a program or solution when restrictions are in force. </li>
</ul>







          <h3 className="text-xl font-semibold mt-4 text-blue-600">B. Devices</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Laptops, mobile phones, tablets, USB drive/data transfer devices, hotspots, and other digital devices shall not be allowed to be brought into Arena Hall by the accompanying persons or team coaches. Two Laptops per teams are allowed by the participants inside the competition hall. </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 text-blue-600">C. No Bags</h3>
          <p className="text-gray-700">No bags shall be allowed to be brought into the hall or the pit area by participants, accompanying persons, or team coaches. However, participants can carry their water bottles with them. </p>
        </section>



  <h3 className="text-xl font-semibold mt-4 text-blue-600">D</h3>
          <p className="text-gray-700">Team participants will be allowed to carry their robot kits and a maximum of two (2) laptops + chargers (without bag) per participant into the pit area and booths. Laptops cannot be removed from the pit areas or booths after the surprise rule announcement till the end of the game time. </p>

            <h3 className="text-xl font-semibold mt-4 text-blue-600">E</h3>
          <p className="text-gray-700">Laptop swapping with any other team member, coaches, and accompanying persons shall not be allowed. The laptop should not be connected to the internet, if found any laptop connected to the internet will lead to the disqualification of that particular team.  </p>


            <h3 className="text-xl font-semibold mt-4 text-blue-600">F</h3>
          <p className="text-gray-700">Students and their belongings are also subject to search at any time in the pit area. If any USB/Data Transfer device, mobile phone, tablet, hotspot device, or other communication device is found with them then the team shall be disqualified to participate in that round. </p>

            <h3 className="text-xl font-semibold mt-4 text-blue-600">G</h3>
          <p className="text-gray-700">Future Innovators category table size will be 0.5m x  0.5m max and the all-project elements, posters, and standees must fit the allocated space. No element shall be on the move passage. Teams must set up their table area that day in the allocated time.  </p>

            
          <h3 className="text-xl font-semibold mt-4 text-blue-600">H</h3>
          <p className="text-gray-700">Identical robots and internet solutions: The objective of NIB is to ensure that participants/students design, build, and program the robot on their own to solve the mission and learn in this process. Coach intervention and support are required during the build season that starts with the announcement of the NIB yearly challenge. Each solution needs to be unique and should be an outcome of the creative talent of the participants and should be students' own work at the NIB.  </p> <br></br>
<ul className="list-inside text-gray-700 space-y-1">
  <li className="list-none"><span className="font-semibold">a)</span>If two or more Robots are found to be identical or similar in design, the judges will direct the teams to carry out the necessary amendments in the physical design of the Robot so that they are not identical or similar looking. The judges can point it out to the teams at any time during calibration, practice, or robot inspection time. The teams will implement the design change to the satisfaction of the Judges. Once the Judges are satisfied that the design changes carried out by the teams have made visible and adequate differences in the design of previously identical robots, they may allow the team to participate in the Robot run. In case the team(s) fail to comply with this requirement, the team will not be allowed to participate in that Robot run. </li>
  <li className="list-none"><span className="font-semibold">b)</span> 	If two or more Robots are found to be identical or similar in design, the judges will direct the teams to carry out the necessary amendments in the physical design of the Robot so that they are not identical or similar looking. The judges can point it out to the teams at any time during calibration, practice, or robot inspection time. The teams will implement the design change to the satisfaction of the Judges. Once the Judges are satisfied that the design changes carried out by the teams have made visible and adequate differences in the design of previously identical robots, they may allow the team to participate in the Robot run. In case the team(s) fail to comply with this requirement, the team will not be allowed to participate in that Robot run. </li>
  <li className="list-none"><span className="font-semibold">c)</span> 	Robots that are the same or too similar to the solutions available on the internet shall not be allowed to participate in the run. They may be allowed to participate if they change their design with the allocated time for that run or in other runs. </li>
</ul>



<section className="mb-6">
 <h3 className="text-xl font-semibold mt-4 text-blue-600">I. Surprise Rule: </h3>

 <ul className="list-inside text-gray-700 space-y-1">
    <li className="list-none"><span className="font-semibold">a)</span>Teams can bring pre-build robots to the competition. There will be no need to construct and program robots on the spot.</li>

    <li className="list-none"><span className="font-semibold">b)</span> A surprise rule will be announced on that day. </li>


    <li className="list-none"><span className="font-semibold">c)</span> Teams will be allowed to take their robots back with them at the end of day. </li>


    <li className="list-none"><span className="font-semibold">d)</span> To arrive at the final score average of score under Categories (Presentation, Innovation, Functionality, Automation etc) shall be taken.</li>
  </ul>

  
</section>




<section className="mb-6">
 <h3 className="text-xl font-semibold mt-4 text-blue-600"> J. Ethics and Technical Committee: </h3>

 <ul className="list-inside text-gray-700 space-y-1">
    <li className="list-none"><span className="font-semibold">a)</span>A committee shall be announced on the day of the competition to monitor and enforce </li>
 </ul>

 <h3 className="text-xl font-semibold mt-4 text-blue-600"> K. Violation:  </h3>

  <li className="list-none"><span className="font-semibold">a)</span>Any violation of the above rules can lead to a penalty or disqualification of the team from the competition </li>

 
  
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









export default JuniorFutureExplore;
