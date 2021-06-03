const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'https://geekpickernews.vercel.app/' : 'https://geekpickernews.vercel.app/'