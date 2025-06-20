
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

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
  console.log("=== Function called ===");
  console.log("Method:", req.method);
  console.log("URL:", req.url);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling CORS preflight");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("=== Starting main handler ===");
    
    // Check if request body exists
    console.log("Checking request body...");
    let values: DemoRequestValues;
    
    try {
      values = await req.json();
      console.log("Successfully parsed JSON:", { 
        hasName: !!values.name, 
        hasEmail: !!values.email 
      });
    } catch (jsonError) {
      console.error("Failed to parse JSON:", jsonError);
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request body" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate required fields
    if (!values.name || !values.email) {
      console.error("Missing required fields:", { name: values.name, email: values.email });
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    console.log("=== Checking API key ===");
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      console.error("RESEND_API_KEY not found in environment variables");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    console.log("API key found, length:", apiKey.length);

    console.log("=== Initializing Resend ===");
    let resend;
    try {
      resend = new Resend(apiKey);
      console.log("Resend initialized successfully");
    } catch (resendError) {
      console.error("Failed to initialize Resend:", resendError);
      return new Response(
        JSON.stringify({ error: "Failed to initialize email service" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("=== Sending email ===");
    const emailData = {
      from: "Zyglio Demo Requests <onboarding@resend.dev>",
      to: ["jmerril@mac.com"],
      subject: `New Demo Request from ${values.name}`,
      html: `
        <h2>New Demo Request Received</h2>
        <p><strong>Name:</strong> ${values.name}</p>
        <p><strong>Email:</strong> ${values.email}</p>
        <p><strong>Industry:</strong> ${values.industry || 'Not specified'}</p>
        <p><strong>Role:</strong> ${values.role || 'Not specified'}</p>
        <p><strong>Current Training Method:</strong> ${values.currentMethod || 'Not specified'}</p>
        <p><strong>Comments:</strong></p>
        <p>${values.comments || 'No comments provided'}</p>
        
        <hr>
        <p>This request was submitted through the Zyglio website demo form.</p>
      `,
    };

    console.log("Email data prepared:", { 
      from: emailData.from, 
      to: emailData.to, 
      subject: emailData.subject 
    });

    let emailResponse;
    try {
      emailResponse = await resend.emails.send(emailData);
      console.log("Email sent successfully:", emailResponse);
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      console.error("Email error details:", {
        name: emailError.name,
        message: emailError.message,
        cause: emailError.cause
      });
      return new Response(
        JSON.stringify({ 
          error: "Failed to send email",
          details: emailError.message
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("=== Success ===");
    return new Response(JSON.stringify({ 
      success: true, 
      emailId: emailResponse.data?.id,
      message: "Demo request submitted successfully"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("=== UNEXPECTED ERROR ===");
    console.error("Error:", error);
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    console.error("Error cause:", error.cause);
    
    return new Response(
      JSON.stringify({ 
        error: "An unexpected error occurred",
        message: error.message || "Unknown error",
        type: error.name || "Unknown"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
