import expense_details from "../models/expense_details.js";

export const getAllExpense = async (req, res, next) => {
  let expense;
  try {
    expense = await expense_details.find();
  } catch (err) {
    return console.log(err);
  }
  if (!expense) {
    return res.this.status(404).json({ message: "No data Found" });
  }
  return res.status(200).json({ expense });
};

export const addExpense = async (req, res, next) => {
  const {
    serial_id,
    exp_id,
    e_date,
    location,
    expense_type,
    mileage,
    amount,
    charged_to_fourjs,
    total_charge_to_fourjs,
    total_paid_by_employee,
    file_upload,
   
  } = req.body;
  const expenses = new expense_details({
    serial_id,
    exp_id,
    e_date,
    location,
    expense_type,
    mileage,
    amount,
    charged_to_fourjs,
    total_charge_to_fourjs,
    total_paid_by_employee,
    file_upload,

  });
  try {
    await expenses.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ expenses });
};

export const updateExpense = async (req, res, next) => {
  const {  serial_id,
    exp_id,
    e_date,
    location,
    expense_type,
    mileage,
    amount,
    charged_to_fourjs,
    total_charge_to_fourjs,
    total_paid_by_employee,
    file_upload} =
    req.body;
  const expenseId = req.params.id;
  let expenses;
  try {
    expenses = await expense_details.findByIdAndUpdate(expenseId, {
        serial_id,
        exp_id,
        e_date,
        location,
        expense_type,
        mileage,
        amount,
        charged_to_fourjs,
        total_charge_to_fourjs,
        total_paid_by_employee,
        file_upload
    });
  } catch (err) {
    return console.log(err);
  }
  if (!expenses) {
    return res.status(500).json({ message: "Unable To update the student" });
  }
  return res.status(200).json({ expenses });
};

export const getById = async (req, res, next) => {
  const id = req.params.id;
  let expenses;
  try {
    expenses = await expense_details.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!expenses) {
    return res.status(404).json({ message: "No Student Found" });
  }
  return res.status(200).json({ expenses });
};

export const deleteExpense = async (req, res, next) => {
  const id = req.perams.id;

  let expenses;
  try {
    expenses = await expense_details.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!expenses) {
    return res.status(500).json({ messsage: "Unable To Delete Student" });
  }
  return res.status(200).json({ message: "Sucessfully Deleted" });
};
