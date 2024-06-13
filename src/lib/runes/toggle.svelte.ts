export function createToggle() {
  let toggle = false;
  return {
    get toggle() { return toggle },
    setToggle: () => toggle = !toggle
  }
}
