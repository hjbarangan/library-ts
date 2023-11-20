import { getAllPublishers, getPublisherById, createPublisher, updatePublisher, deletePublisher } from "../data-access/publisher.query";
import { Publisher } from "../interfaces";

const getAllPublishersService = async () => {
  try {
    const categories = await getAllPublishers();
    return categories;
  } catch (error) {
    console.log(error);
  }
};

const getPublisherByIdService = async (publisherId: number) => {
    try {
        const publisher = await getPublisherById(publisherId);
        return publisher;
    } catch (error) {
        console.log(error);
    }
    }

const createPublisherService = async (publisher: Publisher) => {
    try {
        const newPublisher = await createPublisher(publisher);
        return newPublisher;
    } catch (error) {
        console.log(error);
    }
}

const updatePublisherService = async (
    publisher: Publisher,
    publisherId: any
  ) => {
    try {
      const updatedPublisher = await updatePublisher(publisher, publisherId);
      return updatedPublisher;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


const deletePublisherService = async (publisherId: number) => {
    try {
        const deletedPublisher = await deletePublisher(publisherId);
        return deletedPublisher;
    } catch (error) {
        console.log(error);
    }
}

export {getAllPublishersService, getPublisherByIdService, createPublisherService, updatePublisherService, deletePublisherService}; 