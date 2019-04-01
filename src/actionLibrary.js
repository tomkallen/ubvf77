export default {
  burgher: [
    {
      actor: 'burgher',
      action: 'recruit as militia',
      increase: [
        { militiaCount: 1, security: 5, payment: 3 }
      ],
      decrease: [
        { freedom: 2 }
      ]
    },
    {
      actor: 'burgher',
      action: 'send to farm',
      increase: [
        { farmerCount: 1, freedom: 1, food: 2 }
      ],
      decrease: []
    },
    {
      actor: 'burgher',
      action: 'recruit as infantry',
      increase: [{ armyCount: 1, defence: 5, payment: 5 }],
      decrease: []
    }
  ]
}