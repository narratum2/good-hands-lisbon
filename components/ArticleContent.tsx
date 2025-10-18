'use client'

import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ArticleContentProps {
  content: string
}

// Type-safe markdown components with proper accessibility
const markdownComponents: any = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-4xl font-serif text-ink mt-16 mb-6 scroll-mt-20" id="article-heading">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-3xl font-serif text-ink mt-12 mb-4 scroll-mt-20" id={`heading-${String(children).toLowerCase().replace(/\s+/g, '-')}`}>
      {children}
    </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-2xl font-serif text-ink mt-8 mb-3 scroll-mt-20" id={`heading-${String(children).toLowerCase().replace(/\s+/g, '-')}`}>
      {children}
    </h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-harbor text-lg leading-relaxed mb-6">{children}</p>
  ),
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote 
      className="border-l-4 border-gold pl-6 italic text-xl text-harbor/80 my-8 bg-porcelain/30 py-4 rounded-r-lg"
      role="complementary"
      aria-label="Quote"
    >
      {children}
    </blockquote>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-none space-y-3 my-6" role="list">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside space-y-3 my-6 text-harbor text-lg" role="list">
      {children}
    </ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="flex items-start gap-3 text-harbor text-lg leading-relaxed" role="listitem">
      <span className="text-gold mt-1.5 flex-shrink-0">•</span>
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold text-ink">{children}</strong>
  ),
  em: ({ children }: { children: ReactNode }) => (
    <em className="italic text-harbor">{children}</em>
  ),
  a: (props: any) => (
    <Link 
      href={props.href || '#'} 
      className="text-gold hover:text-gold/80 transition-colors underline focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={`External link: ${props.children}`}
    >
      {props.children}
    </Link>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <code className="bg-porcelain px-2 py-1 rounded text-sm font-mono text-ink border">
      {children}
    </code>
  ),
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-ink text-white p-4 rounded-lg my-6 overflow-x-auto">
      <code className="bg-transparent p-0 text-sm">
        {children}
      </code>
    </pre>
  ),
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <article 
      className="editorial-content prose prose-lg max-w-none"
      role="main"
      aria-label="Article content"
    >
      <ReactMarkdown components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </article>
  )
}

