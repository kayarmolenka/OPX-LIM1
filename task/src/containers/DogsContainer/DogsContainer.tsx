import { useEffect, useState } from "react";
import "./dogsContainer.css";
import { dogsService } from "../../services";
import { CustomModal } from "../../components";

export const DogsContainer = () => {
  const [breedsDogs, setBreedsDogs] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [breedsDogsExtraData, setBreedsDogsExtraData] = useState<any>([]);

  const fetchData = async () => {
    try {
      const data = await dogsService("https://dogapi.dog/api/v2/breeds");
      setBreedsDogs(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const openBreedModal = async (id: string) => {
    const dataCertainDogs = await dogsService(
      `https://dogapi.dog/api/v2/breeds/${id}`
    );

    setBreedsDogsExtraData(dataCertainDogs.data);
    setIsOpenModal(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return breedsDogs ? (
    <div className="breeds-dog__wrapper">
      <ul>
        {breedsDogs.map((breed: any) => {
          return (
            <li key={breed.id} onClick={() => openBreedModal(breed.id)}>
              <p>{`Name: ${breed.attributes.name}`}</p>
              {breedsDogsExtraData && isOpenModal && (
                <CustomModal
                  isOpen={isOpenModal}
                  text={` Name: ${
                    breed.attributes.name
                  } Description: ${breed.attributes.description
                    .split(" ")
                    .splice(0, 3)}`}
                  fullDescription={breedsDogsExtraData.attributes?.description}
                  lifeMin={breedsDogsExtraData.attributes?.life.min}
                  lifeMax={breedsDogsExtraData.attributes?.life.max}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
