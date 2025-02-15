import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CraftCard from '../CraftCard/CraftCard'; // Ensure this path is correct

const AllArtCraftItems = () => {
  const crafts = useLoaderData(); // Use data from loader

  return (
    <div className="mt-[100px]">
      <Helmet>
        <title>AllArtCraftItems</title>
      </Helmet>
      <div className="text-4xl lg:text-6xl font-bold p-2 lg:p-10 bg-green-500 text-white mb-20 h-[300px] flex justify-center items-center">
        <h2 className="animate__animated animate__fadeInLeft">
          All Art & Craft Items: {crafts.length}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 m-10">
        {crafts.map(data => (
          <CraftCard key={data.id} data={data}></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default AllArtCraftItems; 
