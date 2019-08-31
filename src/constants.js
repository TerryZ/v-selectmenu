/**
 * the root menu code for multiple level menu of regular menu
 */
export const MENU_ROOT = 'root'

export const DIVIDER = 'sm-divider'

/**
 * menu type
 */
export const REGULAR = 'regular'
export const ADVANCED = 'advanced'

export const languages = {
  // Chinese
  cn: {
    select_all_btn: '选择所有 (或当前页签) 项目',
    remove_all_btn: '清除所有选中的项目',
    close_btn: '关闭菜单 (Esc键)',
    not_found: '无查询结果',
    max_selected: '最多只能选择 max_selected_limit 个项目',
    advanced_default: '请选择',
    regular_group: '多组菜单',
    items_selected: '已选择 selected_count 个项目'
  },
  // English
  en: {
    select_all_btn: 'Select All (Tabs) items',
    remove_all_btn: 'Clear all selected items',
    close_btn: 'Close Menu (Esc key)',
    not_found: 'not found',
    max_selected: 'You can only select up to max_selected_limit items',
    advanced_default: 'Select an option',
    regular_group: 'Menus',
    items_selected: 'selected_count items selected'
  },
  // Spanish(Español)
  es: {
    select_all_btn: 'Selecciona todos los elementos (Esta pestaña)',
    remove_all_btn: 'Limpiar todos los elementos seleccionados',
    close_btn: 'Cerrar menú (Tecla Esc)',
    not_found: 'No encontrado',
    max_selected: 'Solo puedes seleccionar un máximo de hasta max_selected_limit elementos',
    advanced_default: 'Seleccione una opción',
    regular_group: 'Menús',
    items_selected: 'selected_count items Seleccionado'
  },
  // Persian
  fa: {
    select_all_btn: 'انتخاب تمام موارد',
    remove_all_btn: 'حذف تمام موارد',
    close_btn: 'بستن (دمنه Esc(',
    not_found: 'موردی یافت نشد',
    max_selected: 'شما تنها مجاز به انتخاب max_selected_limit items آیتم هستید',
    advanced_default: 'یک مورد را انتخاب کنید',
    regular_group: 'منو ها',
    items_selected: 'selected_count مورد انتخاب شد'
  },
  // Japanese
  ja: {
    select_all_btn: 'すべての （または現在のタブ） 項目を選択',
    remove_all_btn: '選択したすべての項目をクリアする',
    close_btn: '閉じる (Tabキー)',
    not_found: '(0 件)',
    max_selected: '最多で max_selected_limit のプロジェクトを選ぶことしかできません',
    advanced_default: '選択してください',
    regular_group: '複数のグループメニュー',
    items_selected: 'selected_count アイテムが選択されました'
  }
}
