import test from "node:test";import assert from "node:assert/strict";import{categories,packages}from"../src/manifest.js";
test("category exports match manifest",async()=>{for(const c of categories){const mod=await import(`@journey-to-code/open-suite/${c}`);for(const e of packages.filter(x=>x.category===c))assert.ok(e.namespace in mod,`${c} missing ${e.namespace}`);}});
