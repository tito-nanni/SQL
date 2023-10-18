import { Sequelize } from "sequelize";

async function connectToDB(dbURI){
    console.log(`Connecting to DB: ${dbURI}`)

const sequelize = new Sequelize(dbURI, {
    logging: false,
    define: {
        timestamps: false,
        underscored: true
    }
})

try{
    await sequelize.authenticate()
    console.log('Connected successfully!')
} catch (error) {
    console.log(`Unable to connect to ${dbURI}`, error)
}

return sequelize
}

export default connectToDB