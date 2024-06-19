/// <reference path="../.astro/actions.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    userEmail: string | null;
  }
}
interface ImportMetaEnv {
  readonly XATA_API_KEY: string;
  readonly XATA_BRANCH?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}