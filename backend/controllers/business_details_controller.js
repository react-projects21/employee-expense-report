import business_details from "../models/business_details";


export const getEveryEmployeeDetails = async (req, res, next) => {
  let business;
  try {
    business = await business_details.find();
  } catch (err) {
    return console.log(err);
  }
  if (!business) {
    return res.this.status(404).json({ message: "No employes found" });
  }
  return res.status(200).json({ business });
};

export const addBusinessExp = async (req, res, next) => {
  const {
    serial_number,
    exp_id,
    b_date,
    b_amount,
    name_or_comp_name,
    transaction,
  } = req.body;
  const businessExp = new business_details({
    serial_number,
    exp_id,
    b_date,
    b_amount,
    name_or_comp_name,
    transaction,
  });
  try {
    await businessExp.save();
  } catch (err) {
    return res.status(200).json({ businessExp });
  }
};

export const updatebusinessExp = async (req, res, next) => {
  const {
    serial_number,
    exp_id,
    b_date,
    b_amount,
    name_or_comp_name,
    transaction,
  } = req.body;
  const businessExpId = req.params.id;
  let businessExp;
  try {
    businessExp = await businessExp.findByIdAndUpdatebusinessExp(
      businessExpId,
      {
        serial_number,
        exp_id,
        b_date,
        b_amount,
        name_or_comp_name,
        transaction,
      }
    );
  } catch (err) {
    return console.log(err);
  }
  if (!businessExp) {
    returnres.status(500).json({ message: "Unable to Update businessExp" });
  }
  return res.status(200).json({ businessExp });
};

export const getById = async (req, res, next) => {
  const id = req.params.id;
  let businessExp;
  try {
    businessExp = await book.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!businessExp) {
    return res.status(404).json({ message: "no businessExp found" });
  }
  return res.status(200).json({ businessExp });
};

export const deletebusinessExp = async (req, res, next) => {
  const id = req.params.id;

  let businessExp;
  try {
    businessExp = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!businessExp) {
    return res.status(500).json({ messsage: "Unable To Delete businessExp" });
  }
  return res.status(200).json({ message: "Sucessfully Deleted" });
};
