# Lessons Learned

## [2026-03-17] Prisma 7 breaking change — datasource URL moved to prisma.config.ts
- **Mistake**: Installed latest Prisma (v7) which removed `url` from schema.prisma
- **Root cause**: npm resolved `^5.x` to latest major (v7) due to caret range
- **Rule**: Pin Prisma with exact version or `~5.x` range; always check installed version vs planned version
