export type CommentPost = {
  guitarId: number,
  userName: string,
  advantage?: string,
  disadvantage?: string,
  comment?: string,
  rating: number,
};

export type CouponPost = {
  coupon: string
};

export type OrderPost = {
  guitarsIds: number[],
  coupon: string
};
