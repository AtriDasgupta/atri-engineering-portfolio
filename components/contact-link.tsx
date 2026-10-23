'use client'
import { useState } from 'react'

type Kind = 'email' | 'phone'
// Splitting/reversing strings removes the raw contact values from initial HTML.
// This only deters basic static scrapers: users and sophisticated bots can recover them.
const chunks: Record<Kind, string[]> = {
  email: ['moc.liamg@', 'atpugsadirt aa'.replace(' ', '')],
  phone: ['0552', '0301', '88'],
}
function reveal(kind: Kind) {
  if (kind === 'email') return chunks.email.join('').split('').reverse().join('')
  return chunks.phone.join('').split('').reverse().join('')
}
export function ContactLink({ kind }: { kind: Kind }) {
  const [shown, setShown] = useState(false)
  const [value, setValue] = useState('')
  function onReveal() { setValue(reveal(kind)); setShown(true) }
  if (!shown) return <button type="button" onClick={onReveal} aria-label={`Reveal ${kind} address`} className="underlined focus-ring text-left">Reveal {kind === 'email' ? 'email address' : 'phone number'} <span aria-hidden="true">↗</span></button>
  return <a className="underlined focus-ring break-all" href={kind === 'email' ? `mailto:${value}` : `tel:+91${value}`} aria-label={kind === 'email' ? `Email ${value}` : `Call ${value}`}>{value} <span aria-hidden="true">↗</span></a>
}
