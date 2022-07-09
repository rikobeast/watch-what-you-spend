import type { NextPage } from 'next';
import Calendar from '../components/Calendar/Calendar';

const Home: NextPage = () => {
  return (
    <div className="max-w-full w-full h-screen">
      <Calendar />
    </div>
  );
};

export default Home;
