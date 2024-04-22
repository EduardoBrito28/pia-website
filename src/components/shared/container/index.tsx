import { ReactNode } from "react"

interface contain {
  children: ReactNode
}

export default function Container({ children }: contain) {
  return (
    <div className="flex flex-col justify-center items-center  w-full">
      <div className="w-[96%] max-w-[1480px]">
        {children}
      </div>
    </div>
  )
}