import React from "react";
import { FaDownload, FaTimes } from "react-icons/fa";

const ExternalProfessionalProfile = ({ professional, onClose }) => {
  if (!professional) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
      <div className='bg-white w-full max-w-5xl rounded-lg shadow-lg overflow-y-auto max-h-[90vh] relative'>
        {/* Close Button */}
        <button
          className='absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl'
          onClick={onClose}
        >
          <FaTimes />
        </button>

        {/* Header */}
        <div className='p-6 border-b'>
          <h2 className='text-xl font-semibold'>
            External Professional Profile
          </h2>
        </div>

        {/* Content */}
        <div className='p-6'>
          {/* Top Section */}
          <div className='flex flex-wrap justify-between gap-4 mb-6'>
            <div>
              <h3 className='text-lg font-semibold'>Dr. Michael Anderson</h3>
              <p className='text-sm text-gray-500'>Sports Psychologist</p>
              <div className='mt-2 text-sm space-y-1'>
                <p>📧 michael.anderson@example.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>🏷️ Joined: April 15, 2025</p>
              </div>
            </div>

            <div className='space-x-2 mt-2'>
              <span className='bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium'>
                Pending Verification
              </span>
              <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium'>
                Stripe Connected
              </span>
            </div>
          </div>

          {/* Documents and Actions */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
            <div>
              <label className='text-sm font-medium'>ID Proof</label>
              <div className='flex items-center justify-between p-3 border rounded-lg mt-2'>
                <span className='text-sm'>Passport.pdf</span>
                <FaDownload className='text-gray-500 cursor-pointer' />
              </div>
            </div>
            <div>
              <label className='text-sm font-medium'>Signature</label>
              <div className='flex items-center justify-between p-3 border rounded-lg mt-2'>
                <span className='text-sm'>signature.png</span>
                <FaDownload className='text-gray-500 cursor-pointer' />
              </div>
            </div>
          </div>

          <div className='flex items-center gap-4 mb-10'>
            <button className='bg-purple-700 text-white px-4 py-2 rounded-md'>
              ✔ Approve
            </button>
            <button className='border px-4 py-2 rounded-md text-gray-600'>
              ✖ Reject
            </button>
          </div>

          {/* Tabs */}
          <div>
            <h3 className='text-md font-semibold mb-4'>Reservation</h3>
            <div className='flex gap-6 border-b mb-4'>
              {["Upcoming", "Ongoing", "Complete", "Cancelled"].map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 text-sm font-medium ${
                    tab === "Upcoming"
                      ? "border-b-2 border-purple-700 text-purple-700"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Appointment Table */}
            <div className='overflow-x-auto'>
              <table className='min-w-full text-sm text-left'>
                <thead className='bg-gray-50 text-gray-600'>
                  <tr>
                    <th className='px-4 py-2'>Player</th>
                    <th className='px-4 py-2'>Service</th>
                    <th className='px-4 py-2'>Date & Time</th>
                    <th className='px-4 py-2'>Status</th>
                    <th className='px-4 py-2'>Actions</th>
                  </tr>
                </thead>
                <tbody className='divide-y'>
                  {/* Dummy Data */}
                  {[
                    {
                      player: "James Rodriguez",
                      team: "FC Barcelona",
                      service: "Performance Coaching",
                      datetime: "Apr 25, 2025 – 10:00 AM",
                      status: "Completed",
                      badge: "green",
                    },
                    {
                      player: "Marcus Davies",
                      team: "Manchester United",
                      service: "Initial Consultation",
                      datetime: "Apr 24, 2025 – 2:30 PM",
                      status: "In Progress",
                      badge: "yellow",
                    },
                    {
                      player: "Luka Modric",
                      team: "Real Madrid",
                      service: "Crisis Intervention",
                      datetime: "Apr 23, 2025 – 4:15 PM",
                      status: "Completed",
                      badge: "green",
                    },
                    {
                      player: "Kylian Mbappé",
                      team: "PSG",
                      service: "Performance Coaching",
                      datetime: "Apr 22, 2025 – 11:00 AM",
                      status: "Cancelled",
                      badge: "red",
                    },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className='px-4 py-2'>
                        <div className='flex items-center gap-2'>
                          <div className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-semibold'>
                            {row.player.split(" ")[0][0]}
                            {row.player.split(" ")[1][0]}
                          </div>
                          <div>
                            <div className='font-medium'>{row.player}</div>
                            <div className='text-xs text-gray-500'>
                              {row.team}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='px-4 py-2'>{row.service}</td>
                      <td className='px-4 py-2'>{row.datetime}</td>
                      <td className='px-4 py-2'>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            row.badge === "green"
                              ? "bg-green-100 text-green-700"
                              : row.badge === "yellow"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className='px-4 py-2 text-gray-500'>⋮</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='text-xs text-gray-500 mt-3'>
                Showing 1–5 of 24 appointments
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExternalProfessionalProfile;
