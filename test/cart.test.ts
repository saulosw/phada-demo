import assert from 'node:assert/strict'
import { test } from 'node:test'
import { FLAT_SHIPPING_CENTS, shippingCents, subtotalCents, totalCents } from '../src/cart.ts'

const book = { name: 'Book', priceCents: 1250, quantity: 2 }
const pen = { name: 'Pen', priceCents: 199, quantity: 3 }

test('the subtotal adds every line', () => {
  assert.equal(subtotalCents([book, pen]), 3097)
})

test('an empty cart ships for free', () => {
  assert.equal(shippingCents(0), 0)
})

test('the total adds the flat shipping', () => {
  assert.equal(totalCents([book, pen]), 3097 + FLAT_SHIPPING_CENTS)
})

test('orders over $50 ship for free', () => {
  assert.equal(shippingCents(6000), 0)
})
