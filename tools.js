class Tools {
  static setStyle(st_new, st_ini) {
  for (let key in st_new)
    if (st_new != st_ini)
      st_ini[key] = st_new[key]
  return st_ini
  }

  // colors
  static theme = {
    colPri: '',
    colSec: '',
    colPriAccent: '',
    colSecAccent: ''
  }

  // dimensions
  static btn_ht = '40px'
  static def_inner_paddding = '16px'
  static def_outer_margin = '8px'
  
  // deco(s)
  static border_thin_black = 'solid 1px #8b8278'
  
  
  
  static lorem_ipsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
}

export default Tools