function generateItem (
  namePrefix = 'item',
  titlePrefix = 'title',
  startNumber = 1,
  quantity = 1
) {
  return Array(quantity).fill('').map((item, index) => ({
    name: `${namePrefix}-${index + startNumber}`,
    title: `${titlePrefix}-${index + startNumber}`
  }))
}

export const groupItems = [{
  name: 'group1',
  title: 'Group1',
  items: generateItem('item', 'title', 1, 10)
}, {
  name: 'group2',
  title: 'Group2',
  items: generateItem('item', 'title', 11, 10)
}]
