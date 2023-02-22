import employee_details from "../models/employee_details";

export const getEveryEmployeeDetails = async (req, res, next) =>{
    let emp_details;
    try{
        emp_details =await employee_details.find();
    } catch (err){
        return console.log(err)
    }
    if (!emp_details){
        return res.this.status(404).json({message:"No employes found"})
    }
    return res.status(200).json({emp_details})
}


export const addEmployee = async (req, res, next) => {
    const {expense_id , notes , charge_type , start_date , end_date , submit_rep} = req.body
    const employee = new employee_details({
        expense_id , 
        notes , 
        charge_type , 
        start_date , 
        end_date , 
        submit_rep

    });
    try{
        await employee.save()
    } catch (err){
        return res.status(200).json({employee})
    }
}


export const updateEmployee = async (req , res , next) => {
    const {expense_id , notes , charge_type , start_date , end_date , submit_rep} = req.body;
    const employeeId = req.params.id;
    let employee;
    try{
        employee = await employee.findByIdAndUpdateEmployee(employeeId,{
            expense_id , 
            notes , 
            charge_type , 
            start_date , 
            end_date , 
            submit_rep
        })
    }catch (err){
        return console.log(err)
    }
    if (!employee){
        returnres.status(500).json({message: "Unable to Update Employee"})
    }
    return res.status(200).json({employee})
}


export const getById = async (req, res , next) => {
    const id = req.params.id;
    let employee;
    try{
        employee = await book.findById(id);
    } catch(err){ 
        return console.log(err);
    }
    if (!employee){
        return res.status(404).json({message:"no employee found"})
    }
    return res.status(200).json({employee});
}

export  const deleteEmployee =async (req , res ,next  ) => {
    const id = req.params.id;

    let employee ;
    try {          
        employee = await Book.findByIdAndRemove(id)
    } catch (err) {
    console.log(err);
    }
    if(!employee){
        return res.status(500).json({messsage: "Unable To Delete employee"})
    }
    return res.status(200).json({message:"Sucessfully Deleted"})
}
