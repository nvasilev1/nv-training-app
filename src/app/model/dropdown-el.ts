export const Elements: any = [
    { id: 1, name: 'propertyType', defaultOption: 'Вид имот', options: ['Къща', 'Апартамент'] , values: ['house','apartment']},
    { id: 2, name: 'area', defaultOption: 'Площ', options: ['Под 50 кв.м', '50-60 кв.м', '61-70 кв.м', 'Над 70 кв.м'] , values: ['<50','50-60', '61-70','>70'] },
    { id: 3, name: 'type', defaultOption: 'Вид строутелство', options: ['Tухла', 'ЕПК', 'Панел'] , values: ['brick','epk', 'panel'] },
    { id: 4, name: 'year', defaultOption: 'Година на строеж', options: ['<2005', '2005-2015', '2015>'] , values: ['<2005', '2005-2015', '2015>'] },
    { id: 5, name: 'floor', defaultOption: 'Етаж', options: ['1', '2', '3','4','>4'] , values: ['1', '2', '3','4','>4'] },
    { id: 6, name: 'floorBuilding', defaultOption: 'Етажи на сградата', options: ['1', '2', '3','4','>4'] , values: ['1', '2', '3','4','>4'] },
    { id: 7, name: 'furniture', defaultOption: 'Обзавеждане', options: ['Да', 'Не'] , values: ['Yes', 'No'] },
    { id: 8, name: 'condition', defaultOption: 'Състояние', options: ['Добро', 'Нужда от ремонт'] , values: ['good', 'repair'] }
];