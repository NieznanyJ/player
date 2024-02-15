import React from 'react';
import MainMovieCarousel from '@/components/mainMovieCarousel/MainMovieCarousel';
import Wrapper from '@/components/wrapper/Wrapper';



export default function Home() {
  return (
    <main className="main">
        <MainMovieCarousel />
        <Wrapper />

    </main>
  );
}
