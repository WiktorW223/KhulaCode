
export default function FaqTwo() {
  return (
    <div className="row g-4">
        <div className="col-xl-6 col-lg-6 col-12">
            
            <div className="accordion d-flex flex-column gap-3" id="faqFirst">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne" aria-expanded="true" aria-controls="faqOne">
                            What is included in each plan?
                        </button>
                    </h2>
                    <div id="faqOne" className="accordion-collapse collapse show" data-bs-parent="#faqFirst">
                        <div className="accordion-body">
                        Each plan provides access to a different level of features such as course materials, downloadable resources, instructor support, and certification. Please refer to the comparison table above for full details.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo" aria-expanded="false" aria-controls="faqTwo">
                            Can I switch between plans later?
                        </button>
                    </h2>
                    <div id="faqTwo" className="accordion-collapse collapse" data-bs-parent="#faqFirst">
                        <div className="accordion-body">
                        Yes! You can upgrade or downgrade your plan anytime from your account dashboard. The changes will be applied at the start of your next billing cycle.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree" aria-expanded="false" aria-controls="faqThree">
                            Do you offer a free trial?
                        </button>
                    </h2>
                    <div id="faqThree" className="accordion-collapse collapse" data-bs-parent="#faqFirst">
                        <div className="accordion-body">
                        Yes, we offer a 7-day free trial for the Pro plan. During this period, you can explore all premium features without being charged.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqFour" aria-expanded="false" aria-controls="faqFour">
                            Do I get a certificate after completing a course?
                        </button>
                    </h2>
                    <div id="faqFour" className="accordion-collapse collapse" data-bs-parent="#faqFirst">
                        <div className="accordion-body">
                        Absolutely. All our paid plans include a downloadable certificate upon successful completion of eligible courses.
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
        <div className="col-xl-6 col-lg-6 col-12">
            
            <div className="accordion d-flex flex-column gap-3" id="faqSeconda">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqFive" aria-expanded="true" aria-controls="faqFive">
                            Is there a discount for yearly billing?
                        </button>
                    </h2>
                    <div id="faqFive" className="accordion-collapse collapse show" data-bs-parent="#faqSeconda">
                        <div className="accordion-body">
                        Each plan provides access to a different level of features such as course materials, downloadable resources, instructor support, and certification. Please refer to the comparison table above for full details.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqSix" aria-expanded="false" aria-controls="faqSix">
                            Can I use one subscription for multiple users?
                        </button>
                    </h2>
                    <div id="faqSix" className="accordion-collapse collapse" data-bs-parent="#faqSeconda">
                        <div className="accordion-body">
                        Each subscription is valid for a single user. For team or classroom access, please contact us about our group plans.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqSeven" aria-expanded="false" aria-controls="faqSeven">
                            What payment methods do you accept?
                        </button>
                    </h2>
                    <div id="faqSeven" className="accordion-collapse collapse" data-bs-parent="#faqSeconda">
                        <div className="accordion-body">
                        We accept all major credit/debit cards, PayPal, and UPI. For enterprise customers, invoice billing can also be arranged.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqEight" aria-expanded="false" aria-controls="faqEight">
                            Do you offer refunds?
                        </button>
                    </h2>
                    <div id="faqEight" className="accordion-collapse collapse" data-bs-parent="#faqSeconda">
                        <div className="accordion-body">
                        Yes, we have a 7-day money-back guarantee. If you're not satisfied, you can request a full refund within the first week of your subscription.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
