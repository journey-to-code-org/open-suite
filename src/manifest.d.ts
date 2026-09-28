export interface EcosystemPackage { repo:string; name:string; version:string; range:string; description:string; category:string; namespace:string; subpath:string; dev:boolean; }
export const packages: readonly EcosystemPackage[];
export const packageCount: number;
export const categories: readonly string[];
export function getPackage(name:string): EcosystemPackage | null;
export function getPackagesByCategory(category:string): EcosystemPackage[];
