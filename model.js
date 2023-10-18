import { DataTypes, Model} from 'sequelize'
import connectToDB from './db.js'
import util from 'util'

const db = await connectToDB('postgresql:///employees')

class Department extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

Department.init(
    {
        deptCode: {
            type: DataTypes.STRING(5),
            primaryKey: true
        },
        deptName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING
        }
    },
    {
        modelName: 'department',
        sequelize: db
    }
)

class Employee extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        },

        state: {
            type: DataTypes.STRING(2),
            defaultValue: 'CA'
        }, 
        salary: {
            type: DataTypes.INTEGER
        },
        // deptCode: {
        //     type:DataTypes.STRING(5),
        // }
    },
        {
            modelName: 'employee',
            sequelize: db
        }
    )

    Department.hasMany(Employee, {foreignKey: 'deptCode'})
    Employee.belongsTo(Department, {foreignKey: 'deptCode'})

    console.log('Syncing data')
    await db.sync()
    console.log('Database synced!')

    export {Department, Employee, db}