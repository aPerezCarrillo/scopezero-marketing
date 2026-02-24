import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { client } from "@/sanity/client";

const token = process.env.SANITY_API_READ_TOKEN;

export async function GET(req: NextRequest) {
  if (!token) {
    return new Response("Missing SANITY_API_READ_TOKEN", { status: 401 });
  }

  const clientWithToken = client.withConfig({ token });
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(clientWithToken, req.url);

  if (!isValid) {
    return new Response("Invalid preview secret", { status: 401 });
  }

  (await draftMode()).enable();
  redirect(redirectTo);
}
