import { defineCollection, z } from 'astro:content';

const activities = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    price: z.number(),
    capacity: z.number(),
    spots_remaining: z.number(),
    spots_updated: z.string(),
    status: z.enum(['open', 'full', 'cancelled']),
    cover_image: z.string(),
    qr_image: z.string(),
    qr_type: z.enum(['alipay', 'wechat']),
    organizer_wechat: z.string(),
  }),
});

export const collections = { activities };
