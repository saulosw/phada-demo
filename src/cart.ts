export interface LineItem {
  name: string
  priceCents: number
  quantity: number
}

export const FLAT_SHIPPING_CENTS = 799
const FREE_SHIPPING_FROM_DOLLARS = 50

export function subtotalCents(items: readonly LineItem[]): number {
  return items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0)
}

export function shippingCents(subtotal: number): number {
  if (subtotal === 0) return 0
  const dollars = subtotal / 100
  if (dollars > FREE_SHIPPING_FROM_DOLLARS) return 0
  return FLAT_SHIPPING_CENTS
}

export function totalCents(items: readonly LineItem[]): number {
  const subtotal = subtotalCents(items)
  return subtotal + shippingCents(subtotal)
}
