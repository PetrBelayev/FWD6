import React from 'react';
import Layout from '../components/Layout';
import Comic from '../components/Comic';
import { format } from 'date-fns';

export async function getServerSideProps() {
  const response = await fetch('https://fwd.innopolis.university/api/hw2?email=p.belayev@innopolis.university');
  const comicId = await response.json();
  const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
  const comicData = await comicResponse.json();

  const comic = {
    title: comicData.safe_title,
    imageUrl: comicData.img,
    date: `${comicData.year}-${comicData.month}-${comicData.day}`,
  };

  return { props: { comic } };
}

const Home: React.FC<{ comic: Comic }> = ({ comic }) => {
  const currentDate = format(new Date(comic.date), 'MMMM dd, yyyy');

  return (
    <Layout>
      <Comic title={comic.title} imageUrl={comic.imageUrl} date={currentDate} />
    </Layout>
  );
};

export default Home;
