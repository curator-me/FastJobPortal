import { Filter, Search, TrendingUp } from "lucide-react";

export function FilterCompanies({
  industries,
  filteredCompanies,
  companies,
  searchQuery,
  setSearchQuery,
  selectedIndustry,
  setSelectedIndustry,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="companies-filters">
      <div className="search-container">
        <Search size={20} className="search-icon" />
        <input
          type="text"
          placeholder="Search companies by name, industry, or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-controls">
        <div className="filter-group">
          <Filter size={18} />
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="filter-select"
          >
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry === "all" ? "All Industries" : industry}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <TrendingUp size={18} />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="name">Sort by Name</option>
            <option value="size">Sort by Size</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>
      </div>

      <div className="results-count">
        Showing{" "}
        <span className="count-highlight">{filteredCompanies.length}</span> of{" "}
        {companies.length} companies
      </div>
    </div>
  );
}
