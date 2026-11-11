export interface LineItem {
  name: string
  priceCents: number
  quantity: number
}

export const FLAT_SHIPPING_CENTS = 799

export function subtotalCents(items: readonly LineItem[]): number {
  return items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0)
}

export function shippingCents(subtotal: number): number {
  return subtotal === 0 ? 0 : FLAT_SHIPPING_CENTS
}

export function totalCents(items: readonly LineItem[]): number {
  const subtotal = subtotalCents(items)
  return subtotal + shippingCents(subtotal)
}
