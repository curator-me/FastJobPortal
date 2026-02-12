import { Check } from "lucide-react";
import { plans } from "../../data/pricing";
import './Pricing.css';

export function Pricing() {
    return (
        <div className="pricing-page">
            <header className="pricing-header">
                <h1 className="pricing-title">Simple, <span className="text-gradient">Transparent</span> Pricing</h1>
                <p className="pricing-subtitle">
                    Choose the plan that's right for your career journey. No hidden fees.
                </p>
            </header>

            <div className="pricing-grid">
                {plans.map((plan, index) => (
                    <div key={index} className={`pricing-card ${plan.highlight ? 'highlighted' : ''}`}>
                        {plan.highlight && <div className="popular-badge">Most Popular</div>}
                        <div className="card-header">
                            <div className="icon-wrapper">
                                {plan.icon}
                            </div>
                            <h2 className="plan-name">{plan.name}</h2>
                            <p className="plan-description">{plan.description}</p>
                        </div>
                        <div className="plan-price">
                            <span className="currency">$</span>
                            <span className="amount">{plan.price}</span>
                            <span className="period">/{plan.period}</span>
                        </div>
                        <ul className="features-list">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex}>
                                    <Check className="check-icon" size={18} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className={`pricing-button ${plan.highlight ? 'primary' : 'secondary'}`}>
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>

            <section className="faq-section">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div className="faq-grid">
                    <div className="faq-item">
                        <h3>Can I change plans later?</h3>
                        <p>Yes, you can upgrade or downgrade your plan at any time from your account settings.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Is there a free trial?</h3>
                        <p>Our Free Tier is free forever! You can use it to explore the platform before deciding to upgrade.</p>
                    </div>
                    <div className="faq-item">
                        <h3>What payment methods do you accept?</h3>
                        <p>We accept all major credit cards, PayPal, and Apple Pay for your convenience.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};