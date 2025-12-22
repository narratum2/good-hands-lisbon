import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Good Hands',
  description: 'Terms and conditions for using the Good Hands beauty concierge platform.',
}

export default function TermsPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container-custom max-w-4xl py-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Terms of Service</h1>
        <p className="text-harbor text-lg mb-8">
          Last updated: December 22, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-serif mb-4">1. Agreement to Terms</h2>
            <p className="text-harbor leading-relaxed">
              By accessing or using the Good Hands platform ("Platform" or "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">2. Platform Description & Role</h2>
            <p className="text-harbor leading-relaxed">
              <strong>Good Hands is a technology platform that connects clients with independent beauty professionals.</strong> We operate as a marketplace and booking facilitator only. We are not a beauty service provider, employer, or agency.
            </p>
            
            <div className="bg-gold/10 border-l-4 border-gold p-4 my-4">
              <p className="text-ink font-medium mb-2">Important: Platform-Only Service</p>
              <p className="text-harbor text-sm">
                Good Hands does not employ, supervise, or control the beauty professionals listed on our platform. All professionals are independent contractors or business owners operating their own practices. We facilitate connections and bookings—we do not provide beauty services directly.
              </p>
            </div>

            <p className="text-harbor leading-relaxed mt-4">
              Our platform services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor mt-3">
              <li>Curated matching with vetted independent beauty professionals</li>
              <li>Booking coordination and scheduling facilitation</li>
              <li>Secure payment processing on behalf of service providers</li>
              <li>Customer support and communication tools</li>
              <li>Quality verification and professional vetting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">3. Corporate Information</h2>
            <p className="text-harbor leading-relaxed">
              Good Hands is operated by <strong>Good Hands LLC</strong>, a limited liability company incorporated in the State of Delaware, United States.
            </p>
            <div className="bg-shell p-4 rounded-lg mt-4">
              <p className="text-harbor text-sm"><strong>Legal Entity:</strong> Good Hands LLC</p>
              <p className="text-harbor text-sm"><strong>Jurisdiction:</strong> Delaware, USA</p>
              <p className="text-harbor text-sm"><strong>Operations:</strong> Lisbon, Portugal (primary market)</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">3. User Responsibilities</h2>
            <h3 className="text-2xl font-serif mb-3 mt-6">3.1 Account Information</h3>
            <p className="text-harbor leading-relaxed">
              You agree to provide accurate, current, and complete information and to update it as necessary to maintain accuracy.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">3.2 Conduct</h3>
            <p className="text-harbor leading-relaxed mb-3">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Harass, abuse, or harm beauty professionals or other users</li>
              <li>Provide false or misleading information</li>
              <li>Attempt to circumvent our concierge service fees</li>
              <li>Use automated systems to access the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">4. Platform Fees & Commission Structure</h2>
            
            <h3 className="text-2xl font-serif mb-3 mt-6">4.1 Service Fees</h3>
            <p className="text-harbor leading-relaxed">
              Good Hands charges a platform service fee ("Commission") for facilitating connections between clients and beauty professionals. This fee covers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor mt-2">
              <li>Platform access and booking technology</li>
              <li>Professional vetting and quality assurance</li>
              <li>Customer support and dispute resolution</li>
              <li>Secure payment processing</li>
              <li>Marketing and client acquisition on behalf of professionals</li>
            </ul>
            
            <div className="bg-shell p-4 rounded-lg mt-4">
              <p className="text-ink font-medium mb-2">Commission Structure</p>
              <p className="text-harbor text-sm">
                Our standard commission is <strong>15-20%</strong> of the service fee, which is included in the quoted price. Beauty professionals set their own base rates; our commission is added transparently. The exact commission rate may vary based on service type, membership level, and promotional periods.
              </p>
            </div>

            <h3 className="text-2xl font-serif mb-3 mt-6">4.2 Pricing Transparency</h3>
            <p className="text-harbor leading-relaxed">
              All prices displayed include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor mt-2">
              <li>Professional's service fee</li>
              <li>Good Hands platform commission</li>
              <li>Applicable local taxes (VAT)</li>
            </ul>
            <p className="text-harbor leading-relaxed mt-3">
              Prices are displayed in Euros (€). The price shown at time of booking confirmation is the final price. Professionals are paid their portion within 7 business days of service completion.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">4.3 Payment Processing</h3>
            <p className="text-harbor leading-relaxed">
              Payments are processed securely through Stripe. By making a booking, you authorize us to charge your payment method for the full amount. Good Hands acts as a payment facilitator, not a party to the service transaction.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">4.4 No Direct Payment</h3>
            <p className="text-harbor leading-relaxed">
              Clients agree not to pay beauty professionals directly outside the platform for services booked through Good Hands. Doing so constitutes a breach of these Terms and may result in account suspension.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">5. Cancellations and Refunds</h2>
            <h3 className="text-2xl font-serif mb-3 mt-6">5.1 Cancellation Policy</h3>
            <ul className="list-disc pl-6 space-y-2 text-harbor">
              <li><strong>48+ hours before:</strong> Full refund</li>
              <li><strong>24-48 hours before:</strong> 50% refund</li>
              <li><strong>Less than 24 hours:</strong> No refund</li>
              <li><strong>No-show:</strong> No refund</li>
            </ul>

            <h3 className="text-2xl font-serif mb-3 mt-6">5.2 Provider Cancellations</h3>
            <p className="text-harbor leading-relaxed">
              If a beauty professional cancels, we will either reschedule with another qualified professional or provide a full refund.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">5.3 Service Issues</h3>
            <p className="text-harbor leading-relaxed">
              If you're unsatisfied with your service, contact us within 24 hours. We'll investigate and may offer a partial refund or future service credit at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">6. Intellectual Property</h2>
            <p className="text-harbor leading-relaxed">
              The Service and its original content, features, and functionality are owned by Good Hands and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">7. Liability, Warranties & Platform Limitations</h2>
            
            <div className="bg-gold/10 border-l-4 border-gold p-4 my-4">
              <p className="text-ink font-medium mb-2">Platform Role Disclaimer</p>
              <p className="text-harbor text-sm">
                Good Hands is a technology platform connecting clients with independent beauty professionals. We are <strong>not</strong> a beauty service provider, employer, or agency. All beauty services are provided by independent professionals, not by Good Hands.
              </p>
            </div>

            <h3 className="text-2xl font-serif mb-3 mt-6">7.1 Platform "As Is"</h3>
            <p className="text-harbor leading-relaxed">
              The Platform is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">7.2 Independent Professional Services</h3>
            <p className="text-harbor leading-relaxed">
              Good Hands is a marketplace that facilitates connections. We do not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor mt-2">
              <li>Employ, supervise, or direct beauty professionals</li>
              <li>Control the methods, timing, or quality of services</li>
              <li>Provide beauty, wellness, or any personal services directly</li>
              <li>Guarantee any specific outcome or result from services</li>
            </ul>
            <p className="text-harbor leading-relaxed mt-3">
              All beauty services are performed by independent contractors or business owners. Any issues with service quality, results, or professional conduct should be addressed directly with the professional and reported to us for mediation support.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">7.3 Limitation of Liability</h3>
            <p className="text-harbor leading-relaxed">
              <strong>To the maximum extent permitted by applicable law:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-harbor mt-2">
              <li>Good Hands shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Good Hands is not liable for any damages, injuries, or losses arising from services provided by beauty professionals</li>
              <li>Good Hands is not liable for any disputes between clients and professionals</li>
              <li>Our maximum aggregate liability is limited to the platform fees paid by you in the 12 months preceding the claim</li>
            </ul>

            <h3 className="text-2xl font-serif mb-3 mt-6">7.4 Assumption of Risk</h3>
            <p className="text-harbor leading-relaxed">
              By using beauty services booked through our Platform, you acknowledge and accept inherent risks associated with beauty treatments, including but not limited to allergic reactions, skin sensitivities, and individual results variability. You are responsible for communicating allergies, sensitivities, and health conditions to your chosen professional.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">7.5 Insurance</h3>
            <p className="text-harbor leading-relaxed">
              Beauty professionals on our platform are required to maintain their own professional liability insurance. Good Hands verifies insurance credentials during the vetting process but does not provide insurance coverage for services rendered.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">8. Indemnification</h2>
            <p className="text-harbor leading-relaxed">
              You agree to indemnify and hold Good Hands harmless from any claims, damages, losses, liabilities, and expenses arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">9. Dispute Resolution</h2>
            
            <h3 className="text-2xl font-serif mb-3 mt-6">9.1 Governing Law</h3>
            <p className="text-harbor leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law provisions. For users located in the European Union, mandatory consumer protection laws may also apply.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">9.2 Dispute Resolution Process</h3>
            <p className="text-harbor leading-relaxed mb-3">
              We encourage resolution through our customer support team first. Our dispute process:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-harbor">
              <li><strong>Contact Support:</strong> Reach out within 7 days of the issue</li>
              <li><strong>Internal Review:</strong> We investigate and respond within 5 business days</li>
              <li><strong>Mediation:</strong> If unresolved, we offer mediation with the professional</li>
              <li><strong>Arbitration:</strong> Binding arbitration as final resolution</li>
            </ol>

            <h3 className="text-2xl font-serif mb-3 mt-6">9.3 Arbitration Agreement</h3>
            <p className="text-harbor leading-relaxed">
              Any disputes not resolved through our internal process will be settled through binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. The arbitration will be conducted in English. Judgment on the award may be entered in any court of competent jurisdiction.
            </p>

            <h3 className="text-2xl font-serif mb-3 mt-6">9.4 Class Action Waiver</h3>
            <p className="text-harbor leading-relaxed">
              To the extent permitted by law, you agree to resolve disputes individually and waive any right to participate in class action lawsuits or class-wide arbitration against Good Hands.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">10. Changes to Terms</h2>
            <p className="text-harbor leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or prominent notice on our website. Continued use after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">11. Termination</h2>
            <p className="text-harbor leading-relaxed">
              We may terminate or suspend your access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4">12. Contact Information</h2>
            <div className="bg-shell p-6 rounded-lg space-y-4">
              <div>
                <p className="text-ink font-medium mb-1">General Inquiries</p>
                <p className="text-harbor"><strong>Email:</strong> hello@goodhands.pt</p>
              </div>
              <div>
                <p className="text-ink font-medium mb-1">Legal & Compliance</p>
                <p className="text-harbor"><strong>Email:</strong> legal@goodhands.pt</p>
              </div>
              <div>
                <p className="text-ink font-medium mb-1">Registered Agent (Delaware)</p>
                <p className="text-harbor text-sm">
                  Good Hands LLC<br />
                  Registered Agent: [Registered Agent Name]<br />
                  [Registered Agent Address]<br />
                  Wilmington, DE 19801
                </p>
              </div>
              <div>
                <p className="text-ink font-medium mb-1">Operations Office</p>
                <p className="text-harbor text-sm">
                  Good Hands<br />
                  Lisbon, Portugal
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gold/10 border-2 border-gold rounded-lg p-6 mt-8">
            <h3 className="text-2xl font-serif mb-3">Questions About Our Terms?</h3>
            <p className="text-harbor mb-4">
              We're here to help. Contact our team if you need clarification on anything in these Terms of Service.
            </p>
            <Link href="/book" className="text-gold hover:underline font-medium">
              Get in Touch →
            </Link>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-harbor/20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/privacy" className="text-gold hover:underline">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-gold hover:underline">
              Cookie Policy
            </Link>
            <Link href="/" className="text-gold hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

