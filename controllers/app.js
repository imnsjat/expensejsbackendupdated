const Expense = require('../models/expenses');

exports.postExpense =(req,res,next)=>{
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
    Expense.create({amount : amount , description : description , category : category})
    .then((data)=>res.json(data))
    .catch(err=>console.log(err));
}

exports.getExpense = (req,res,next)=>{
    Expense.findAll()
    .then((expenses)=>{
        // console.log('fetched' , expenses  );
        res.json(expenses);
    })
    .catch()
}

exports.deleteExpense=(req,res,next)=>{
    const expid =req.body.id;
    Expense.findAll({where :{id:expid}})
    .then( expense =>{
        return expense[0].destroy();
    }
    ).then((data)=>res.json(data))
    .catch(err=>console.log(err))

}