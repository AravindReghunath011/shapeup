import { Request, Response } from "express";
import { SessionData } from "express-session";
import { hashPassword } from "../../utils/reuseFunctions";

export default async (dependencies: any, data: any) => {
  console.log("helooooooooooooooooooolasdfl");

  const {
    useCase: { acceptedRequest_useCase },
  } = dependencies;

  try {
    console.log("helo there ");

    const { executeFunction } = await acceptedRequest_useCase(dependencies);

    const newTrainer = await executeFunction(data);
  } catch (error: any) {
    console.log(error.message, "err in accept controller");
    // res.json({message:error.message})
  }
};
