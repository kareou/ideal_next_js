import React from "react";
import Confirmation from "@/pages/Confirmation";
import { Metadata } from "next";
import axios from "axios";
import { redirect } from 'next/navigation'




export const metadata: Metadata = {
  title: "Confirmation Page | Ideal Tax",
};

async function page({ params }: { params: Promise<{ id: string }> }): Promise<any>  {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  let response = null;
  try {
    response = await axios.get(
      `https://cr-mend-points-eta.vercel.app/confirmation/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {}
  if (!response)
    return redirect('/404'); // Redirect to home if no data found
  return <Confirmation data={response.data} />;
}

export default page;
