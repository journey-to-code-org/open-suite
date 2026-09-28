import test from "node:test";import assert from "node:assert/strict";import{readFile}from"node:fs/promises";import{packageCount,packages,getPackage,getPackagesByCategory}from"../src/manifest.js";const pkg=JSON.parse(await readFile(new URL("../package.json",import.meta.url),"utf8"));
test("manifest matches dependencies",()=>{assert.equal(packageCount,packages.length);assert.deepEqual([...new Set(packages.map(e=>e.name))].sort(),Object.keys(pkg.dependencies).sort());});
test("subpaths unique",()=>assert.equal(new Set(packages.map(e=>e.subpath)).size,packages.length));
test("helpers work",()=>{assert.equal(getPackage("@journey-to-code/array-chunk")?.category,"arrays");assert.ok(getPackagesByCategory("dates").length>0);});
