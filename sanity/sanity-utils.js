import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getHomeData() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "home"]{
      _id,
      _createdAt,
      bannerHead,
     sectionHead,
      stats[],
      slider[],
      services[],
      whoWeWork[],
      skills[],
      gallery[],
      platforms[],
      slc,
      partnerships[],
      cta,
    }`
  );
}

export async function getAboutData() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about"]{
      _id,
      _createdAt,
      aboutSection,
      blockSection,
      sectionTwo[],
    }`
  );
}

export async function getWhatWeDoData() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "whatWeDo"]{
      _id,
      _createdAt,
      programs[],
      caseStudies[],
    }`
  );
}

export async function getHowWeDoData() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "howWeDo"]{
      _id,
      _createdAt,
      head,
      tagline,
      process[],
      whyChoose[],
    }`
  );
}

export async function getUnispark() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "unispark"]{
      _id,
      _createdAt,
      bannerHead,
      bannerTag,
      bannerImage,
      sectionImage,
      sectionDescription,
      curriculum[],
      perks[],
      learningPath[],
      placement[],
      benefits[], 
    }`
  );
}
