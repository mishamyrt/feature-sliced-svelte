export function setFSDAttributes(el: HTMLElement, name: string) {
  const [layer] = name.split('/')
  el.setAttribute('data-fsd', name)
  el.setAttribute('data-fsd-layer', layer)
}
