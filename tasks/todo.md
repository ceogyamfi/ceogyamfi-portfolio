# Current Task: Initial scaffold complete

## Plan
- [x] Phase 1: Next.js 14 app + all deps + base config
- [x] Phase 2: Prisma schema (Project, BlogPost, Message) + seed
- [x] Phase 3: NextAuth admin auth (credentials + bcrypt)
- [x] Phase 4: Public pages (home, projects, blog, contact)
- [x] Phase 5: Contact server action (Zod + Prisma + Resend)
- [x] Phase 6: Admin CMS (CRUD for projects, blog, messages)
- [x] Phase 7: Polish (loading, error, not-found, sitemap, robots)

## Next Steps
- [ ] Set up NeonDB and fill in `.env.local`
- [ ] Run `npx prisma migrate dev --name init`
- [ ] Run `npx prisma db seed`
- [ ] Verify dev server at http://localhost:3000
- [ ] Set `ADMIN_PASSWORD_HASH` using bcryptjs
- [ ] Configure Resend API key and email addresses
- [ ] Deploy to Vercel

## Review
- What worked: clean phased scaffold, full-stack coverage in one session
- What to improve: consider adding image upload via Cloudinary or similar
