
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import Index from "./pages/Index";
import IrsFreshStart from "./pages/IrsFreshStart";
import Services from "./pages/Services";
import FreeTaxConsultation from "./pages/FreeTaxConsultation";
import TaxPreparationService from "./pages/TaxPreparationService";
import TaxDebtRelief from "./pages/TaxDebtRelief";
import Careers from "./pages/Careers";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import SMSTermsConditions from "./pages/SMSTermsConditions";
import SalesAndRefunds from "./pages/SalesAndRefunds";
import Blog from "./pages/Blog";
import BlogPage2 from "./pages/BlogPage2";
import BlogPage3 from "./pages/BlogPage3";
import BlogPage4 from "./pages/BlogPage4";
import BlogPage5 from "./pages/BlogPage5";
import IrsForm3949A from "./pages/IrsForm3949A";
import QualifyingDependent from "./pages/QualifyingDependent";
import NoFederalTaxesWithheld from "./pages/NoFederalTaxesWithheld";
import IrsForms1099VsW9 from "./pages/IrsForms1099VsW9";
import IrsAcceptedReturnNotApproved from "./pages/IrsAcceptedReturnNotApproved";
import TaxLienForeclosure from "./pages/TaxLienForeclosure";
import TaxesOnStocks from "./pages/TaxesOnStocks";
import Form1040 from "./pages/Form1040";
import IrsForm4852 from "./pages/IrsForm4852";
import CryptoTaxes from "./pages/CryptoTaxes";
import IrsForm8949 from "./pages/IrsForm8949";
import CapitalGainsTax from "./pages/CapitalGainsTax";
import NftTaxGuide from "./pages/NftTaxGuide";
import WinLossStatementTaxes from "./pages/WinLossStatementTaxes";
import IrsForm4361 from "./pages/IrsForm4361";
import W9Form from "./pages/W9Form";
import IrsW4Form from "./pages/IrsW4Form";
import W2Form from "./pages/W2Form";
import Irs1099Form from "./pages/Irs1099Form";
import IrsForm9465 from "./pages/IrsForm9465";
import IrsForm1116 from "./pages/IrsForm1116";
import IrsForm2848 from "./pages/IrsForm2848";
import WorkOpportunityCredit from "./pages/WorkOpportunityCredit";
import ResidentialEnergyCredit from "./pages/ResidentialEnergyCredit";
import NotFound from "./pages/NotFound";
import AmendingTaxReturns from "./pages/services/AmendingTaxReturns";
import AssetProtection from "./pages/services/AssetProtection";
import BackTaxes from "./pages/services/BackTaxes";
import BankLevy from "./pages/services/BankLevy";
import CurrentlyNonCollectible from "./pages/services/CurrentlyNonCollectible";
import InnocentSpouseRelief from "./pages/services/InnocentSpouseRelief";
import InstallmentAgreements from "./pages/services/InstallmentAgreements";
import OfferInCompromise from "./pages/services/OfferInCompromise";
import PenaltyAbatement from "./pages/services/PenaltyAbatement";
import Seizure from "./pages/services/Seizure";
import TaxAudits from "./pages/services/TaxAudits";
import TaxLienSubordination from "./pages/services/TaxLienSubordination";
import TrustFundRecoveryPenalty from "./pages/services/TrustFundRecoveryPenalty";
import WageGarnishments from "./pages/services/WageGarnishments";
import IdealTaxProtectionPlan from "./pages/services/IdealTaxProtectionPlan";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* START ROUTES TO UPDATE */ }
          <Route path="/form-940" element={<Navigate to="/" replace />} />
          <Route path="/form-941" element={<Navigate to="/" replace />} />
          <Route path="/mw507" element={<Navigate to="/" replace />} />
          <Route path="/w9-form" element={<Navigate to="/" replace />} />
          <Route path="/fica-taxes" element={<Navigate to="/" replace />} />
          <Route path="/author/victoriaward" element={<Navigate to="/" replace />} />
          <Route path="/g4-form" element={<Navigate to="/" replace />} />
          <Route path="/adoption-credit" element={<Navigate to="/" replace />} />
          <Route path="/tax-levy" element={<Navigate to="/" replace />} />
          <Route path="/irs-scams" element={<Navigate to="/" replace />} />
          <Route path="/robinhood-taxes" element={<Navigate to="/" replace />} />
          <Route path="/payroll-deductions" element={<Navigate to="/" replace />} />
          <Route path="/contact-us3" element={<Navigate to="/" replace />} />
          <Route path="/147c-letter" element={<Navigate to="/" replace />} />
          <Route path="/schedule-appointment" element={<Navigate to="/" replace />} />
          <Route path="/employment-taxes-pastors" element={<Navigate to="/" replace />} />
          <Route path="/irs-form-1310" element={<Navigate to="/" replace />} />
          <Route path="/irs-form-720" element={<Navigate to="/" replace />} />
          <Route path="/irs-form-56" element={<Navigate to="/" replace />} />
          <Route path="/irs-code-766" element={<Navigate to="/" replace />} />
          <Route path="/irs-form-6166" element={<Navigate to="/" replace />} />
          <Route path="/irs-form-8919" element={<Navigate to="/" replace />} />
          <Route path="/irs-form-8821" element={<Navigate to="/" replace />} />
          <Route path="/irs-form-843" element={<Navigate to="/" replace />} />
          <Route path="/congratulations-from-giovanni" element={<Navigate to="/" replace />} />
          <Route path="/category/tax-preparation" element={<Navigate to="/" replace />} />
          <Route path="/category" element={<Navigate to="/" replace />} />
          <Route path="/irs-form-2555" element={<Navigate to="/" replace />} />
          <Route path="/pre-tax-deduction" element={<Navigate to="/" replace />} />
          <Route path="/taxes-on-stocks" element={<Navigate to="/" replace />} />
          <Route path="/legal-order-lts" element={<Navigate to="/" replace />} />
          <Route path="/audited-found-guilty" element={<Navigate to="/" replace />} />
          <Route path="/category/*" element={<Navigate to="/" replace />} />
          <Route path="/irs-audit-attorney" element={<Navigate to="/" replace />} />
          <Route path="/570-irs-code" element={<Navigate to="/" replace />} />
          <Route path="/biggest-tax-refund" element={<Navigate to="/" replace />} />
          <Route path="/legal-order-lts" element={<Navigate to="/" replace />} />
          <Route path="/irs-form-5564" element={<Navigate to="/" replace />} />
          <Route path="/irs-form-2210" element={<Navigate to="/" replace />} />
          <Route path="/w2-vs-w4" element={<Navigate to="/" replace />} />
          <Route path="/846-irs-code" element={<Navigate to="/" replace />} />
          <Route path="/tax-relief-attorney" element={<Navigate to="/" replace />} />
          <Route path="/tax-settlement-services" element={<Navigate to="/" replace />} />
          {/* END ROUTES TO UPDATE */ }
          <Route path="/irs-fresh-start-program" element={<IrsFreshStart/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/free-tax-consultation" element={<FreeTaxConsultation />} />
          <Route path="/tax-preparation-service" element={<TaxPreparationService />} />
          <Route path="/tax-debt-relief-irs-forgiveness-programv0" element={<TaxDebtRelief />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/sms-terms-conditions" element={<SMSTermsConditions />} />
          <Route path="/sales-and-refunds" element={<SalesAndRefunds />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/2" element={<BlogPage2 />} />
          <Route path="/blog/3" element={<BlogPage3 />} />
          <Route path="/blog/4" element={<BlogPage4 />} />
          <Route path="/blog/5" element={<BlogPage5 />} />
          <Route path="/irs-form-3949-a" element={<IrsForm3949A />} />
          <Route path="/qualifying-dependent" element={<QualifyingDependent />} />
          <Route path="/no-federal-taxes-withheld" element={<NoFederalTaxesWithheld />} />
          <Route path="/irs-forms-1099-vs-w9" element={<IrsForms1099VsW9 />} />
          <Route path="/irs-accepted-return-not-approved" element={<IrsAcceptedReturnNotApproved />} />
          <Route path="/tax-lien-foreclosure" element={<TaxLienForeclosure />} />
          {/* <Route path="/taxes-on-stocks" element={<TaxesOnStocks />} /> */}
          <Route path="/form-1040" element={<Form1040 />} />
          {/* <Route path="/irs-form-4852" element={<IrsForm4852 />} /> */}
          <Route path="/crypto-taxes" element={<CryptoTaxes />} />
          {/* <Route path="/irs-form-8949" element={<IrsForm8949 />} /> */}
          <Route path="/capital-gains-tax" element={<CapitalGainsTax />} />
          <Route path="/nft-tax-guide" element={<NftTaxGuide />} />
          <Route path="/win-loss-statement-taxes" element={<WinLossStatementTaxes />} />
          <Route path="/irs-form-4361" element={<IrsForm4361 />} />
          {/* <Route path="/w9-form" element={<W9Form />} /> */}
          <Route path="/irs-w4-form-explained" element={<IrsW4Form />} />
          <Route path="/w-2-form" element={<W2Form />} />
          <Route path="/irs-1099-form" element={<Irs1099Form />} />
          <Route path="/irs-form-9465" element={<IrsForm9465 />} />
          <Route path="/irs-form-1116" element={<IrsForm1116 />} />
          <Route path="/irs-form-2848" element={<IrsForm2848 />} />
          <Route path="/work-opportunity-credit" element={<WorkOpportunityCredit />} />
          <Route path="/residential-energy-credit" element={<ResidentialEnergyCredit />} />
          <Route path="/services/amending-tax-returns" element={<AmendingTaxReturns />} />
          <Route path="/services/asset-protection" element={<AssetProtection />} />
          <Route path="/services/back-taxes" element={<BackTaxes />} />
          <Route path="/services/bank-levy" element={<BankLevy />} />
          <Route path="/services/currently-non-collectible-status" element={<CurrentlyNonCollectible />} />
          <Route path="/services/innocent-spouse-tax-relief" element={<InnocentSpouseRelief />} />
          <Route path="/services/installment-agreements-irs-payment-plans" element={<InstallmentAgreements />} />
          <Route path="/services/offer-in-compromise" element={<OfferInCompromise />} />
          <Route path="/services/penalty-abatement" element={<PenaltyAbatement />} />
          <Route path="/services/seizure" element={<Seizure />} />
          <Route path="/services/tax-audits" element={<TaxAudits />} />
          <Route path="/services/tax-lien-subordination" element={<TaxLienSubordination />} />
          <Route path="/services/trust-fund-recovery-penalty" element={<TrustFundRecoveryPenalty />} />
          <Route path="/services/wage-garnishments" element={<WageGarnishments />} />
          <Route path="/services/ideal-tax-protection-plan" element={<IdealTaxProtectionPlan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
