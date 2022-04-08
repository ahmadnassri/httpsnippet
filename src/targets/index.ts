import { Request } from '..';
import { c } from './c';
import { clojure } from './clojure';
import { csharp } from './csharp';
// import { go } from './go';
// import { http } from './http';
// import { java } from './java';
// import { javascript } from './javascript';
// import { kotlin } from './kotlin';
// import { node } from './node';
// import { objc } from './objc';
// import { ocaml } from './ocaml';
// import { php } from './php';
// import { powershell } from './powershell';
// import { python } from './python';
// import { r } from './r';
// import { ruby } from './ruby';
// import { shell } from './shell';
// import { swift } from './swift';

export type TargetId = keyof typeof targets;

export type ClientId = string;

export interface ClientInfo {
  key: ClientId;
  title: string;
  link: string;
  description: string;
}

export type Converter = (request: Request, options?: any) => string;

export interface Client {
  info: ClientInfo;
  convert: Converter;
}

export type Extension = `.${string}`;

export interface TargetInfo {
  key: TargetId;
  title: string;
  extname: Extension;
  default: string;
}

export type Target = {
  info: TargetInfo;
  clientsById: Record<ClientId, Client>;
}

export const targets = {
  c,
  clojure,
  csharp,
  // go,
  // http,
  // java,
  // javascript,
  // kotlin,
  // node,
  // objc,
  // ocaml,
  // php,
  // powershell,
  // python,
  // r,
  // ruby,
  // shell,
  // swift,
};
