import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const professionalsData = [
  {
    id: 1,
    fullName: "Lukas Podolski",
    email: "lukas.podolski@example.com",
    phone: "+49 176 9876 5432",
    category: "Coach",
    idProof: "/id-proof.png",
    connected: false,
  },
  {
    id: 2,
    fullName: "Thomas Müller",
    email: "thomas.muller@example.com",
    phone: "+49 123 456 7890",
    category: "Coach",
    idProof: "/id-proof.png",
    connected: true,
  },
  // Add more entries as needed
];

const ExternalProfessionals = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [bulkAction, setBulkAction] = useState("");

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedRows(!selectAll ? professionalsData.map((p) => p.id) : []);
  };

  const handleRowSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleBulkApply = () => {
    alert(`Applied "${bulkAction}" to IDs: ${selectedRows.join(", ")}`);
  };

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>External Professionals</h1>

      {/* Filters */}
      <div className='flex flex-wrap items-center gap-4 mb-6'>
        <input
          type='text'
          placeholder='Search professionals...'
          className='border rounded px-3 py-2 w-64'
        />
        <select className='border rounded px-3 py-2'>
          <option>All Categories</option>
        </select>
        <select className='border rounded px-3 py-2'>
          <option>All Verification Status</option>
        </select>
        <select className='border rounded px-3 py-2'>
          <option>All Stripe Status</option>
        </select>
        <button className='bg-purple-700 text-white px-4 py-2 rounded'>
          Apply Filters
        </button>
      </div>

      {/* Bulk + Add */}
      <div className='flex justify-between items-center mb-4'>
        <div className='flex gap-2'>
          <select
            value={bulkAction}
            onChange={(e) => setBulkAction(e.target.value)}
            className='border rounded px-3 py-2'
          >
            <option value=''>Bulk Actions</option>
            <option value='delete'>Delete</option>
            <option value='export'>Export</option>
          </select>
          <button
            className='bg-gray-700 text-white px-4 py-2 rounded'
            onClick={handleBulkApply}
            disabled={selectedRows.length === 0 || bulkAction === ""}
          >
            Apply
          </button>
        </div>
        <button className='bg-purple-700 text-white px-4 py-2 rounded'>
          + Add New
        </button>
      </div>

      {/* Tabs */}
      <div className='mb-4 border-b'>
        <ul className='flex gap-6 text-sm font-medium text-gray-600'>
          <li className='text-purple-700 border-b-2 border-purple-700 pb-2'>
            Active
          </li>
          <li className='hover:text-purple-700 cursor-pointer'>
            Pending Verification
          </li>
        </ul>
      </div>

      {/* Table */}
      <div className='overflow-x-auto border rounded-lg'>
        <table className='w-full text-sm text-left'>
          <thead className='bg-gray-100 text-gray-700 font-medium'>
            <tr>
              <th className='px-4 py-2'>
                <input
                  type='checkbox'
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className='px-4 py-2'>Full Name</th>
              <th className='px-4 py-2'>Email Address</th>
              <th className='px-4 py-2'>Phone Number</th>
              <th className='px-4 py-2'>Professional Category</th>
              <th className='px-4 py-2'>ID Proof Document</th>
              <th className='px-4 py-2'>Signature</th>
              <th className='px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {professionalsData.map((prof) => (
              <tr key={prof.id} className='border-t'>
                <td className='px-4 py-2'>
                  <input
                    type='checkbox'
                    checked={selectedRows.includes(prof.id)}
                    onChange={() => handleRowSelect(prof.id)}
                  />
                </td>
                <td className='px-4 py-2'>{prof.fullName}</td>
                <td className='px-4 py-2'>{prof.email}</td>
                <td className='px-4 py-2'>{prof.phone}</td>
                <td className='px-4 py-2'>{prof.category}</td>
                <td className='px-4 py-2'>
                  <img
                    src={prof.idProof}
                    alt='ID'
                    className='w-16 h-auto rounded'
                  />
                </td>
                <td className='px-4 py-2'>
                  {prof.connected ? (
                    <span className='text-sm text-gray-600'>Signature</span>
                  ) : (
                    <span className='text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full'>
                      ● Not Connected
                    </span>
                  )}
                </td>
                <td className='px-4 py-2 flex gap-2 text-purple-700'>
                  <FaEye className='cursor-pointer' />
                  <FaEdit className='cursor-pointer' />
                  <FaTrash className='cursor-pointer text-red-600' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExternalProfessionals;
