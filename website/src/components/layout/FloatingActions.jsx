import { useEffect, useRef, useState } from 'react'
import { company } from '../../data/content'
import { openWhatsApp } from '../../utils/whatsapp'
import { quickPrompts, replyToAssistant } from '../../utils/assistant'
import Icon from '../ui/Icon'

const callHref = `tel:+91${company.contact.phone.replace(/\D/g, '')}`

export default function FloatingActions() {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: `Hi, I am the ARYAN helper. Ask about terrace gardens, free inspection, or what we install — or tap WhatsApp / Call.`,
    },
  ])
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, open])

  const send = (text) => {
    const value = (text || draft).trim()
    if (!value) return
    const answer = replyToAssistant(value)
    setMessages((prev) => [...prev, { role: 'user', text: value }, { role: 'bot', text: answer }])
    setDraft('')
  }

  const onWhatsApp = () => {
    openWhatsApp(
      'Hi ARYAN ORGANICS, I would like to know more about terrace garden setup.',
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-forest-800/10 bg-white shadow-2xl shadow-forest-950/20">
          <div className="flex items-center justify-between gap-3 bg-forest-800 px-4 py-3 text-white">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leaf-400 text-forest-950">
                <Icon name="Bot" className="w-4 h-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight">Ask ARYAN</p>
                <p className="text-[0.65rem] text-leaf-200/80 truncate">
                  Small AI helper · replies instantly
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-white/80 hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <Icon name="X" className="w-4 h-4" />
            </button>
          </div>

          <div ref={listRef} className="max-h-64 space-y-2.5 overflow-y-auto bg-mist px-3 py-3">
            {messages.map((m, i) => (
              <div
                key={`${m.role}-${i}`}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <p
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'rounded-br-md bg-forest-800 text-white'
                      : 'rounded-bl-md bg-white text-forest-800 shadow-sm border border-forest-800/8'
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => send(prompt)}
                  className="rounded-full border border-forest-800/15 bg-white px-2.5 py-1 text-[0.7rem] font-medium text-forest-700 hover:border-forest-700 hover:bg-leaf-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send()
            }}
            className="flex items-center gap-2 border-t border-forest-800/8 bg-white p-2.5"
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type a question..."
              className="min-w-0 flex-1 rounded-lg border border-forest-800/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400"
            />
            <button
              type="submit"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-800 text-white hover:bg-forest-700"
              aria-label="Send message"
            >
              <Icon name="Send" className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <div className="flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest-800 shadow-lg shadow-black/20 ring-2 ring-white hover:bg-leaf-50"
          aria-label={open ? 'Close chat' : 'Open AI chat'}
          title="Ask ARYAN"
        >
          <Icon name={open ? 'X' : 'Bot'} className="w-5 h-5" />
        </button>
        <a
          href={callHref}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563eb] text-white shadow-lg shadow-black/20 ring-2 ring-white hover:bg-[#1d4ed8]"
          aria-label={`Call ${company.contact.phoneDisplay}`}
          title="Call Now"
        >
          <Icon name="Phone" className="w-5 h-5" />
        </a>
        <button
          type="button"
          onClick={onWhatsApp}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 ring-2 ring-white hover:bg-[#20bd5a]"
          aria-label="Chat on WhatsApp"
          title="WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
