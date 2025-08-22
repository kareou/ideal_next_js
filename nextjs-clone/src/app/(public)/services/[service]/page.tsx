import { notFound } from 'next/navigation';
import { Suspense } from 'react';

// Import all service components statically
import AmendingTaxReturns from '../../../../pages/services/AmendingTaxReturns';
import AssetProtection from '../../../../pages/services/AssetProtection';
import BackTaxes from '../../../../pages/services/BackTaxes';
import BankLevy from '../../../../pages/services/BankLevy';
import CurrentlyNonCollectible from '../../../../pages/services/CurrentlyNonCollectible';
import InnocentSpouseRelief from '../../../../pages/services/InnocentSpouseRelief';
import InstallmentAgreements from '../../../../pages/services/InstallmentAgreements';
import OfferInCompromise from '../../../../pages/services/OfferInCompromise';
import PenaltyAbatement from '../../../../pages/services/PenaltyAbatement';
import Seizure from '../../../../pages/services/Seizure';
import TaxAudits from '../../../../pages/services/TaxAudits';
import TaxLienSubordination from '../../../../pages/services/TaxLienSubordination';
import TrustFundRecoveryPenalty from '../../../../pages/services/TrustFundRecoveryPenalty';
import WageGarnishments from '../../../../pages/services/WageGarnishments';
import IdealTaxProtectionPlan from '../../../../pages/services/IdealTaxProtectionPlan';

// Map slugs to components
const serviceComponentMap: Record<string, React.FC> = {
  'amending-tax-returns': AmendingTaxReturns,
  'asset-protection': AssetProtection,
  'back-taxes': BackTaxes,
  'bank-levy': BankLevy,
  'currently-non-collectible-status': CurrentlyNonCollectible,
  'innocent-spouse-tax-relief': InnocentSpouseRelief,
  'installment-agreements-irs-payment-plans': InstallmentAgreements,
  'offer-in-compromise': OfferInCompromise,
  'penalty-abatement': PenaltyAbatement,
  'seizure': Seizure,
  'tax-audits': TaxAudits,
  'tax-lien-subordination': TaxLienSubordination,
  'trust-fund-recovery-penalty': TrustFundRecoveryPenalty,
  'wage-garnishments': WageGarnishments,
  'ideal-tax-protection-plan': IdealTaxProtectionPlan,
};

// Loading component
function ServiceLoading() {
  return <div>Loading...</div>;
}

// Error component
function ServiceError() {
  return <div>Service not found</div>;
}

// ✅ Mark this function as async and destructure params
export default async function ServiceDetailPage({
  params,
}: {
  params: { service: string };
}) {
  // Await params
  const { service } = await params;

  const ServiceComponent = serviceComponentMap[service];

  if (!ServiceComponent) {
    return <ServiceError />;
  }

  return (
    <Suspense fallback={<ServiceLoading />}>
      <ServiceComponent />
    </Suspense>
  );
}
