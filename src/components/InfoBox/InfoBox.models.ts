import { PropsWithChildren, ReactElement } from "react"

export interface InfoBoxProps extends PropsWithChildren {
  title: string
  options: ReactElement
}