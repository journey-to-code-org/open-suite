# open-suite

One install for the Journey to Code open utility ecosystem.

`@journey-to-code/open-suite` aggregates **72 packages** behind a stable,
collision-free namespace API and explicitly tests that every included package can
be imported both directly and through the suite.

## Install

```bash
npm install @journey-to-code/open-suite
```

## Root namespaces

```js
import {
  arrays,
  dates,
  data,
  text,
  validation,
  web
} from "@journey-to-code/open-suite";

arrays.arrayChunk.chunkArray([1, 2, 3, 4], 2);
text.stringCase.titleCase("release_status");
data.jsonFlatten.flattenObject({ user: { name: "Mikey" } });
validation.isUrl.isUrl("https://example.com");
```

Every package is also exposed directly from the root as a namespace:

```js
import {
  arrayChunk,
  jsonFlatten,
  relativeTime
} from "@journey-to-code/open-suite";
```

## Tree-friendly subpaths

```js
import { chunkArray } from "@journey-to-code/open-suite/array-chunk";
import { geoDistance } from "@journey-to-code/open-suite/geo-distance";
```

Category subpaths are available too:

```js
import * as dates from "@journey-to-code/open-suite/dates";
import * as validation from "@journey-to-code/open-suite/validation";
```

Developer tooling is isolated under:

```js
import * as dev from "@journey-to-code/open-suite/dev";
```

Normal application code does not import those tools unless explicitly requested.

## Ecosystem manifest

```js
import {
  packages,
  packageCount,
  getPackage,
  getPackagesByCategory
} from "@journey-to-code/open-suite/manifest";
```

The source repository also includes `ecosystem.json` for tooling and documentation.

## Verification

```bash
npm run verify-packages
npm test
npm run check
```

`verify-packages` checks that:

- every ecosystem package appears in `dependencies`;
- every declared ecosystem dependency appears in `ecosystem.json`;
- every package can actually be imported.

The test suite additionally checks:

- every `open-suite/<package>` subpath;
- every category namespace;
- representative cross-package composition workflows.

## Philosophy

The small packages remain independently installable. `open-suite` does not replace
them—it provides a convenient umbrella install and an integration contract proving
that the ecosystem works together.

## License

MIT
