export type NullableKeys<T> = { [K in keyof T]: T[K] | null | undefined }
