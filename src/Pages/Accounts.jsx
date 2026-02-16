




import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addAccount,
  toggleArchive,
  togglePin,
} from "../Store/Accounts/accountsSlice.js";

function AccountsPage() {
  const accounts = useSelector((state) => state.accounts.accounts);

  const [activeTab, setActiveTab] = useState("active"); 
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("date");
  const dispatch = useDispatch();

  // Filter + Sort Logic
  const filteredAccounts = useMemo(() => {
    let result = [...accounts];

    // 1️⃣ Filter by tab
    result = result.filter((acc) =>
      activeTab === "active"
        ? !acc.isArchived
        : acc.isArchived
    );

    // 2️⃣ Search filter
    if (searchQuery.trim() !== "") {
      result = result.filter((acc) =>
        acc.nameLower.includes(searchQuery.toLowerCase().trim())
      );
    }

    // 3️⃣ Sort logic
    if (sortOption === "nameAsc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "nameDesc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      // default: newest first
      result.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    // 4️⃣ Pin priority (always top)
    result.sort((a, b) => b.isPinned - a.isPinned);

    return result;
  }, [accounts, activeTab, searchQuery, sortOption]);

 console.log("All Accounts:", accounts);
console.log("Filtered Accounts:", filteredAccounts);

  // Count for tabs
  const activeCount = accounts.filter(acc => !acc.isArchived).length;
  const archivedCount = accounts.filter(acc => acc.isArchived).length;

  return (
   <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Accounts Page</h1>
     <div className="flex gap-6 border-b mb-4">
  <button
    className={`pb-2 ${
      activeTab === "active"
        ? "border-b-2 border-blue-500 font-semibold"
        : "text-gray-500"
    }`}
    onClick={() => setActiveTab("active")}
  >
    Accounts ({activeCount})
  </button>

  <button
    className={`pb-2 ${
      activeTab === "archived"
        ? "border-b-2 border-blue-500 font-semibold"
        : "text-gray-500"
    }`}
    onClick={() => setActiveTab("archived")}
  >
    Archived ({archivedCount})
  </button>
</div>
   <input
  type="text"
  placeholder="Search account..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  className="border p-2 rounded w-full mb-4"
/>

    <div className="flex gap-2 mb-4">
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded"
        onClick={() => dispatch(addAccount("Salary"))}
      >
        Add Salary
      </button>

      <button
        className="bg-green-500 text-white px-3 py-1 rounded"
        onClick={() => dispatch(addAccount("Savings"))}
      >
        Add Savings
      </button>
    </div>

    <div className="space-y-3">
      {filteredAccounts.map((acc) => (
        <div
          key={acc.id}
          className="border p-4 rounded shadow bg-white"
        >
          <h2 className="font-semibold text-lg">{acc.name}</h2>
          <p>Archived: {acc.isArchived ? "Yes" : "No"}</p>
          <p>Pinned: {acc.isPinned ? "Yes" : "No"}</p>

          <div className="flex gap-2 mt-2">
            <button
              className="bg-yellow-500 text-white px-2 py-1 rounded"
              onClick={() => dispatch(togglePin(acc.id))}
            >
              Toggle Pin
            </button>

            <button
              className="bg-purple-500 text-white px-2 py-1 rounded"
              onClick={() => dispatch(toggleArchive(acc.id))}
            >
              Toggle Archive
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default AccountsPage;
