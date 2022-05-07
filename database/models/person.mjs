export default function initPersonModel(sequelize, DataTypes) {
  return sequelize.define(
    'person',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      amount: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
      },
      billId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'bills',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      underscored: true,
    },
  );
}
