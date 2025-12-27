import "./Footer.css";

export function Footer() {
  return (
    <section className="footer">
      <div className="container">
        {/* Newsletter Signup */}
        <div className="newsletter">
          <h3>Stay Updated!</h3>
          <p>
            Subscribe to our newsletter to get the latest job updates and
            platform news.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="link-category">
            {/* <h4>⚙️ Core Features</h4> */}
            <ul>
              <li>
                <a href="#">Job Search</a>
              </li>
              <li>
                <a href="#">Job Listing View</a>
              </li>
              <li>
                <a href="#">Job Details Page</a>
              </li>
              <li>
                <a href="#">Save & Manage Jobs</a>
              </li>
              <li>
                <a href="#">User Authentication</a>
              </li>
            </ul>
          </div>

          <div className="link-category">
            {/* <h4>👤 For Job Seekers</h4> */}
            <ul>
              <li>
                <a href="#">Browse Jobs</a>
              </li>
              <li>
                <a href="#">Saved Jobs</a>
              </li>
              <li>
                <a href="#">Job Alerts</a>
              </li>
              <li>
                <a href="#">Career Tips</a>
              </li>
              <li>
                <a href="#">Profile Settings</a>
              </li>
            </ul>
          </div>

          <div className="link-category">
            {/* <h4>💼 For Employers</h4> */}
            <ul>
              <li>
                <a href="#">Post a Job</a>
              </li>
              <li>
                <a href="#">Manage Listings</a>
              </li>
              <li>
                <a href="#">Employer Dashboard</a>
              </li>
              <li>
                <a href="#">Company Profile</a>
              </li>
              <li>
                <a href="#">Pricing Plans</a>
              </li>
            </ul>
          </div>

          <div className="link-category">
            {/* <h4>🛠️ For Admin</h4> */}
            <ul>
              <li>
                <a href="#">Approve/Reject Jobs</a>
              </li>
              <li>
                <a href="#">User Statistics</a>
              </li>
              <li>
                <a href="#">Moderate Reports</a>
              </li>
              <li>
                <a href="#">Manage Employers</a>
              </li>
            </ul>
          </div>

          <div className="link-category">
            {/* <h4>💡 Bonus Features</h4> */}
            <ul>
              <li>
                <a href="#">Dark/Light Mode</a>
              </li>
              <li>
                <a href="#">AI Job Recommendations</a>
              </li>
              <li>
                <a href="#">Resume Upload</a>
              </li>
              <li>
                <a href="#">Top Companies</a>
              </li>
              <li>
                <a href="#">Salary Insights</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} JobPortal. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
