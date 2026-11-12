/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Form endpoint (Formspree / Web3Forms / your own API). Optional. */
  readonly VITE_FORM_ENDPOINT?: string
  /** Web3Forms access key. Optional. */
  readonly VITE_WEB3FORMS_KEY?: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
