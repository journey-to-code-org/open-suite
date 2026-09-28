# AI agent guidance

This repository is the integration contract for the Journey to Code package ecosystem.

Rules:

- Do not reimplement behavior owned by an individual package.
- Keep wrappers as thin re-exports.
- Every dependency listed in `ecosystem.json` must be import-tested.
- Every package should have a direct `open-suite/<subpath>` export.
- Package namespaces must remain collision-free and backwards compatible.
- CLI/developer tooling belongs under the `dev` category.
- Add composition tests when adding packages that naturally interoperate.
- Run `npm run check` before proposing completion.
