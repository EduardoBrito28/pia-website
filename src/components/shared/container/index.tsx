import { ReactNode } from "react"

interface contain {
    children: ReactNode
}

export default function Container({children}:contain) {
    return (
      <div className="w-full flex flex-col">
        {children}
      </div>
    )
  }