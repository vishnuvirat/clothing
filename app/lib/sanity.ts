import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "ztiiw77f",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
