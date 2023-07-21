/** 商品DTO */
export interface ListItem {
  // 商品id
  id: number;
  // 商品图片
  img: string;
  // 商品名称
  name: string;
  // 商品价格
  price: number;
  // 商品数量
  nums: number;
}

/** store */
export interface GlobalDataProps {
  // 商品列表
  list: ListItem[];
  // 购物车列表
  cartList: ListItem[];
}