import type { LanguageModelV2CallOptions } from "@ai-sdk/provider"

export interface ACPProviderConfig {
  command: string
  args: string[]
  env?: Record<string, string>
  models: Record<
    string,
    {
      id: string
      maxTokens?: number
    }
  >
}

export interface ACPModelConfig {
  modelId: string
  command: string
  args: string[]
  env?: Record<string, string>
  maxTokens?: number
  settings?: LanguageModelV2CallOptions
}
