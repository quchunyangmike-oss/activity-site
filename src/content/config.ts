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
    age_range: z.string().optional(),
    organizer_wechat: z.string(),
    organizer_qr_image: z.string().optional(),
    organizer_name: z.string().optional(),
  }),
});

export const collections = { activities };
