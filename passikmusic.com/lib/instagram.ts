// Latest Instagram posts via a Behold.so JSON feed (env: INSTAGRAM_FEED_URL).
// Returns [] when not configured or on error, so the page falls back to static photos.

export interface InstaPost {
  id: string;
  permalink: string;
  image: string;
  alt: string;
}

interface BeholdPost {
  id: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl?: string;
  thumbnailUrl?: string;
  prunedCaption?: string;
  sizes?: { medium?: { mediaUrl: string }; large?: { mediaUrl: string } };
}

export async function getInstagramPosts(limit = 6): Promise<InstaPost[]> {
  const url = process.env.INSTAGRAM_FEED_URL;
  if (!url) return [];

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    const posts: BeholdPost[] = Array.isArray(data) ? data : data.posts ?? [];

    return posts
      .map((p) => ({
        id: p.id,
        permalink: p.permalink,
        image:
          p.sizes?.large?.mediaUrl ??
          p.sizes?.medium?.mediaUrl ??
          (p.mediaType === "VIDEO" ? p.thumbnailUrl : p.mediaUrl) ??
          "",
        alt: p.prunedCaption?.slice(0, 120) || "PASSIK on Instagram",
      }))
      .filter((p) => p.image)
      .slice(0, limit);
  } catch {
    return [];
  }
}
