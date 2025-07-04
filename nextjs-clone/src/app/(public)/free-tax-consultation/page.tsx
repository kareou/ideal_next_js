import React from 'react'
import FreeTaxConsultation from '@/pages/FreeTaxConsultation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Call Us For Your Free Tax Consultation Today! - Ideal Tax',
  description:
    'Are you ready to meet with a licensed tax professional, completely free of charge to ask them all of your burning questions about taxes? Get your free consultation today',
}

function page() {
  return <FreeTaxConsultation />
}

export default page