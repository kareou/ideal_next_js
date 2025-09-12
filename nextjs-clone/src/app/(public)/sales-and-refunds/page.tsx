import React from 'react'
import SalesAndRefunds from '@/pages/SalesAndRefunds'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sales 2 - Ideal Tax',
  description:
    "Sales and Refunds Any Client seeking a refund or cancellation of their contract must do so in writing within 48 hours of the signing of their contract.Clients agree to respond promptly and fully, within ten (10) days, of Ideal Tax request for information or documents. If Client fails to respond to Ideal Tax's requests for",
}

function page() {
  return (
    <SalesAndRefunds />
  )
}

export default page