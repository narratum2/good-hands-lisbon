import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Good Hands — Beauty Concierge for Lisbon & Beyond'
  const subtitle = searchParams.get('subtitle') || 'Premium beauty services in Lisbon\'s most elegant neighborhoods'

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Gold border top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #c9a961, transparent)',
          }}
        />

        {/* Logo / Brand */}
        <div
          style={{
            fontSize: '14px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#c9a961',
            marginBottom: '32px',
            fontFamily: 'Georgia, serif',
          }}
        >
          GOOD HANDS
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 50 ? '42px' : '54px',
            color: '#f8f6f3',
            fontFamily: 'Georgia, serif',
            fontWeight: 300,
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: '900px',
            marginBottom: '24px',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '20px',
            color: 'rgba(248, 246, 243, 0.6)',
            fontFamily: 'Georgia, serif',
            fontWeight: 300,
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </div>

        {/* Gold border bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '12px',
            letterSpacing: '0.2em',
            color: 'rgba(201, 169, 97, 0.5)',
            textTransform: 'uppercase',
          }}
        >
          beautysalonlisbon.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
