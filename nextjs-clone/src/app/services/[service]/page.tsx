import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { Metadata } from 'next';

export async function generateMetadata({ 
  params 
}: { 
  params: { service: string } 
}): Promise<Metadata> {
  const { service } = await params;
  
  if (!serviceComponentMap[service]) {
    return {
      title: "Service Not Found | Ideal Tax",
      description: "The requested service could not be found."
    };
  }

  try {
    const componentName = serviceComponentMap[service];
    const module = await import(`../../../pages/services/${componentName}`);
    
    // Return the metadata from the component file
    return module.metadata || {
      title: "Tax Services | Ideal Tax",
      description: "Professional tax resolution services"
    };
  } catch (error) {
    console.error(`Failed to load metadata for service: ${service}`, error);
    return {
      title: "Tax Services | Ideal Tax",
      description: "Professional tax resolution services"
    };
  }
}
// Map of service slugs to component names
const serviceComponentMap: Record<string, string> = {
  'amending-tax-returns': 'AmendingTaxReturns',
  'asset-protection': 'AssetProtection',
  'back-taxes': 'BackTaxes',
  'bank-levy': 'BankLevy',
  'currently-non-collectible-status': 'CurrentlyNonCollectible',
  'innocent-spouse-tax-relief': 'InnocentSpouseRelief',
  'installment-agreements-irs-payment-plans': 'InstallmentAgreements',
  'offer-in-compromise': 'OfferInCompromise',
  'penalty-abatement': 'PenaltyAbatement',
  'seizure': 'Seizure',
  'tax-audits': 'TaxAudits',
  'tax-lien-subordination': 'TaxLienSubordination',
  'trust-fund-recovery-penalty': 'TrustFundRecoveryPenalty',
  'wage-garnishments': 'WageGarnishments',
  'ideal-tax-protection-plan': 'IdealTaxProtectionPlan',
};

// Dynamic import function
async function getServiceComponent(serviceSlug: string) {
  const componentName = serviceComponentMap[serviceSlug];
  
  if (!componentName) {
    return null;
  }

  try {
    const module = await import(`../../../pages/services/${componentName}`);

    return module.default

  } catch (error) {
    console.error(`Failed to load component for service: ${serviceSlug}`, error);
    return null;
  }
}

// Loading component
function ServiceLoading() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f8fcff] via-white to-[#eaf6fa] flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-[#e0f2fe] p-8 md:p-12 mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Error component
function ServiceError() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f8fcff] via-white to-[#eaf6fa] flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-[#e0f2fe] p-8 md:p-12 mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600">
            The requested service could not be found. Please check the URL and try again.
          </p>
        </div>
      </div>
    </div>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: { service: string };
}) {
  const { service } = await params;
  
  // Check if service exists in our map
  if (!serviceComponentMap[service]) {
    return notFound();
  }

  // Get the component dynamically
  const ServiceComponent = await getServiceComponent(service);


  if (!ServiceComponent) {
    return <ServiceError />;
  }



  return (
    <Suspense fallback={<ServiceLoading />}>
      <ServiceComponent />
    </Suspense>
  );
}
