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
      services[] {
        title,
        "icon": icon.asset->url,
      },
      whowework[]{
        title,
        description,
        "image": image.asset->url,
      },
      skills[]{
        title,
        "image":image.asset->url,
      },
      gallery[]{
        caption,
        "image":image.asset->url,
      },
      platforms[]{
        "image":image.asset->url,
        caption,
      },
      slc,
      partnerships[]{
        "image":image.asset->url,
        caption,
      },
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
      tagline,
      sectionTwo[]{
        title,
        description,
        "image":image.asset->url,
      },
    }`
  );
}

export async function getWhatWeDoData() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "whatwedo"]{
      _id,
      _createdAt,
      programs[]{
        title,
        "icon":icon.asset->url,
        "image":image.asset->url,
        description,
      },
      caseStudies[]{
        title,
        "logo":logo.asset->url,
        description,
        link,
      },
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
      process[]{
        title,
        "icon":icon.asset->url,
        description,
      },
      whyChoose[]{
        title,
        description,
        "image":image.asset->url,
      },
    }`
  );
}

export async function getUnisparkData() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "unispark"]{
      _id,
      _createdAt,
      bannerHead,
      bannerTag,
      "bannerImage":bannerImage.asset->url,
      "sectionImage":sectionImage.asset->url,
      sectionDescription,
      curriculum[]{
        description,
      },
      perks[]{
        title,
        "icon":icon.asset->url,
        description,
      },
      certificates[]{
        title,
        "image":image.asset->url,

      },
      learningPath[]{
        title,
        description,
        "icon":icon.asset->url,
        hours,
        innerDescription[]{
          title,
          description,

        },
      },
      placement[]{
        title,
        "logo":logo.asset->url,
      },
      benefits[]{
        title,
        "icon":icon.asset->url,
        description,
      },
    }`
  );
}
