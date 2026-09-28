import { readFile } from "node:fs/promises";
const pkg=JSON.parse(await readFile(new URL("../package.json",import.meta.url),"utf8"));
const eco=JSON.parse(await readFile(new URL("../ecosystem.json",import.meta.url),"utf8"));
const declared=new Set(Object.keys(pkg.dependencies??{}));
const expected=new Set(eco.packages.map(e=>e.name));
const missing=[...expected].filter(n=>!declared.has(n));
const extra=[...declared].filter(n=>!expected.has(n));
if(missing.length||extra.length){console.error({missing,extra});process.exit(1);}
const failures=[];
for(const e of eco.packages){try{await import(e.name);}catch(err){failures.push(`${e.name}: ${err?.message??err}`);}}
if(failures.length){console.error(failures.join("\n"));process.exit(1);}
console.log(`Verified ${eco.packages.length} ecosystem packages.`);
