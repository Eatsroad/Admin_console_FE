interface Data {
  data: any
  onClick: any
}

export interface ListClass {
  Viewer: ({data, onClick}: Data) => JSX.Element
}