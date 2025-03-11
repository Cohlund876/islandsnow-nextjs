'use client';

import FullWidthImage from '@/components/FullWidthImage';
import IslandSnowLogo from '@/components/IslandSnow-Logo';
import MiddleMenu from '@/components/MiddleMenu';
import TopMenu from '@/components/TopMenu';

/** The Home page. */
const Home = () => (
  <main>
    <TopMenu />
    <IslandSnowLogo />
    <MiddleMenu />
    <FullWidthImage />

  </main>
);

export default Home;
