const armyCount = 'armyCount'
const defense = 'defense'
const farmerCount = 'farmerCount'
const food = 'food'
const freedom = 'freedom'
const militiaCount = 'militiaCount'
const payment = 'payment'
const security = 'security'

export default {
  burgher: [
    {
      actor: 'burgher',
      action: 'educate',
      increase: [{ key: payment, value: 4 }, { key: freedom, value: 1 }],
      decrease: []
    },
    {
      actor: 'burgher',
      action: 'recruit as militia',
      increase: [
        { key: militiaCount, value: 1 },
        { key: security, value: 3 },
        { key: payment, value: 2 },
      ],
      decrease: [
        { key: freedom, value: 2 }
      ]
    },
    {
      actor: 'burgher',
      action: 'send to farm',
      increase: [
        { key: farmerCount, value: 1 },
        { key: freedom, value: 1 },
        { key: food, value: 2 }
      ],
      decrease: []
    },
    {
      actor: 'burgher',
      action: 'recruit as infantry',
      increase: [
        { key: armyCount, value: 1 },
        { key: defense, value: 5 },
        { key: payment, value: 5 }
      ],
      decrease: []
    },

  ]
}