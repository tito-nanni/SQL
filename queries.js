const {Department, Employee, db} = await import('./model.js')

const newDept = await Department.create({
    deptCode: 'legal',
    deptName: 'Legal',
    phone: '555-2222'
})

const hr = await Department.create({
    deptCode: 'hr',
    deptName: 'HR',
    phone: '555-6969'
})

const jalen = await Employee.create({
    name: 'Jalen',
    state: 'PA',
    salary: 500000,
})

const ian = await Employee.create({
    name: 'Ian',
    state: 'IN',
    salary: 25000,
})

const marcus = await Employee.create({
    name: 'Marcus',
    state: 'OR',
    salary: 100000,
})

const tanner = await Employee.create({
    name: 'Tanner',
    state: 'CA',
    salary: 50000,
})

// const emps = await Employee.findAll()
// fffff = await Employee.findByPk(3)
// const inEmps = await Employee.findAll({ where: {state: 'IN'}})