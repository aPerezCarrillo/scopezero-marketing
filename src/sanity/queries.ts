import { groq } from "next-sanity";

export const SITE_SETTINGS_QUERY = groq`*[_type == "siteSettings"][0]`;
export const HOME_PAGE_QUERY     = groq`*[_type == "homePage"][0]`;
export const ABOUT_PAGE_QUERY    = groq`*[_type == "aboutPage"][0]`;
export const CONTACT_PAGE_QUERY  = groq`*[_type == "contactPage"][0]`;
export const PRICING_PAGE_QUERY  = groq`*[_type == "pricingPage"][0]`;
