import { getMovie } from '@/prisma/movies'
import { NextResponse } from 'next/server'
import React from 'react'

export async function GET(req:any, slug:any) {
    const slug1 = slug.params.slug
    try {
        const movie = await getMovie(slug1)
        if (!movie) {
            return new NextResponse('not found', { status: 404 })
          }
      
          return NextResponse.json({
            movie
          })
      } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
      }
}
