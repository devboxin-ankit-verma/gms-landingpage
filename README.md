# GMS AI · Garage Master

Minimal, premium AI SaaS landing page for modern garages — by **Developer Box AI**.

## Design

- White / light gray UI · purple accent `#8B5CF6`
- **GSAP only** (no Framer Motion, no Three.js)
- Lenis smooth scroll
- Subtle animations — Apple / Linear / Notion / Stripe feel

## Stack

Next.js 16 · TypeScript · Tailwind CSS v4 · GSAP · Lenis · Shadcn (Radix) · Lucide

## Run

```bash
npm install
npm run dev
```

## EmailJS (Contact form)

Set these env vars (create `.env.local`):

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Sections

1. Minimal loader (skeleton + purple progress)
2. Hero — copy + circular AI feature orbit (GSAP rotation)
3. Feature scroll — PhonePe-style SVG storytelling (alternating L/R)
4. Problem cards (garage-specific)
5. Dashboard preview
6. Video block
7. Testimonials
8. Contact form
9. FAQ accordion
10. Footer — **by Developer Box AI**

```bash
npm run build
```
