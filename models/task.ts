import { DataTypes } from 'sequelize'

export default function Task(sequelize: any) {
  var Task = sequelize.define(
    'task',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      color: {
        type: DataTypes.STRING,
        allowNull: true
      },
      memoDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      memoSent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: 'task',
      paranoid: true,
      timestamps: true
    }
  )

  return Task
}
