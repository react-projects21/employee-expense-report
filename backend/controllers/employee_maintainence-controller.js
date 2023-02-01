import employee_maintainence from "../models/employee_maintainence";

export const getAllEpmloyee = async (req, res, next) => {
    let employee;
    try{
        employee =await employee_maintainence.find();
    } catch (err) {
        return console.log(err)
    }
    if (!employee){
        return res.this.status(404).json({message:"No data Found"})
    }
    return res.status(200).json({employee})
}

export const addEmployee =  async (req, res, next) => {
    const {emp_no,emp_name,emp_position,emp_manager,emp_department } = req.body;
    const employees =  new employee_maintainence({
        emp_no,
        emp_name,
        emp_position,
        emp_manager,
        emp_department
    });
    try{
       await employees.save()
    } catch (err){
        return console.log(err)
    }
    return res.status(200).json({employees})
}

export const updateEmployee = async (req , res , next) => {
    const {emp_no,emp_name,emp_position,emp_manager,emp_department } = req.body;
    const employeeId = req.params.id;
    let employees;
    try{
        employees = await employee_maintainence.findByIdAndUpdate(employeeId, {
            emp_no,emp_name,emp_position,emp_manager,emp_department


    })
} catch (err){
    return console.log(err)
}
if (!employees){
    return res.status(500).json({message: "Unable To update the student"})
}
return res.status(200).json({employees})
}

export const getById = async (req , res , next ) => {
    const id = req.params.id;
    let employees;
    try{
        employees = await employee_maintainence.findById(id);
    } catch (err) {
        return console.log(err);
    }
    if (!employees){
        return res.status(404).json({message: "No Student Found"})
    }
    return res.status(200).json({employees});
}

export  const deleteEmployee =async (req , res ,next  ) => {
    const id = req.perams.id;

    let employees ;
    try {
        employees = await employee_maintainence.findByIdAndRemove(id)
    } catch (err) {
    console.log(err);
    }
    if(!employees){
        return res.status(500).json({messsage: "Unable To Delete Student"})
    }
    return res.status(200).json({message:"Sucessfully Deleted"})
}
