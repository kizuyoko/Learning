// Autobind decorator; instead of adding .bind(this)
export function autobind(
  _: any,
  _2: string,
  descripter: PropertyDescriptor
) {
  const originalMethod = descripter.value;
  const adjDescripter: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescripter
}
