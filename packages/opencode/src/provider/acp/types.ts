import type { LanguageModelV2CallOptions } from "@ai-sdk/provider"
import type { InstanceContext } from "@/project/instance"

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
  instanceCtx?: InstanceContext
}

export interface ACPModelConfig {
  modelId: string
  command: string
  args: string[]
  env?: Record<string, string>
  maxTokens?: number
  settings?: LanguageModelV2CallOptions
  instanceCtx?: InstanceContext
}
