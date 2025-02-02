import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
export async function middleware(request: NextRequest) {
  console.log('Running middleware for /company/dashboard/* routes');
  // Get the token from cookies. In Next.js middleware, the cookie value is accessed via the `value` property.
  const supabase = await createClient();
  const tokenCookie = request.cookies.get('sb-access-token');
  const token = tokenCookie?.value;

  // If no token is present, redirect to the login page.
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Validate the token with Supabase by retrieving the user.
  const { data: { user }, error: authError } = await supabase.auth.getUser(token);
  if (authError || !user) {
    return NextResponse.redirect(new URL('/auth/', request.url));
  }

  // (Optional) Verify that a profile exists in your "profiles" table for this user.
  // This assumes that the "profiles" table has a "user_id" column referencing the auth.users.id.
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('id')
    .eq('user_id', user.id)
    .maybeSingle();

  if (profileError || !profile) {
    // If the profile does not exist, you might want to redirect to an onboarding page.
    return NextResponse.redirect(new URL('/auth/onboarding', request.url));
  }

  // If everything is valid, allow access to the protected route.
  return NextResponse.next();
}

// This configuration tells Next.js to run this middleware on all routes starting with "/company/dashboard"
export const config = {
  matcher: ['/company/dashboard/'],
};