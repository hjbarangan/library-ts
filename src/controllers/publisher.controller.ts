import { Request, Response } from "express";
import * as PublisherService from "../services/publisher.service";
import { Publisher } from "../interfaces";

const getAllPublishers = async (req: Request, res: Response) => {
  try {
    const categories = await PublisherService.getAllPublishersService();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error getting categories:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const getPublisherById = async (req: Request, res: Response) => {
  try {
    const publisherId: number = parseInt(req.params.id);
    const publisher =
      await PublisherService.getPublisherByIdService(publisherId);
    res.status(200).json(publisher);
  } catch (error) {
    console.error("Error getting publisher:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

const createPublisher = async (req: Request, res: Response) => {
  try {
    // const { publisher_name, publisher_location } = req.body;
    const publisher: Publisher = req.body;
    const publisherData =
      await PublisherService.createPublisherService(publisher);
    res.status(201).json({ message: "Publisher created", data: publisherData });
  } catch (error) {
    console.error("Error creating publisher:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};
const updatePublisher = async (req: Request, res: Response) => {
  try {
    const updatedPublisher: Publisher = req.body;
    const publisherId: number = parseInt(req.params.id);
    await PublisherService.updatePublisherService(
      updatedPublisher,
      publisherId
    );

    res.status(200).json({ message: "Category updated" });
  } catch (error: any) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

const deletePublisher = async (req: Request, res: Response) => {
  try {
    const publisherId: number = parseInt(req.params.id);
    await PublisherService.deletePublisherService(publisherId);
    res.status(200).json({ message: "Publisher deleted" });
  } catch (error) {
    console.error("Error deleting publisher:", error);
    res.status(400).json({ error: `Error: ${error}` });
  }
};

export {
  getAllPublishers,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher
};
