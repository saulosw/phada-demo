# AGENTS.md

Rules for anyone changing this repository, people and tools alike.

- Money is always an integer number of cents (`priceCents`, `subtotalCents`). Never convert to
  dollars or use floating-point amounts in calculations; format to dollars only for display.
- Every function that takes or returns money says `Cents` in its name.
- Every change to pricing comes with a test of its boundaries.
