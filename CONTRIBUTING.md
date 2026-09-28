# Contributing

`open-suite` is an integration layer. Individual package behavior belongs in the
individual repositories.

When adding a package to the ecosystem:

1. Add it to `dependencies`.
2. Add it to `ecosystem.json`.
3. Add or regenerate the package wrapper.
4. Expose it from the appropriate category.
5. Ensure the import tests cover it.
6. Add a composition test when the package naturally works with another package.
7. Run:

```bash
npm run check
```

Do not silently replace individual package APIs inside `open-suite`.
