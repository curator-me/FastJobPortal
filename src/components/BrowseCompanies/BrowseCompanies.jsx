import { useState, useEffect } from "react";
import "./BrowseCompanies.css";
import { Search, ChevronRight } from "lucide-react";
import { TopBarSection } from "./TopBarSection";
import { FilterCompanies } from "./FilterCompanies";
import { CompanyCard } from "./CompanyCard";

// Mock data for companies
import { companies } from "../../data/companies";

export function BrowseCompanies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [filteredCompanies, setFilteredCompanies] = useState(companies);
  const [sortBy, setSortBy] = useState("name");

  // Extract unique industries
  const industries = ["all", ...new Set(companies.map((c) => c.industry))];

  // Filter and sort companies
  useEffect(() => {
    let result = [...companies];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (company) =>
          company.name.toLowerCase().includes(query) ||
          company.industry.toLowerCase().includes(query) ||
          company.description.toLowerCase().includes(query) ||
          company.location.toLowerCase().includes(query)
      );
    }
    // Industry filter
    if (selectedIndustry !== "all") {
      result = result.filter(
        (company) => company.industry === selectedIndustry
      );
    }
    // Sort
    switch (sortBy) {
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "size":
        result.sort((a, b) => (b.size || 0) - (a.size || 0));
        break;
      case "rating":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }
    setFilteredCompanies(result);
  }, [searchQuery, selectedIndustry, sortBy]);

  return (
    <div className="browse-companies">
      {/* Hero Section */}
      <TopBarSection />

      {/* Filters Section */}
      <FilterCompanies
        industries={industries}
        filteredCompanies={filteredCompanies}
        companies={companies}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedIndustry={selectedIndustry}
        setSelectedIndustry={setSelectedIndustry}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Companies Grid */}
      <div className="companies-grid">
        {filteredCompanies.length === 0 ? (
          <div className="no-results">
            <Search size={48} className="no-results-icon" />
            <h3>No companies found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        ) : (
          filteredCompanies.map((company) => <CompanyCard company={company} key={company.id} />)
        )}
      </div>

      {/* CTA Section */}
      <div className="companies-cta">
        <div className="cta-content">
          <h2>Looking for something specific?</h2>
          <p>
            Can't find the company you're looking for? Contact our team to add a
            new company listing.
          </p>
          <button className="cta-button">
            Suggest a Company
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
