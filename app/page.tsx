"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PollutionWithSolution() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800">
      <header className="text-center py-10 bg-green-700 text-white shadow-md">
        <h1 className="text-4xl font-bold">🌿 Pollution with Solution</h1>
        <p className="text-lg mt-2">Pollution License & Dispute Consultancy</p>
        <p className="text-sm mt-1 opacity-90">GSTIN: 19BRTPG2899G1Z0</p>
      </header>

      <section className="max-w-6xl mx-auto p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Welcome</h2>
          <p>
            Welcome to <b>Pollution with Solution</b>, your trusted partner in environmental compliance and pollution
            control licensing across West Bengal. With over 20 years of experience, we specialize in helping industries,
            factories, and commercial units obtain mandatory pollution licenses and resolve regulatory disputes with
            precision and care.
          </p>

          <div className="mt-6 bg-green-100 border-l-4 border-green-700 p-4 rounded-md">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Mandatory for Whom?</h3>
            <p className="mb-3">
              A pollution license for business in West Bengal is mandatory for any entity that falls under the following
              categories:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Factories emitting smoke or airborne particulates</li>
              <li>Industrial units releasing wastewater or hazardous liquids</li>
              <li>Commercial units generating bio-medical or e-waste</li>
              <li>Real estate projects exceeding specified development limits</li>
              <li>Chemical processing and storage facilities</li>
            </ul>
            <p className="mt-3 text-gray-700">
              Whether you’re starting a new factory or scaling an existing plant, securing a WBPCB license in West Bengal
              is not optional—it’s a legal necessity. Without it, you cannot obtain power connections, insurance clearances,
              or fire safety approvals.
            </p>
          </div>

          <div className="mt-10 bg-green-50 border-l-4 border-green-600 p-4 rounded-md">
            <h3 className="text-xl font-semibold text-green-800 mb-2">📜 Application Process for Pollution (CTE/CTO/HWA/BMW)</h3>
            <p className="mb-4">
              Acquiring a pollution license for a business in West Bengal involves several procedural steps. Each step is monitored by the WBPCB, and accuracy at every stage is crucial to avoid rejections or delays.
            </p>
            <h4 className="font-bold text-green-700 mt-3">Step 1: Online Registration with WBPCB</h4>
            <p>Register your industry on the WBPCB’s online portal by creating a business profile, selecting the industrial sector, and filling out the required form (CTE/CTO).</p>
            <h4 className="font-bold text-green-700 mt-3">Step 2: Submission of Documentation</h4>
            <p>Upload essential documents including land ownership papers, layout plans, pollution control details with detailed project report, and statutory consents. Ensure they are updated regularly.</p>
            <h4 className="font-bold text-green-700 mt-3">Step 3: Environmental Management Plan (EMP)</h4>
            <p>Prepare an EMP detailing anticipated environmental impacts and mitigation strategies. It’s mandatory for high-emission or large-scale projects.</p>
            <h4 className="font-bold text-green-700 mt-3">Step 4: Technical Scrutiny and Site Inspection</h4>
            <p>The WBPCB evaluates submissions, inspects your site, collects samples (if necessary), and verifies compliance measures.</p>
            <h4 className="font-bold text-green-700 mt-3">Step 5: Issuance of License or NOC</h4>
            <p>Once verified, the board grants the license digitally. Renewal must be applied for at least 120 days before expiry to avoid disruptions.</p>
          </div>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-3">✅ Our Core Services</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li><b>Consent to Establish (CTE):</b> Approval before setting up your industrial unit.</li>
                <li><b>Consent to Operate (CTO):</b> Post-setup operational clearance.</li>
                <li><b>Environmental Clearance (EC):</b> For large-scale projects under EIA Notification.</li>
                <li><b>Hazardous Waste Authorization & Annual Return Filing:</b> Compliance with Hazardous Waste Rules, 2016.</li>
                <li><b>Bio-Medical Waste Licence:</b> For hospitals, labs, and diagnostic centers.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-3">♻️ EPR Services</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>Plastic Waste Management</li>
                <li>Battery Waste Management</li>
                <li>E-Waste Management</li>
                <li>Annual Return Filing</li>
                <li>EPR registration and credit</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-3">🏭 Factory Licence Assistance</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>Site plan approvals</li>
                <li>Safety and health compliance</li>
                <li>Liaison with Labour Department</li>
                <li>Renewal and amendment support</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-3">⚖️ Pollution Dispute Consultancy</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>Legal representation and advisory</li>
                <li>Response drafting to show-cause notices</li>
                <li>Appeal filing and hearing preparation</li>
                <li>Mediation with regulatory bodies</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">🌟 Our Happy Clients</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Pran Food and Beverages", "Exide Industries", "Star Battery Ltd", "Ardex Endura", "LRV & Sons Pvt. Ltd", "Mageba Bridge Products Pvt. Ltd", "Livepure Pvt. Ltd", "Calderys Steel Casting India Pvt. Ltd", "Kolkata Doodh", "Aloka Oil Industry", "KDL Supply Chain Solutions Pvt. Ltd"].map((client) => (
              <motion.div key={client} whileHover={{ scale: 1.05, rotate: 1 }} transition={{ type: "spring", stiffness: 200 }}>
                <Card className="shadow-md border border-green-100 hover:shadow-lg hover:bg-green-50 transition-all">
                  <CardContent className="p-5 text-center font-medium text-green-800">{client}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">📋 Why Choose Us?</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>20+ years of industry experience</li>
            <li>Strong liaison with WBPCB, CPCB, SEIAA, and MoEFCC</li>
            <li>Transparent pricing and structured process</li>
            <li>Fast turnaround and personalized support</li>
            <li>Trusted by leading industrial brands</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">🏭 Industry Categories We Serve</h2>
          <table className="w-full border border-green-200 rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-green-100">
              <tr>
                <th className="p-2">Category</th>
                <th className="p-2">Description</th>
                <th className="p-2">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-green-50">
                <td className="p-2">🔴 Red Category</td>
                <td className="p-2">High pollution potential</td>
                <td className="p-2">Chemical plants, tanneries, dyeing units</td>
              </tr>
              <tr className="border-t hover:bg-green-50">
                <td className="p-2">🟠 Orange Category</td>
                <td className="p-2">Moderate pollution potential</td>
                <td className="p-2">Food processing, plastic manufacturing</td>
              </tr>
              <tr className="border-t hover:bg-green-50">
                <td className="p-2">🟢 Green Category</td>
                <td className="p-2">Low pollution potential</td>
                <td className="p-2">Assembly units, bakery, garment stitching</td>
              </tr>
              <tr className="border-t hover:bg-green-50">
                <td className="p-2">⚪ White Category</td>
                <td className="p-2">Practically non-polluting</td>
                <td className="p-2">Software parks, education institutes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">📞 Contact Us</h2>
          <p>
            <b>Pollution with Solution</b><br />
            156/5, B.T. Road, Dunlop, Kolkata – 700108 <br />
            📍 Landmark: Baranagar Metro Station & Dunlop Gurudwara <br />
            📱 +91-9007550009 <br />
            📧 pollutionwithsolution@gmail.com <br />
            🌐 <i>pollutionwithsolution.in</i>
          </p>
          <Button className="mt-4 bg-green-600 hover:bg-green-700">Get in Touch</Button>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} Pollution with Solution | All Rights Reserved
      </footer>
    </div>
  );
}
