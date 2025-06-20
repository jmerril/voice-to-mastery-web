
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DemoRequestValues {
  name: string;
  email: string;
  industry: string;
  role: string;
  currentMethod: string;
  comments: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const values: DemoRequestValues = await req.json();
    console.log("Received demo request:", values);

    // Send email to jmerril@mac.com
    const emailResponse = await resend.emails.send({
      from: "Zyglio Demo Requests <onboarding@resend.dev>",
      to: ["jmerril@mac.com"],
      subject: `New Demo Request from ${values.name}`,
      html: `
        <h2>New Demo Request Received</h2>
        <p><strong>Name:</strong> ${values.name}</p>
        <p><strong>Email:</strong> ${values.email}</p>
        <p><strong>Industry:</strong> ${values.industry}</p>
        <p><strong>Role:</strong> ${values.role}</p>
        <p><strong>Current Training Method:</strong> ${values.currentMethod}</p>
        <p><strong>Comments:</strong></p>
        <p>${values.comments}</p>
        
        <hr>
        <p>This request was submitted through the Zyglio website demo form.</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
