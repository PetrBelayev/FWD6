import React from 'react';
import Layout from '../components/Layout';
import Comic from '../components/Comic';
import { GetServerSideProps } from 'next';

interface HomeProps {
  comicData: {
    safe_title: string;
    img: string;
    alt: string;
    year: string;
    month: string;
    day: string;
  };
}

const Home: React.FC<HomeProps> = ({ comicData }) => {
  return (
    <Layout>
      <Comic
        title={comicData.safe_title}
        imageUrl={comicData.img}
        date={`${comicData.year}-${comicData.month}-${comicData.day}`}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const email = 'p.belayev@innopolis.university';
  const urlParams = new URLSearchParams({ email });
  const comicIdUrl = `https://fwd.innopolis.university/api/hw2?${urlParams.toString()}`;

  const idResponse = await fetch(comicIdUrl);
  const comicId = await idResponse.json();
  const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;
  const comicResponse = await fetch(comicUrl);
  const comicData = await comicResponse.json();

  return {
    props: { comicData }
  };
};

export default Home;
