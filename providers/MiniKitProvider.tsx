"use client"

import type { ReactNode } from "react"
import { MiniKitProvider } from "@coinbase/minikit"
import { base } from "@coinbase/minikit/chains"

export function MiniKitContextProvider({ children }: { children: ReactNode }) {
  return (
    <MiniKitProvider apiKey={process.env.NEXT_PUBLIC_CDP_CLIENT_API_KEY} chain={base}>
      {children}
    </MiniKitProvider>
  )
}
